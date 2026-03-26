import mongoose from 'mongoose';
import { config, hasMongoConfig } from './config.js';

let mongoReady = false;

export const connectDatabase = async () => {
  if (!hasMongoConfig) {
    console.log('MongoDB not configured. Using JSON file storage fallback.');
    return false;
  }

  try {
    await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    mongoReady = true;
    console.log('MongoDB connected successfully.');
    return true;
  } catch (error) {
    mongoReady = false;
    console.warn(`MongoDB connection failed. Falling back to JSON storage. ${error.message}`);
    return false;
  }
};

export const isMongoReady = () => mongoReady;
