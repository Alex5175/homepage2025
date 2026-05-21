"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendMail({ html }: { html: string }) {
  await resend.emails.send({
    from: process.env.RESEND_MAIL!,
    to: process.env.ADMIN_MAIL!,
    subject: "Kontakt Anfrage",
    html,
  });
}

export async function sendContactMail({
  name,
  email,
  subject,
  message,
}: Mailprops) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0;">
          Neue Kontakt Anfrage
        </h1>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
            <td style="padding: 10px 0; color: #333;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 10px 0; color: #333;">
              <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #555;">Betreff:</td>
            <td style="padding: 10px 0; color: #333;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="font-weight: bold; color: #555; margin-bottom: 10px;">Nachricht:</p>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    </div>
  `;

  await sendMail({ html });
}
