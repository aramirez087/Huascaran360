// =============================================
// Email Notification Helper
// Send email notifications for new registrations
// =============================================

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

  // If Resend API key is configured, send email
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Huascaran 360 MTB <onboarding@resend.dev>', // Change this to your verified domain
          to: businessEmail,
          subject,
          html: htmlContent,
          text: textContent,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Failed to send email via Resend:', error);
        throw new Error(`Email send failed: ${error}`);
      }

      const result = await response.json();
      console.log('Email sent successfully via Resend:', result.id);
      return { success: true, provider: 'resend', id: result.id };
    } catch (error) {
      console.error('Error sending email:', error);
      // Don't throw - registration should still succeed
      return { success: false, error: error.message };
    }
  } else {
    // No email service configured - just log to console
    console.log('=== NEW REGISTRATION (Email not configured) ===');
    console.log(textContent);
    console.log('=== END REGISTRATION ===');
    return { success: false, reason: 'No email service configured' };
  }
}
