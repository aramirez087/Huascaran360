// =============================================
// Pricing Logic for Huascarán 360 MTB
// Calculates price based on date and early bird slots
// =============================================

/**
 * Calculate registration price based on current date and early bird availability
 *
 * @param {number} earlyBirdSlotsAvailable - Number of early bird slots remaining
 * @returns {Object} - { price, priceType, error }
 */
export function calculatePrice(earlyBirdSlotsAvailable) {
  const now = new Date();

  // Pricing deadlines
  const nov30_2025 = new Date('2025-11-30T23:59:59');
  const jan15_2027 = new Date('2027-01-15T23:59:59');
  const apr30_2027 = new Date('2027-04-30T23:59:59');

  // Check if registration period has ended
  if (now > apr30_2027) {
    return {
      error: true,
      message: 'El período de inscripciones ha finalizado (después del 30 de abril de 2027)',
    };
  }

  // Early Bird: $600 (until Nov 30, 2025 and if slots available)
  if (now <= nov30_2025 && earlyBirdSlotsAvailable > 0) {
    return {
      price: 600,
      priceType: 'early_bird',
      error: false,
    };
  }

  // Stage 2: $720 (until Jan 15, 2027)
  if (now <= jan15_2027) {
    return {
      price: 720,
      priceType: 'stage_2',
      error: false,
    };
  }

  // Regular: $800 (until Apr 30, 2026)
  return {
    price: 800,
    priceType: 'regular',
    error: false,
  };
}

/**
 * Generate unique invoice number
 */
export function generateInvoiceNumber() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `H360-${timestamp}-${random}`;
}

/**
 * Get price type label in Spanish
 */
export function getPriceTypeLabel(priceType) {
  const labels = {
    early_bird: 'Early Bird (25% descuento)',
    stage_2: 'Etapa 2 (10% descuento)',
    regular: 'Tarifa Regular',
  };
  return labels[priceType] || 'Tarifa Regular';
}
