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
        console.log('[Contact API] Received request. Body keys:', Object.keys(body));
        console.log('[Contact API] Has comprobante:', !!body.comprobante);
        if (body.comprobante) {
            console.log('[Contact API] Comprobante size:', body.comprobante.length, 'chars');
        }

        // Basic validation
        if (!body.nombre || !body.email) {
            console.log('[Contact API] Validation failed: missing nombre or email');
            return res.status(400).json({
                success: false,
                error: 'Nombre y email son requeridos'
            });
        }

        // Map frontend field names to database columns
        // Note: comprobante is NOT saved to database, only sent via email
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

        // Save to database FIRST (without comprobante - it's not stored)
        console.log('[Contact API] Saving to database...');
        let contact;
        try {
            contact = await createContact(contactData);
            console.log('[Contact API] Database save successful, id:', contact.id);
        } catch (dbError) {
            console.error('[Contact API] Database error:', dbError.message);
            return res.status(500).json({
                success: false,
                error: 'Error al guardar los datos. Por favor intenta de nuevo.',
                details: dbError.message
            });
        }

        // Try to send email notification (don't fail if this errors)
        console.log('[Contact API] Sending email notification...');
        try {
            const emailData = { ...contactData, comprobante: body.comprobante || null };
            await sendContactNotification(emailData);
            console.log('[Contact API] Email sent successfully');
        } catch (emailError) {
            // Log the email error but don't fail the request
            console.error('[Contact API] Email error (non-fatal):', emailError.message);
            // Continue - the registration is still saved
        }

        return res.status(200).json({
            success: true,
            message: 'Inscripción recibida correctamente',
            id: contact.id
        });

    } catch (error) {
        console.error('[Contact API] Unexpected error:', error);
        return res.status(500).json({
            success: false,
            error: 'Error al procesar la inscripción',
            details: error.message
        });
    }
}
