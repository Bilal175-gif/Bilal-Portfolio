import nodemailer from 'nodemailer';
import { config, hasMailConfig } from './config.js';

let transporter;

const getTransporter = () => {
  if (!hasMailConfig) {
    return null;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: config.smtpPort,
      secure: config.smtpSecure,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
    });
  }

  return transporter;
};

const sendEmail = async ({ subject, text, html }) => {
  const activeTransporter = getTransporter();

  if (!activeTransporter) {
    console.log(`Email skipped because SMTP is not configured. Subject: ${subject}`);
    return { skipped: true };
  }

  return activeTransporter.sendMail({
    from: config.emailFrom,
    to: config.emailTo,
    subject,
    text,
    html,
  });
};

export const sendContactNotification = async (submission) =>
  sendEmail({
    subject: `New contact lead from ${submission.name}`,
    text: [
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone}`,
      `Service: ${submission.service}`,
      '',
      submission.message,
    ].join('\n'),
    html: `
      <h2>New contact lead</h2>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Phone:</strong> ${submission.phone}</p>
      <p><strong>Service:</strong> ${submission.service}</p>
      <p><strong>Message:</strong></p>
      <p>${submission.message}</p>
    `,
  });

export const sendNewsletterNotification = async (subscription) =>
  sendEmail({
    subject: `New newsletter subscriber: ${subscription.email}`,
    text: `A new newsletter subscriber was added: ${subscription.email}`,
    html: `
      <h2>New newsletter subscriber</h2>
      <p><strong>Email:</strong> ${subscription.email}</p>
    `,
  });
