import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// middleware

const port = process.env.PORT || 5100;
app.get('*', (req, res) => {
  res.status(200).json({ message: 'Hello World' })
})
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${5000}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
