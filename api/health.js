import { sql } from './lib/db.js';

/**
 * Health check endpoint for cron job to keep Supabase active.
 * Set up cron-job.org to ping: https://huascaran360mtb.com/api/health every 5 days
 */
export default async function handler(req, res) {
    try {
        // Simple query to keep the database active
        await sql`SELECT 1 as health_check`;

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
