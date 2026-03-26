import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import { siteContent } from './content.js';
import {
  createContactSubmission,
  createNewsletterSubscription,
  fetchSubmissionSummary,
} from './repository.js';
import { sendContactNotification, sendNewsletterNotification } from './mailer.js';
import { validateContactPayload, validateNewsletterPayload } from './validation.js';

export const createApp = () => {
  const app = express();

  app.use(
    cors({
      origin: true,
      credentials: false,
    }),
  );
  app.use(express.json({ limit: '1mb' }));

  const requireAdmin = (request, response, next) => {
    if (!config.adminApiKey) {
      response.status(503).json({
        ok: false,
        message: 'Admin access is not configured.',
      });
      return;
    }

    const bearer = request.headers.authorization?.startsWith('Bearer ')
      ? request.headers.authorization.slice(7)
      : '';
    const apiKey = request.headers['x-admin-key'] || bearer;

    if (apiKey !== config.adminApiKey) {
      response.status(401).json({
        ok: false,
        message: 'Unauthorized admin request.',
      });
      return;
    }

    next();
  };

  app.get('/api/health', (request, response) => {
    response.json({
      ok: true,
      service: 'zepra-tech-api',
      timestamp: new Date().toISOString(),
    });
  });

  app.get('/api/content', (request, response) => {
    response.json(siteContent);
  });

  app.get('/api/content/:section', (request, response) => {
    const { section } = request.params;
    const payload = siteContent[section];

    if (!payload) {
      response.status(404).json({
        ok: false,
        message: `Unknown content section: ${section}`,
      });
      return;
    }

    response.json({
      ok: true,
      section,
      data: payload,
    });
  });

  app.post('/api/contact', async (request, response) => {
    const validation = validateContactPayload(request.body);

    if (!validation.valid) {
      response.status(400).json({
        ok: false,
        message: 'Validation failed.',
        errors: validation.errors,
      });
      return;
    }

    const saved = await createContactSubmission(validation.data);
    await sendContactNotification(saved);

    response.status(201).json({
      ok: true,
      message: 'Thanks for reaching out. We will review your request and follow up within 1 business day.',
      submission: saved,
    });
  });

  app.post('/api/newsletter', async (request, response) => {
    const validation = validateNewsletterPayload(request.body);

    if (!validation.valid) {
      response.status(400).json({
        ok: false,
        message: 'Validation failed.',
        errors: validation.errors,
      });
      return;
    }

    const saved = await createNewsletterSubscription(validation.data);
    await sendNewsletterNotification(saved);

    response.status(201).json({
      ok: true,
      message: 'Thanks for subscribing. Growth updates are on the way.',
      subscription: saved,
    });
  });

  app.get('/api/admin/dashboard', requireAdmin, async (request, response) => {
    const summary = await fetchSubmissionSummary();

    response.json({
      ok: true,
      environment: {
        mongoEnabled: Boolean(config.mongoUri),
        mailEnabled: Boolean(config.emailTo && config.smtpHost),
      },
      ...summary,
    });
  });

  app.get('/api/submissions', requireAdmin, async (request, response) => {
    response.json({
      ok: true,
      ...(await fetchSubmissionSummary()),
    });
  });

  app.use((request, response) => {
    response.status(404).json({
      ok: false,
      message: `Route not found: ${request.method} ${request.originalUrl}`,
    });
  });

  return app;
};
