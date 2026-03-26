import mongoose from 'mongoose';

const contactSubmissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const ContactSubmission =
  mongoose.models.ContactSubmission ||
  mongoose.model('ContactSubmission', contactSubmissionSchema);
