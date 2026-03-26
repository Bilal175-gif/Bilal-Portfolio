import 'dotenv/config';
import { createApp } from './src/app.js';
import { config } from './src/config.js';
import { connectDatabase } from './src/db.js';

const start = async () => {
  await connectDatabase();

  const app = createApp();

  app.listen(config.port, () => {
    console.log(`Zepra Tech API running on http://localhost:${config.port}`);
  });
};

start();
