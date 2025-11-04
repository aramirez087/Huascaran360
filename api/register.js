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
  createPayPalOrder,
  extractCheckoutUrl,
} from './lib/paypal-checkout.js';
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

    console.log('Creating PayPal order...');

    // Create PayPal order for checkout
    const orderResponse = await createPayPalOrder(registrationData);
    console.log('PayPal order created:', JSON.stringify(orderResponse, null, 2));

    // Extract order ID and checkout URL
    const orderId = orderResponse.id;
    const checkoutUrl = extractCheckoutUrl(orderResponse);

    console.log('Order ID:', orderId);
    console.log('Checkout URL:', checkoutUrl);

    if (!orderId || !checkoutUrl) {
      throw new Error('No se pudo crear la orden de pago de PayPal');
    }

    // Save to database
    await createRegistration({
      ...registrationData,
      invoiceId: orderId, // Store order ID in invoiceId field for backwards compatibility
      paypalUrl: checkoutUrl,
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
      orderId,
      checkoutUrl,
      message: 'Registro exitoso. Serás redirigido a PayPal para completar el pago.',
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
