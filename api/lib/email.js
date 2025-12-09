// =============================================
// Email Notification Helper
// Send email notifications for new registrations
// =============================================

import { Resend } from 'resend';

/**
 * Send email notification about new registration
 * Uses Resend API if configured, otherwise just logs
 */
export async function sendRegistrationNotification(registrationData) {
  const {
    invoiceNumber,
    name,
    email,
    phone,
    category,
    price,
    priceType,
    comments,
  } = registrationData;

  const businessEmail = process.env.BUSINESS_EMAIL || 'huascaran360mtb@gmail.com';
  const resendApiKey = process.env.RESEND_API_KEY;

  const priceTypeLabel = {
    early_bird: 'Early Bird (25% descuento)',
    stage_2: 'Etapa 2 (10% descuento)',
    regular: 'Tarifa Regular',
  }[priceType] || priceType;

  // Email content
  const subject = `Nueva Inscripción - ${name} - ${invoiceNumber}`;
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #667eea;">Nueva Inscripción Recibida</h2>

      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1e293b;">Detalles del Participante</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Número de Registro:</td>
            <td style="padding: 8px 0;">${invoiceNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Nombre:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Teléfono:</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Categoría:</td>
            <td style="padding: 8px 0;">${category}</td>
          </tr>
        </table>
      </div>

      <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
        <h3 style="margin-top: 0; color: #065f46;">Información de Pago</h3>
        <p style="margin: 8px 0;"><strong>Tipo de Tarifa:</strong> ${priceTypeLabel}</p>
        <p style="margin: 8px 0; font-size: 24px; font-weight: bold; color: #10b981;">USD $${price.toFixed(2)}</p>
      </div>

      ${comments ? `
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #92400e;">Comentarios</h3>
        <p style="margin: 0; color: #78350f;">${comments}</p>
      </div>
      ` : ''}

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
        <p><strong>Próximos pasos:</strong></p>
        <ol style="line-height: 1.8;">
          <li>Revisar los datos del participante</li>
          <li>Enviar solicitud de pago a: <a href="mailto:${email}">${email}</a></li>
          <li>Marcar como pagado en Supabase cuando se complete el pago</li>
        </ol>
      </div>
    </div>
  `;

  const textContent = `
Nueva Inscripción Recibida

Número de Registro: ${invoiceNumber}
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Categoría: ${category}

Información de Pago:
Tipo de Tarifa: ${priceTypeLabel}
Monto: USD $${price.toFixed(2)}

${comments ? `Comentarios: ${comments}\n\n` : ''}
Próximos pasos:
1. Revisar los datos del participante
2. Enviar solicitud de pago a: ${email}
3. Marcar como pagado en Supabase cuando se complete el pago
  `.trim();

  // If Resend API key is configured, send email using SDK
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      const { data, error } = await resend.emails.send({
        from: 'Huascaran 360 MTB <onboarding@resend.dev>',
        to: [businessEmail],
        subject,
        html: htmlContent,
        text: textContent,
      });

      if (error) {
        console.error('Failed to send email via Resend:', error);
        throw new Error(`Email send failed: ${error.message}`);
      }

      console.log('Email sent successfully via Resend:', data.id);
      return { success: true, provider: 'resend', id: data.id };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }
  } else {
    console.log('=== NEW REGISTRATION (Email not configured) ===');
    console.log(textContent);
    console.log('=== END REGISTRATION ===');
    return { success: false, reason: 'No email service configured' };
  }
}

/**
 * Send email notification about new contact form submission
 * Sends to both huascaran360mtb@gmail.com and alexramirez.cr@gmail.com
 */
export async function sendContactNotification(contactData) {
  const {
    name, id_document, birth_date, gender, nationality, address, phone, email,
    team, plate_number, jersey_size,
    emergency_contact_name, emergency_contact_phone, blood_type,
    image_auth, social_media, message, comprobante
  } = contactData;

  const businessEmails = [
    'huascaran360mtb@gmail.com'
  ];
  const resendApiKey = process.env.RESEND_API_KEY;

  const subject = `Nueva Inscripción - ${name}`;
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #d92532;">🚵 Nueva Inscripción Huascarán 360 MTB</h2>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">📝 Datos Personales</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 5px 0; font-weight: bold; color: #64748b; width: 40%;">Nombre:</td><td>${name}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #64748b;">Cédula/Pasaporte:</td><td>${id_document || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #64748b;">Fecha Nacimiento:</td><td>${birth_date || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #64748b;">Sexo:</td><td>${gender || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #64748b;">Nacionalidad:</td><td>${nationality || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #64748b;">Dirección:</td><td>${address || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #64748b;">Teléfono:</td><td>${phone || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #64748b;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
        </table>
      </div>

      <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #166534; border-bottom: 1px solid #bbf7d0; padding-bottom: 10px;">🚴 Datos de Carrera</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 5px 0; font-weight: bold; color: #15803d; width: 40%;">Equipo/Patrocinador:</td><td>${team || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #15803d;">N° Placa/Dorsal:</td><td>${plate_number || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #15803d;">Talla Camiseta:</td><td>${jersey_size || '-'}</td></tr>
        </table>
      </div>

      <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #991b1b; border-bottom: 1px solid #fecaca; padding-bottom: 10px;">🚨 Emergencia</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 5px 0; font-weight: bold; color: #dc2626; width: 40%;">Contacto:</td><td>${emergency_contact_name || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #dc2626;">Teléfono:</td><td>${emergency_contact_phone || '-'}</td></tr>
          <tr><td style="padding: 5px 0; font-weight: bold; color: #dc2626;">Tipo de Sangre:</td><td>${blood_type || '-'}</td></tr>
        </table>
      </div>

      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #4b5563; border-bottom: 1px solid #d1d5db; padding-bottom: 10px;">📋 Otros</h3>
        <p><strong>Autorización Imagen:</strong> ${image_auth ? '✅ SÍ' : '❌ NO'}</p>
        <p><strong>Redes Sociales:</strong> ${social_media || '-'}</p>
        ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ''}
        ${comprobante ? `<p><strong>Comprobante de Pago:</strong> Adjunto en este correo ✅</p>` : '<p><strong>Comprobante de Pago:</strong> No adjuntado ❌</p>'}
      </div>
    </div>
  `;

  const textContent = `
NUEVA INSCRIPCIÓN HUASCARÁN 360 MTB

DATOS PERSONALES
Nombre: ${name}
Cédula/Pasaporte: ${id_document || '-'}
Fecha Nacimiento: ${birth_date || '-'}
Sexo: ${gender || '-'}
Nacionalidad: ${nationality || '-'}
Dirección: ${address || '-'}
Teléfono: ${phone || '-'}
Email: ${email}

DATOS DE CARRERA
Equipo/Patrocinador: ${team || '-'}
N° Placa/Dorsal: ${plate_number || '-'}
Talla Camiseta: ${jersey_size || '-'}

EMERGENCIA
Contacto: ${emergency_contact_name || '-'}
Teléfono: ${emergency_contact_phone || '-'}
Tipo de Sangre: ${blood_type || '-'}

OTROS
Autorización Imagen: ${image_auth ? 'SÍ' : 'NO'}
Redes Sociales: ${social_media || '-'}
Mensaje: ${message || '-'}
Comprobante de Pago: ${comprobante ? 'Adjunto' : 'No adjuntado'}
  `.trim();

  // Prepare attachments if exists
  const attachments = [];
  if (comprobante) {
    try {
      // split "data:image/png;base64,....."
      const matches = comprobante.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

      if (matches && matches.length === 3) {
        const type = matches[1];
        const data = matches[2];
        const extension = type.split('/')[1] || 'png';
        const buffer = Buffer.from(data, 'base64');

        attachments.push({
          filename: `comprobante.${extension}`,
          content: buffer
        });
      }
    } catch (e) {
      console.error('Error processing attachment:', e);
    }
  }

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      const emailOptions = {
        from: 'Huascaran 360 MTB <onboarding@resend.dev>',
        to: businessEmails,
        subject,
        html: htmlContent,
        text: textContent,
        reply_to: email
      };

      if (attachments.length > 0) {
        emailOptions.attachments = attachments;
      }

      const { data, error } = await resend.emails.send(emailOptions);

      if (error) {
        console.error('Resend error:', error);
        return { success: false, error: error.message };
      }

      console.log('Contact email sent successfully:', data.id);
      return { success: true, id: data.id };
    } catch (error) {
      console.error('Error sending contact email:', error);
      return { success: false, error: error.message };
    }
  } else {
    console.log('=== NEW CONTACT (Email not configured) ===');
    console.log('RESEND_API_KEY is not set in environment variables');
    console.log(textContent);
    return { success: false, reason: 'RESEND_API_KEY not configured' };
  }
}

