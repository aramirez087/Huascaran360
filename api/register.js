// =============================================
// Registration API Endpoint
// Handles new race registrations with PayPal
// =============================================

import {
  getEarlyBirdSlots,
  decrementEarlyBirdSlots,
  createRegistration,
} from './lib/db.js';
import {
  createPayPalInvoice,
  sendPayPalInvoice,
  extractInvoiceId,
  extractPayPalUrl,
} from './lib/paypal.js';
import { calculatePrice, generateInvoiceNumber } from './lib/pricing.js';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const { nombre, email, telefono, categoria, mensaje } = req.body;

    if (!nombre || !email || !telefono || !categoria) {
      return res.status(400).json({
        error: 'Faltan campos obligatorios: nombre, email, telefono, categoria',
      });
    }

    console.log('Step 1: Fetching early bird slots...');
    // Get current early bird slots
    const earlyBirdSlots = await getEarlyBirdSlots();
    console.log('Early bird slots:', earlyBirdSlots);

    // Calculate price
    const pricingResult = calculatePrice(earlyBirdSlots);

    if (pricingResult.error) {
      return res.status(400).json({
        success: false,
        error: pricingResult.message,
      });
    }

    const { price, priceType } = pricingResult;

    // Generate invoice number
    const invoiceNumber = generateInvoiceNumber();

    // Prepare registration data
    const registrationData = {
      invoiceNumber,
      name: nombre,
      email,
      phone: telefono,
      category: categoria,
      comments: mensaje,
      price,
      priceType,
    };

    // Create PayPal invoice
    const createResponse = await createPayPalInvoice(registrationData);
    console.log('PayPal createResponse:', JSON.stringify(createResponse, null, 2));

    // Extract invoice ID
    const invoiceId = extractInvoiceId(createResponse);
    console.log('Extracted invoiceId:', invoiceId);

    if (!invoiceId) {
      throw new Error('No se pudo obtener el ID de la factura de PayPal');
    }

    // Send invoice to customer (this activates it)
    console.log('Sending invoice...');
    const sendResponse = await sendPayPalInvoice(invoiceId);
    console.log('Send response:', JSON.stringify(sendResponse, null, 2));

    // Extract PayPal payment URL from send response
    let paypalUrl = extractPayPalUrl(sendResponse) || extractPayPalUrl(createResponse);
    console.log('Extracted paypalUrl:', paypalUrl);

    // If no payer-view link, construct it manually from invoice ID
    if (!paypalUrl) {
      const isProduction = process.env.PAYPAL_ENVIRONMENT === 'production';
      const baseURL = isProduction ? 'https://www.paypal.com' : 'https://www.sandbox.paypal.com';
      paypalUrl = `${baseURL}/invoice/p/${invoiceId}`;
      console.log('Constructed paypalUrl:', paypalUrl);
    }

    // Save to database
    await createRegistration({
      ...registrationData,
      invoiceId,
      paypalUrl,
    });

    // Decrement early bird slots if applicable
    if (priceType === 'early_bird') {
      await decrementEarlyBirdSlots();
    }

    // Return success response
    return res.status(200).json({
      success: true,
      price,
      priceType,
      invoiceNumber,
      invoiceId,
      paypalUrl,
    });

  } catch (error) {
    console.error('Registration error:', error);

    // Return detailed error for debugging (temporary - remove in production)
    return res.status(500).json({
      success: false,
      error: 'Error al procesar la inscripción',
      details: error.message,
      stack: error.stack?.split('\n').slice(0, 3).join('\n'), // First 3 lines
    });
  }
}
