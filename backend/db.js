import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

export default db;



// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: 'localhost', // Replace with your database host
//   user: 'root',      // Your MySQL username
//   password: 'your_password', // Your MySQL password
//   database: 'new project 5',     // Your database name
// });

// export default pool;
