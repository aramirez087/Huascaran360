// =============================================
// PayPal API Integration
// Handles invoice creation and authentication
// =============================================

/**
 * Get PayPal OAuth access token
 */
export async function getPayPalToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const isProduction = process.env.PAYPAL_ENVIRONMENT === 'production';

  const baseURL = isProduction
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(`${baseURL}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error(`PayPal token error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

/**
 * Create PayPal invoice
 */
export async function createPayPalInvoice(registrationData) {
  const token = await getPayPalToken();
  const isProduction = process.env.PAYPAL_ENVIRONMENT === 'production';

  const baseURL = isProduction
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

  const {
    invoiceNumber,
    name,
    email,
    category,
    price,
    priceType,
  } = registrationData;

  const [firstName, ...lastNameParts] = name.split(' ');
  const lastName = lastNameParts.join(' ') || firstName;

  const priceTypeLabel = {
    early_bird: 'Early Bird (25% discount)',
    stage_2: 'Stage 2 (10% discount)',
    regular: 'Regular Rate',
  }[priceType] || 'Regular Rate';

  const invoicePayload = {
    detail: {
      invoice_number: invoiceNumber,
      invoice_date: new Date().toISOString().split('T')[0],
      currency_code: 'USD',
      note: `Inscripcion Huascaran 360 MTB 2026 - ${priceTypeLabel}`,
      payment_term: { term_type: 'DUE_ON_RECEIPT' },
    },
    invoicer: {
      name: {
        given_name: 'Huascaran 360',
        surname: 'MTB',
      },
      email_address: process.env.PAYPAL_INVOICER_EMAIL || 'huascaran360mtb@gmail.com',
      business_name: 'Huascaran 360 MTB',
    },
    primary_recipients: [
      {
        billing_info: {
          email_address: email,
          name: {
            given_name: firstName,
            surname: lastName,
          },
        },
      },
    ],
    items: [
      {
        name: 'Inscripcion Huascaran 360 MTB 2026',
        description: `Mountain bike race - May 12-16, 2026\nCategory: ${category}\nIncludes: Accommodation, meals, medical assistance, luggage transport`,
        quantity: '1',
        unit_amount: {
          currency_code: 'USD',
          value: price.toFixed(2),
        },
        unit_of_measure: 'QUANTITY',
      },
    ],
    configuration: {
      allow_tip: false,
      tax_calculated_after_discount: false,
      tax_inclusive: false,
    },
  };

  const response = await fetch(`${baseURL}/v2/invoicing/invoices`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify(invoicePayload),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PayPal invoice creation failed: ${error}`);
  }

  return await response.json();
}

/**
 * Send PayPal invoice to recipient
 */
export async function sendPayPalInvoice(invoiceId) {
  const token = await getPayPalToken();
  const isProduction = process.env.PAYPAL_ENVIRONMENT === 'production';

  const baseURL = isProduction
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

  const response = await fetch(`${baseURL}/v2/invoicing/invoices/${invoiceId}/send`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      send_to_invoicer: false,
      send_to_recipient: true,
      subject: 'Factura Huascarán 360 MTB 2026',
      note: 'Gracias por tu registro. Por favor completa el pago para confirmar tu inscripción.',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PayPal invoice send failed: ${error}`);
  }

  return await response.json();
}

/**
 * Extract invoice ID from PayPal response
 */
export function extractInvoiceId(createResponse, sendResponse = null) {
  // Try different possible locations for the invoice ID
  if (createResponse.id) return createResponse.id;

  if (createResponse.href) {
    const match = createResponse.href.match(/invoices\/([^/?]+)/);
    if (match) return match[1];
  }

  if (sendResponse?.href) {
    const match = sendResponse.href.match(/invoice\/p\/([^/?]+)/);
    if (match) return match[1];
  }

  return null;
}

/**
 * Extract PayPal payment URL from response
 * Can extract from either create or send response
 */
export function extractPayPalUrl(response) {
  // Check if response has href directly (from send)
  if (response?.href) return response.href;

  // Check for payer-view link in links array (from create or send)
  if (response?.links) {
    const payerView = response.links.find(l => l.rel === 'payer-view');
    if (payerView) return payerView.href;
  }

  return null;
}
