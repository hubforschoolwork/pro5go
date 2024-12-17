import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', // Replace with your database host
  user: 'root',      // Your MySQL username
  password: 'your_password', // Your MySQL password
  database: 'new project 5',     // Your database name
});

export default pool;
