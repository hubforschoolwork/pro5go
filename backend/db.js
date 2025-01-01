import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load .env file
dotenv.config({ path: '../.env' });



const connectDB = async () => {
  try {
    // Check if MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
    });

    console.log('Connected to the database');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
