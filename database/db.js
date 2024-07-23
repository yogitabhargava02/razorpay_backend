// server.mjs

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DB_URL } = process.env;

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL, {
     useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

connectToDatabase();

export default mongoose;
