import { createContact } from './lib/db.js';
import { sendContactNotification } from './lib/email.js';

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const body = req.body;

        // Basic validation
        if (!body.nombre || !body.email) {
            return res.status(400).json({
                success: false,
                error: 'Nombre y email son requeridos'
            });
        }

        // Map frontend field names to database columns
        const contactData = {
            name: body.nombre,
            id_document: body.id_document || null,
            birth_date: body.fecha_nacimiento || null,
            gender: body.sexo || null,
            nationality: body.nacionalidad || null,
            address: body.direccion || null,
            phone: body.telefono || null,
            email: body.email,
            team: body.equipo || null,
            plate_number: body.numero_placa || null,
            jersey_size: body.talla_camiseta || null,
            emergency_contact_name: body.contacto_emergencia || null,
            emergency_contact_phone: body.telefono_emergencia || null,
            blood_type: body.tipo_sangre || null,
            image_auth: body.autorizacion_imagen || false,
            social_media: body.redes_sociales || null,
            message: body.mensaje || null
        };

        // Save to database
        const contact = await createContact(contactData);

        // Send email notification
        await sendContactNotification(contactData);

        return res.status(200).json({
            success: true,
            message: 'Inscripción recibida correctamente',
            id: contact.id
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({
            success: false,
            error: 'Error al procesar la inscripción',
            details: error.message
        });
    }
}
