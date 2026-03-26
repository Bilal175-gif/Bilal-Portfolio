export const config = {
  port: Number(process.env.PORT || 3000),
  mongoUri: process.env.MONGODB_URI || '',
  adminApiKey:
    process.env.ADMIN_API_KEY ||
    (process.env.NODE_ENV === 'production' ? '' : 'zepra-admin-dev-key'),
  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: Number(process.env.SMTP_PORT || 587),
  smtpSecure: String(process.env.SMTP_SECURE || 'false') === 'true',
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  emailFrom: process.env.EMAIL_FROM || 'noreply@zepratech.local',
  emailTo: process.env.EMAIL_TO || '',
};

export const hasMongoConfig = Boolean(config.mongoUri);
export const hasMailConfig = Boolean(config.smtpHost && config.smtpUser && config.smtpPass && config.emailTo);
