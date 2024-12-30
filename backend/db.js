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


