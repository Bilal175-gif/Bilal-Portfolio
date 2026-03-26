const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const parseJson = async (response) => {
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(payload.message || 'Request failed.');
    error.details = payload.errors || {};
    throw error;
  }

  return payload;
};

export const postContactLead = (body) =>
  fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(parseJson);

export const postNewsletterSubscription = (body) =>
  fetch(`${API_BASE_URL}/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(parseJson);

export const getAdminDashboard = (apiKey) =>
  fetch(`${API_BASE_URL}/admin/dashboard`, {
    headers: {
      'x-admin-key': apiKey,
    },
  }).then(parseJson);
