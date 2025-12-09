import { sql } from './lib/db.js';

/**
 * Simple health check endpoint that pings the database.
 * Call this endpoint periodically (e.g., every 5 days) to prevent Supabase from pausing.
 * 
 * You can use:
 * - Vercel Cron Jobs (vercel.json)
 * - UptimeRobot (free tier)
 * - GitHub Actions scheduled workflow
 * - cron-job.org (free)
 */
export default async function handler(req, res) {
    try {
        // Simple query to keep the database active
        const result = await sql`SELECT 1 as health_check`;

        return res.status(200).json({
            success: true,
            message: 'Database is healthy',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Health check failed:', error);
        return res.status(500).json({
            success: false,
            error: 'Database connection failed'
        });
    }
}
