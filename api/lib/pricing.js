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

  // Pricing deadlines (2027 edition)
  const earlyBirdEnd = new Date('2026-12-31T23:59:59');
  const stage2End = new Date('2027-01-15T23:59:59');
  const regularEnd = new Date('2027-04-30T23:59:59');

  // Check if registration period has ended
  if (now > regularEnd) {
    return {
      error: true,
      message: 'El período de inscripciones ha finalizado (después del 30 de abril de 2027)',
    };
  }

  // Early Bird: $600 (cupos limitados until end of 2026)
  const slots = Number(earlyBirdSlotsAvailable);
  const hasEarlyBirdSlots = Number.isFinite(slots) ? slots > 0 : true;
  if (now <= earlyBirdEnd && hasEarlyBirdSlots) {
    return {
      price: 600,
      priceType: 'early_bird',
      error: false,
    };
  }

  // Stage 2: $720 (until Jan 15, 2027)
  if (now <= stage2End) {
    return {
      price: 720,
      priceType: 'stage_2',
      error: false,
    };
  }

  // Regular: $800 (until Apr 30, 2027)
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
