import dotenv from 'dotenv';

dotenv.config();

console.log("MongoDB URI from .env:", process.env.MONGODB_URI);
