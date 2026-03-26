const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPhone = (value) => /^[\d+\-\s()]{7,}$/.test(value);

const cleanString = (value) => (typeof value === 'string' ? value.trim() : '');

export const validateContactPayload = (body) => {
  const data = {
    name: cleanString(body?.name),
    email: cleanString(body?.email),
    phone: cleanString(body?.phone),
    service: cleanString(body?.service),
    message: cleanString(body?.message),
  };

  const errors = {};

  if (!data.name) {
    errors.name = 'Please enter your name.';
  }

  if (!isEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!isPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!data.service) {
    errors.service = 'Please choose a service.';
  }

  if (data.message.length < 20) {
    errors.message = 'Please share a few more details about your project.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    data,
  };
};

export const validateNewsletterPayload = (body) => {
  const data = {
    email: cleanString(body?.email),
  };

  const errors = {};

  if (!isEmail(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    data,
  };
};
