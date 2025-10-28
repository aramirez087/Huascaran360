// =============================================
// Admin Stats API Endpoint
// Get registration statistics (protected)
// =============================================

import { getRegistrationStats, getEarlyBirdSlots } from './lib/db.js';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Simple auth check (optional - add a secret token)
    const authToken = req.headers.authorization?.replace('Bearer ', '');
    const expectedToken = process.env.ADMIN_SECRET_TOKEN;

    if (expectedToken && authToken !== expectedToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Get stats from database
    const stats = await getRegistrationStats();
    const earlyBirdSlots = await getEarlyBirdSlots();

    return res.status(200).json({
      success: true,
      stats: {
        totalRegistrations: parseInt(stats.total, 10),
        paidRegistrations: parseInt(stats.paid, 10),
        pendingRegistrations: parseInt(stats.pending, 10),
        earlyBirdUsed: parseInt(stats.early_bird_count, 10),
        earlyBirdRemaining: earlyBirdSlots,
        totalRevenue: parseFloat(stats.total_revenue || 0),
      },
    });

  } catch (error) {
    console.error('Stats error:', error);

    return res.status(500).json({
      success: false,
      error: 'Error al obtener estadísticas',
    });
  }
}
