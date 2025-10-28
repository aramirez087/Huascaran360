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
  const dec31_2025 = new Date('2025-12-31T23:59:59');
  const apr30_2026 = new Date('2026-04-30T23:59:59');

  // Check if registration period has ended
  if (now > apr30_2026) {
    return {
      error: true,
      message: 'El período de inscripciones ha finalizado (después del 30 de abril de 2026)',
    };
  }

  // Early Bird: $450 (if slots available)
  if (earlyBirdSlotsAvailable > 0) {
    return {
      price: 450,
      priceType: 'early_bird',
      error: false,
    };
  }

  // Stage 2: $540 (until Dec 31, 2025)
  if (now <= dec31_2025) {
    return {
      price: 540,
      priceType: 'stage_2',
      error: false,
    };
  }

  // Regular: $600 (until Apr 30, 2026)
  return {
    price: 600,
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
