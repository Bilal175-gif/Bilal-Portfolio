import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storagePath = path.resolve(__dirname, '../data/submissions.json');

const defaultState = {
  contacts: [],
  newsletter: [],
};

const ensureStorageFile = () => {
  if (!fs.existsSync(storagePath)) {
    fs.mkdirSync(path.dirname(storagePath), { recursive: true });
    fs.writeFileSync(storagePath, JSON.stringify(defaultState, null, 2));
  }
};

const readState = () => {
  ensureStorageFile();
  const raw = fs.readFileSync(storagePath, 'utf8');
  return JSON.parse(raw);
};

const writeState = (state) => {
  fs.writeFileSync(storagePath, JSON.stringify(state, null, 2));
};

export const appendContactSubmission = (payload) => {
  const state = readState();
  const entry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  };

  state.contacts.unshift(entry);
  writeState(state);
  return entry;
};

export const appendNewsletterSubscription = (payload) => {
  const state = readState();
  const alreadySubscribed = state.newsletter.find(
    (entry) => entry.email.toLowerCase() === payload.email.toLowerCase(),
  );

  if (alreadySubscribed) {
    return alreadySubscribed;
  }

  const entry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  };

  state.newsletter.unshift(entry);
  writeState(state);
  return entry;
};

export const getSubmissionSummary = () => {
  const state = readState();

  return {
    contacts: state.contacts,
    newsletter: state.newsletter,
    counts: {
      contacts: state.contacts.length,
      newsletter: state.newsletter.length,
    },
  };
};
