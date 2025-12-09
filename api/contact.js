import { createContact } from './lib/db.js';
import { sendContactNotification } from './lib/email.js';

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const {
            nombre, id_document, fecha_nacimiento, sexo, nacionalidad, direccion, telefono, email,
            equipo, numero_placa, talla_camiseta, contacto_emergencia, telefono_emergencia,
            tipo_sangre, autorizacion_imagen, redes_sociales, mensaje
        } = req.body;

        if (!nombre || !email) {
            return res.status(400).json({ error: 'Nombre y email son obligatorios' });
        }

        // Map frontend fields to DB fields
        const contactData = {
            name: nombre,
            id_document: id_document || '',
            birth_date: fecha_nacimiento || null,
            gender: sexo || '',
            nationality: nacionalidad || '',
            address: direccion || '',
            phone: telefono || '',
            email,
            team: equipo || '',
            plate_number: numero_placa || '',
            jersey_size: talla_camiseta || '',
            emergency_contact_name: contacto_emergencia || '',
            emergency_contact_phone: telefono_emergencia || '',
            blood_type: tipo_sangre || '',
            image_auth: autorizacion_imagen === 'on' || autorizacion_imagen === true,
            social_media: redes_sociales || '',
            message: mensaje || ''
        };

        // Save to DB
        await createContact(contactData);

        // Send email (don't fail if email fails)
        try {
            await sendContactNotification(contactData);
        } catch (e) {
            console.error('Failed to send notification:', e);
        }

        return res.status(200).json({ success: true, message: 'Mensaje enviado' });

    } catch (error) {
        console.error('Contact API error:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}
