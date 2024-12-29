import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('MongoDB URI:', process.env.MONGODB_URI); // Debug line

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to the database');
});

export default db;


// *************
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// // Load environment variables from .env file
// dotenv.config();

// // Function to connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectDB;
