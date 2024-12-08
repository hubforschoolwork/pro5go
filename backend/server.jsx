import express from "express";
import bodyParser from "body-parser";
import { getUsers, saveUsers } from "./users.js";

const app = express();
app.use(bodyParser.json());

// Get all users
app.get("/api/users", (req, res) => {
  const users = getUsers();
  res.json(users);
});

// Add a new user
app.post("/api/register", (req, res) => {
  const newUser = req.body;
  const users = getUsers();
  users.push(newUser);
  saveUsers(users);
  res.json({ message: "User added successfully!" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));




// December 8, 2024********************************************************

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// const filePath = "./demo/users.json";

// // Retrieve users
// app.get("/api/users", (req, res) => {
//     const users = JSON.parse(fs.readFileSync(filePath));
//     res.json(users);
// });

// // Add a new user
// app.post("/api/register", (req, res) => {
//     const newUser = req.body;

//     const users = JSON.parse(fs.readFileSync(filePath));
//     users.push(newUser);

//     fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
//     res.json({ message: "User added successfully!" });
// });

// app.listen(5000, () => console.log("Backend running on http://localhost:5000"));













// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MySQL Database Connection
// const db = mysql.createConnection({
//     host: 'localhost', // Change to your MySQL host
//     user: 'root',      // Change to your MySQL username
//     password: '',      // Change to your MySQL password
//     database: 'test',  // Change to your database name
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Database connection failed:', err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database.');
// });

// // Example Route
// app.get('/api/test', (req, res) => {
//     db.query('SELECT * FROM example_table', (err, results) => {
//         if (err) {
//             res.status(500).json({ error: err });
//         } else {
//             res.json(results);
//         }
//     });
// });

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
