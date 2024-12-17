import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";
import pool from './db.js';

const app = express();
const filePath = "./users.json"; // Path to your users.json file

app.use(cors());

   // Allow CORS for all origins (can be restricted in production)

   app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST'], // Specify allowed methods
    allowedHeaders: ['Content-Type'], // Specify allowed headers
}));

// *********************December 16, 2024************************************
// Fetch all topics
app.get('/api/topics', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM Topics');
      res.json(rows);
    } catch (error) {
      console.error('Error fetching topics:', error);
      res.status(500).send('Server Error');
    }
  });

// Fetch questions for a specific topic
app.get('/api/questions/:topicId', async (req, res) => {
    const { topicId } = req.params;
    try {
      const [rows] = await pool.query('SELECT * FROM Questions WHERE topicId = ?', [topicId]);
      res.json(rows);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).send('Server Error');
    }
  });

// Add more routes as needed...

// Start the server
const PORT = 3000; // Use any available port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


// *******************************************************************************


app.use(bodyParser.json());

// Helper functions
const getUsers = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([], null, 2)); // Create an empty file if it doesn't exist
    }
    return JSON.parse(fs.readFileSync(filePath));
};

const saveUsers = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

// Login endpoint
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    console.log("Login request received:", req.body); // Log the request body   

    if (!username || !password) {
        console.error("Username and/or password were not provided."); // Log if credentials are missing
        return res.status(400).json({ error: "Username and password are required." });
    }

    const users = getUsers();
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        console.error("Invalid login attempt for username:", username); // Log failed login attempt
        return res.status(401).json({ error: "Invalid username or password." });
    }

    res.json({ message: "Login successful", user });
});

// Register endpoint
app.post("/api/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }

    const users = getUsers();
    const existingUser = users.find((u) => u.username === username);

    if (existingUser) {
        return res.status(409).json({ error: "Username already exists." });
    }

    const newUser = { username, password };
    users.push(newUser);
    saveUsers(users);

    res.status(201).json({ message: "User registered successfully", user: newUser });
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));


