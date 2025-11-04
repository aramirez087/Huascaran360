// =============================================
// PayPal Orders API Integration (Checkout)
// Handles payment checkout flow
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
 * Create PayPal Order for immediate checkout
 */
export async function createPayPalOrder(registrationData) {
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

  const priceTypeLabel = {
    early_bird: 'Early Bird (25% discount)',
    stage_2: 'Stage 2 (10% discount)',
    regular: 'Regular Rate',
  }[priceType] || 'Regular Rate';

  const orderPayload = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        reference_id: invoiceNumber,
        description: `Huascaran 360 MTB 2026 Registration - ${category}`,
        custom_id: invoiceNumber, // Store invoice number for webhook
        soft_descriptor: 'HUASCARAN360',
        amount: {
          currency_code: 'USD',
          value: price.toFixed(2),
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: price.toFixed(2),
            },
          },
        },
        items: [
          {
            name: 'Huascaran 360 MTB 2026 Registration',
            description: `Category: ${category} - ${priceTypeLabel}`,
            unit_amount: {
              currency_code: 'USD',
              value: price.toFixed(2),
            },
            quantity: '1',
            category: 'DIGITAL_GOODS',
          },
        ],
        payee: {
          email_address: process.env.PAYPAL_BUSINESS_EMAIL || 'huascaran360mtb@gmail.com',
        },
      },
    ],
    application_context: {
      brand_name: 'Huascaran 360 MTB',
      landing_page: 'NO_PREFERENCE',
      shipping_preference: 'NO_SHIPPING',
      user_action: 'PAY_NOW',
      return_url: `${process.env.SITE_URL || 'https://huascaran360.com'}/payment-success`,
      cancel_url: `${process.env.SITE_URL || 'https://huascaran360.com'}/payment-cancelled`,
    },
    payer: {
      email_address: email,
      name: {
        given_name: name.split(' ')[0],
        surname: name.split(' ').slice(1).join(' ') || name.split(' ')[0],
      },
    },
  };

  const response = await fetch(`${baseURL}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify(orderPayload),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('PayPal order creation failed:', error);
    throw new Error(`PayPal order creation failed: ${error}`);
  }

  return await response.json();
}

/**
 * Extract checkout URL from PayPal order response
 */
export function extractCheckoutUrl(orderResponse) {
  // Find the approve link (where customer goes to pay)
  const approveLink = orderResponse.links?.find(link => link.rel === 'approve');
  return approveLink?.href || null;
}

/**
 * Capture payment for an order (after customer approves)
 */
export async function capturePayPalOrder(orderId) {
  const token = await getPayPalToken();
  const isProduction = process.env.PAYPAL_ENVIRONMENT === 'production';

  const baseURL = isProduction
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

  const response = await fetch(`${baseURL}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`PayPal capture failed: ${error}`);
  }

  return await response.json();
}

/**
 * Get order details
 */
export async function getPayPalOrder(orderId) {
  const token = await getPayPalToken();
  const isProduction = process.env.PAYPAL_ENVIRONMENT === 'production';

  const baseURL = isProduction
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

  const response = await fetch(`${baseURL}/v2/checkout/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get order: ${error}`);
  }

  return await response.json();
}
