// =============================================
// Database Helper Functions
// Supabase PostgreSQL Integration
// =============================================

import postgres from 'postgres';

// Create database connection
const sql = postgres(process.env.DATABASE_URL, {
  max: 1, // Limit connections for serverless
  idle_timeout: 20,
  connect_timeout: 10,
});

/**
 * Get current early bird slots available
 */
export async function getEarlyBirdSlots() {
  const result = await sql`
    SELECT value FROM config WHERE key = 'early_bird_slots'
  `;
  return parseInt(result[0]?.value || '0', 10);
}

/**
 * Decrement early bird slots by 1
 */
export async function decrementEarlyBirdSlots() {
  await sql`
    UPDATE config
    SET value = (CAST(value AS INTEGER) - 1)::TEXT
    WHERE key = 'early_bird_slots' AND CAST(value AS INTEGER) > 0
  `;
}

/**
 * Create a new registration record
 */
export async function createRegistration(data) {
  const {
    invoiceNumber,
    invoiceId,
    paypalUrl,
    name,
    email,
    phone,
    category,
    comments,
    price,
    priceType
  } = data;

  const result = await sql`
    INSERT INTO registrations (
      invoice_number, invoice_id, paypal_url, name, email, phone,
      category, comments, price, price_type, payment_status
    ) VALUES (
      ${invoiceNumber}, ${invoiceId}, ${paypalUrl}, ${name}, ${email},
      ${phone}, ${category}, ${comments || null}, ${price}, ${priceType}, 'pending'
    )
    RETURNING id, invoice_number, created_at
  `;

  return result[0];
}

/**
 * Update payment status for a registration
 */
export async function updatePaymentStatus(invoiceId, status, paymentDate = null) {
  await sql`
    UPDATE registrations
    SET payment_status = ${status},
        payment_date = ${paymentDate || new Date().toISOString()}
    WHERE invoice_id = ${invoiceId}
  `;
}

/**
 * Get registration by email
 */
export async function getRegistrationByEmail(email) {
  const result = await sql`
    SELECT * FROM registrations WHERE email = ${email} ORDER BY created_at DESC LIMIT 1
  `;
  return result[0] || null;
}

/**
 * Get registration by invoice ID
 */
export async function getRegistrationByInvoiceId(invoiceId) {
  const result = await sql`
    SELECT * FROM registrations WHERE invoice_id = ${invoiceId} LIMIT 1
  `;
  return result[0] || null;
}

/**
 * Get all registrations (for admin purposes)
 */
export async function getAllRegistrations(limit = 100, offset = 0) {
  const result = await sql`
    SELECT * FROM registrations
    ORDER BY created_at DESC
    LIMIT ${limit} OFFSET ${offset}
  `;
  return result;
}

/**
 * Get registration statistics
 */
export async function getRegistrationStats() {
  const result = await sql`
    SELECT
      COUNT(*) as total,
      COUNT(CASE WHEN payment_status = 'paid' THEN 1 END) as paid,
      COUNT(CASE WHEN payment_status = 'pending' THEN 1 END) as pending,
      COUNT(CASE WHEN price_type = 'early_bird' THEN 1 END) as early_bird_count,
      SUM(CASE WHEN payment_status = 'paid' THEN price ELSE 0 END) as total_revenue
    FROM registrations
  `;
  return result[0];
}
