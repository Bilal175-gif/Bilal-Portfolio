import { isMongoReady } from './db.js';
import { ContactSubmission } from './models/contact-submission.js';
import { NewsletterSubscription } from './models/newsletter-subscription.js';
import {
  appendContactSubmission,
  appendNewsletterSubscription,
  getSubmissionSummary,
} from './storage.js';

const normalizeMongoDocument = (document) => ({
  id: String(document._id),
  createdAt: document.createdAt,
  updatedAt: document.updatedAt,
  ...(document.name ? { name: document.name } : {}),
  email: document.email,
  ...(document.phone ? { phone: document.phone } : {}),
  ...(document.service ? { service: document.service } : {}),
  ...(document.message ? { message: document.message } : {}),
});

export const createContactSubmission = async (payload) => {
  if (isMongoReady()) {
    const created = await ContactSubmission.create(payload);
    return normalizeMongoDocument(created);
  }

  return appendContactSubmission(payload);
};

export const createNewsletterSubscription = async (payload) => {
  if (isMongoReady()) {
    const existing = await NewsletterSubscription.findOne({ email: payload.email.toLowerCase() });

    if (existing) {
      return normalizeMongoDocument(existing);
    }

    const created = await NewsletterSubscription.create(payload);
    return normalizeMongoDocument(created);
  }

  return appendNewsletterSubscription(payload);
};

export const fetchSubmissionSummary = async () => {
  if (isMongoReady()) {
    const [contacts, newsletter] = await Promise.all([
      ContactSubmission.find().sort({ createdAt: -1 }).lean(),
      NewsletterSubscription.find().sort({ createdAt: -1 }).lean(),
    ]);

    return {
      contacts: contacts.map(normalizeMongoDocument),
      newsletter: newsletter.map(normalizeMongoDocument),
      counts: {
        contacts: contacts.length,
        newsletter: newsletter.length,
      },
    };
  }

  return getSubmissionSummary();
};
