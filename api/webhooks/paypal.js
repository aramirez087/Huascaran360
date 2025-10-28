// =============================================
// PayPal Webhook Handler
// Processes payment confirmations from PayPal
// =============================================

import { updatePaymentStatus, getRegistrationByInvoiceId } from '../lib/db.js';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const webhookData = req.body;

    // Log webhook for debugging (in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('PayPal Webhook received:', JSON.stringify(webhookData, null, 2));
    }

    // Check if this is an invoice paid event
    const eventType = webhookData.event_type;

    if (eventType === 'INVOICING.INVOICE.PAID') {
      // Extract invoice data
      const resource = webhookData.resource;
      const invoiceId = resource.id;
      const status = resource.status; // Should be "PAID"

      if (!invoiceId) {
        console.error('No invoice ID in webhook');
        return res.status(400).json({ error: 'No invoice ID provided' });
      }

      // Check if registration exists
      const registration = await getRegistrationByInvoiceId(invoiceId);

      if (!registration) {
        console.warn(`Registration not found for invoice: ${invoiceId}`);
        // Still return 200 to acknowledge receipt
        return res.status(200).json({ received: true, warning: 'Registration not found' });
      }

      // Update payment status in database
      await updatePaymentStatus(invoiceId, status.toLowerCase());

      console.log(`Payment confirmed for invoice: ${invoiceId}`);

      return res.status(200).json({
        success: true,
        message: 'Payment status updated',
        invoiceId,
      });
    }

    // For other event types, just acknowledge receipt
    return res.status(200).json({
      received: true,
      eventType,
    });

  } catch (error) {
    console.error('PayPal webhook error:', error);

    // Always return 200 to PayPal to avoid retries
    // Log the error for manual review
    return res.status(200).json({
      received: true,
      error: error.message,
    });
  }
}
