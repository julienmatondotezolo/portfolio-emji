import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

import en from '../../src/i18n/locales/en.json';
import fr from '../../src/i18n/locales/fr.json';
import nl from '../../src/i18n/locales/nl.json';

const resend = new Resend(process.env.RESEND_API_KEY);

type Locale = 'en' | 'fr' | 'nl';
const translations: Record<Locale, Record<string, any>> = { en, fr, nl };

function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let current: any = translations[locale];
  for (const k of keys) {
    if (current == null) return key;
    current = current[k];
  }
  return typeof current === 'string' ? current : key;
}

const LOGO_URL = 'https://emji.be/favicon.ico';

function emailHeader(): string {
  return `
    <div style="background: #0f172a; padding: 24px 32px; text-align: center; border-bottom: 3px solid #ef4444;">
      <table align="center" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
        <tr>
          <td style="vertical-align: middle; padding-right: 12px;">
            <img src="${LOGO_URL}" alt="eMJi" width="40" height="40" style="border-radius: 10px; border: 2px solid #ef4444; display: block;" />
          </td>
          <td style="vertical-align: middle;">
            <span style="font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: 1px;">eMJi</span>
          </td>
        </tr>
      </table>
      <p style="color: #94a3b8; font-size: 12px; margin: 8px 0 0; text-transform: uppercase; letter-spacing: 2px;">Test Automation & AI Solutions</p>
    </div>`;
}

function emailFooter(locale: Locale): string {
  const cta: Record<Locale, string> = {
    en: 'Visit Portfolio',
    fr: 'Voir le Portfolio',
    nl: 'Bekijk Portfolio',
  };
  return `
    <div style="background: #0f172a; padding: 24px 32px; text-align: center; border-top: 1px solid #1e293b;">
      <a href="https://emji.be" style="display: inline-block; padding: 10px 28px; background: #ef4444; color: #ffffff; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 14px;">${cta[locale]}</a>
      <div style="margin-top: 16px;">
        <a href="mailto:info@emji.be" style="color: #f87171; text-decoration: none; font-size: 13px;">info@emji.be</a>
        <span style="color: #475569; margin: 0 8px;">|</span>
        <a href="tel:+32477953430" style="color: #f87171; text-decoration: none; font-size: 13px;">+32 477 95 34 30</a>
      </div>
      <p style="color: #475569; font-size: 11px; margin: 12px 0 0;">&copy; 2026 Julien Matondo. Brussels, Belgium.</p>
    </div>`;
}

function getAutoReplyHtml(locale: Locale, name: string): string {
  const body = {
    en: `
      <h2 style="color: #ffffff; margin: 0 0 8px;">Hi ${name},</h2>
      <p style="color: #94a3b8; font-size: 15px; margin: 0 0 24px;">Thank you for reaching out through my portfolio.</p>
      <div style="background: #1e293b; border-radius: 12px; padding: 20px 24px; border-left: 4px solid #ef4444; margin-bottom: 24px;">
        <p style="color: #e2e8f0; margin: 0; font-size: 15px; line-height: 1.6;">I've received your message and will get back to you <strong style="color: #f87171;">within 24 hours</strong>. I'm looking forward to discussing your project!</p>
      </div>
      <p style="color: #94a3b8; font-size: 14px; margin: 0 0 16px;">In the meantime, feel free to reach out directly:</p>
      <table cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
        <tr>
          <td style="padding: 6px 0;"><span style="color: #ef4444; font-size: 14px;">&#9993;</span></td>
          <td style="padding: 6px 12px;"><a href="mailto:info@emji.be" style="color: #f87171; text-decoration: none; font-size: 14px;">info@emji.be</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0;"><span style="color: #ef4444; font-size: 14px;">&#9742;</span></td>
          <td style="padding: 6px 12px;"><a href="tel:+32477953430" style="color: #f87171; text-decoration: none; font-size: 14px;">+32 477 95 34 30</a></td>
        </tr>
      </table>
      <p style="color: #cbd5e1; font-size: 14px; margin: 0;">Best regards,<br/><strong style="color: #ffffff;">Julien Matondo</strong><br/><span style="color: #ef4444;">eMJi</span> — Test Automation & AI Solutions</p>
    `,
    fr: `
      <h2 style="color: #ffffff; margin: 0 0 8px;">Bonjour ${name},</h2>
      <p style="color: #94a3b8; font-size: 15px; margin: 0 0 24px;">Merci de m'avoir contacté via mon portfolio.</p>
      <div style="background: #1e293b; border-radius: 12px; padding: 20px 24px; border-left: 4px solid #ef4444; margin-bottom: 24px;">
        <p style="color: #e2e8f0; margin: 0; font-size: 15px; line-height: 1.6;">J'ai bien reçu votre message et je vous répondrai <strong style="color: #f87171;">dans les 24 heures</strong>. J'ai hâte de discuter de votre projet !</p>
      </div>
      <p style="color: #94a3b8; font-size: 14px; margin: 0 0 16px;">En attendant, n'hésitez pas à me contacter directement :</p>
      <table cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
        <tr>
          <td style="padding: 6px 0;"><span style="color: #ef4444; font-size: 14px;">&#9993;</span></td>
          <td style="padding: 6px 12px;"><a href="mailto:info@emji.be" style="color: #f87171; text-decoration: none; font-size: 14px;">info@emji.be</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0;"><span style="color: #ef4444; font-size: 14px;">&#9742;</span></td>
          <td style="padding: 6px 12px;"><a href="tel:+32477953430" style="color: #f87171; text-decoration: none; font-size: 14px;">+32 477 95 34 30</a></td>
        </tr>
      </table>
      <p style="color: #cbd5e1; font-size: 14px; margin: 0;">Cordialement,<br/><strong style="color: #ffffff;">Julien Matondo</strong><br/><span style="color: #ef4444;">eMJi</span> — Automatisation de Tests & Solutions IA</p>
    `,
    nl: `
      <h2 style="color: #ffffff; margin: 0 0 8px;">Hallo ${name},</h2>
      <p style="color: #94a3b8; font-size: 15px; margin: 0 0 24px;">Bedankt dat u contact met mij heeft opgenomen via mijn portfolio.</p>
      <div style="background: #1e293b; border-radius: 12px; padding: 20px 24px; border-left: 4px solid #ef4444; margin-bottom: 24px;">
        <p style="color: #e2e8f0; margin: 0; font-size: 15px; line-height: 1.6;">Ik heb uw bericht ontvangen en zal <strong style="color: #f87171;">binnen 24 uur</strong> reageren. Ik kijk ernaar uit om uw project te bespreken!</p>
      </div>
      <p style="color: #94a3b8; font-size: 14px; margin: 0 0 16px;">In de tussentijd kunt u mij ook rechtstreeks bereiken:</p>
      <table cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
        <tr>
          <td style="padding: 6px 0;"><span style="color: #ef4444; font-size: 14px;">&#9993;</span></td>
          <td style="padding: 6px 12px;"><a href="mailto:info@emji.be" style="color: #f87171; text-decoration: none; font-size: 14px;">info@emji.be</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0;"><span style="color: #ef4444; font-size: 14px;">&#9742;</span></td>
          <td style="padding: 6px 12px;"><a href="tel:+32477953430" style="color: #f87171; text-decoration: none; font-size: 14px;">+32 477 95 34 30</a></td>
        </tr>
      </table>
      <p style="color: #cbd5e1; font-size: 14px; margin: 0;">Met vriendelijke groeten,<br/><strong style="color: #ffffff;">Julien Matondo</strong><br/><span style="color: #ef4444;">eMJi</span> — Test Automatisering & AI Oplossingen</p>
    `,
  };

  return `
    <div style="font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
      ${emailHeader()}
      <div style="padding: 32px;">
        ${body[locale]}
      </div>
      ${emailFooter(locale)}
    </div>`;
}

function getForwardHtml(data: {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  locale: string;
}): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 10px 16px; color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 130px; vertical-align: top;">${label}</td>
      <td style="padding: 10px 16px; color: #e2e8f0; font-size: 14px;">${value}</td>
    </tr>`;

  return `
    <div style="font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
      ${emailHeader()}
      <div style="padding: 32px;">
        <div style="background: #dc2626; border-radius: 10px; padding: 16px 20px; margin-bottom: 24px;">
          <p style="color: #ffffff; margin: 0; font-size: 16px; font-weight: 600;">New Contact Form Submission</p>
          <p style="color: #fecaca; margin: 4px 0 0; font-size: 13px;">From ${data.name} &middot; ${data.locale.toUpperCase()}</p>
        </div>

        <table cellpadding="0" cellspacing="0" style="width: 100%; background: #1e293b; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
          ${row('Name', data.name)}
          <tr><td colspan="2" style="border-bottom: 1px solid #334155;"></td></tr>
          ${row('Email', `<a href="mailto:${data.email}" style="color: #f87171; text-decoration: none;">${data.email}</a>`)}
          <tr><td colspan="2" style="border-bottom: 1px solid #334155;"></td></tr>
          ${row('Company', data.company || '<span style="color: #475569;">Not specified</span>')}
          <tr><td colspan="2" style="border-bottom: 1px solid #334155;"></td></tr>
          ${row('Project', data.projectType)}
          <tr><td colspan="2" style="border-bottom: 1px solid #334155;"></td></tr>
          ${row('Budget', data.budget || '<span style="color: #475569;">Not specified</span>')}
          <tr><td colspan="2" style="border-bottom: 1px solid #334155;"></td></tr>
          ${row('Timeline', data.timeline || '<span style="color: #475569;">Not specified</span>')}
        </table>

        <div style="background: #1e293b; border-radius: 12px; padding: 20px 24px; border-left: 4px solid #ef4444;">
          <p style="color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 600;">Message</p>
          <p style="color: #e2e8f0; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
      ${emailFooter('en')}
    </div>`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, projectType, budget, timeline, message, locale } = req.body;

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const validLocale: Locale = ['en', 'fr', 'nl'].includes(locale) ? locale : 'en';

  const autoReplySubject: Record<Locale, string> = {
    en: 'Thank you for reaching out!',
    fr: 'Merci de nous avoir contacté !',
    nl: 'Bedankt voor uw bericht!',
  };

  try {
    await Promise.all([
      resend.emails.send({
        from: 'eMJi <noreply@emji.be>',
        to: email,
        subject: autoReplySubject[validLocale],
        html: getAutoReplyHtml(validLocale, name),
      }),
      resend.emails.send({
        from: 'eMJi Portfolio <noreply@emji.be>',
        to: 'emjisolutions@gmail.com',
        replyTo: email,
        subject: `[Portfolio Contact] ${projectType} - ${name}`,
        html: getForwardHtml({ name, email, company, projectType, budget, timeline, message, locale: validLocale }),
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send emails:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
