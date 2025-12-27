const MAINTENANCE_VALUES = new Set(['1', 'true', 'yes', 'on']);

export default function handler(req, res) {
    const rawValue = process.env.MAINTENANCE_MODE;
    const normalized = typeof rawValue === 'string' ? rawValue.trim().toLowerCase() : '';
    const maintenance = MAINTENANCE_VALUES.has(normalized);

    res.setHeader('Cache-Control', 'no-store, max-age=0');
    return res.status(200).json({ maintenance });
}
