import mongoose from 'mongoose';

const newsletterSubscriptionSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
  },
  {
    timestamps: true,
  },
);

export const NewsletterSubscription =
  mongoose.models.NewsletterSubscription ||
  mongoose.model('NewsletterSubscription', newsletterSubscriptionSchema);
