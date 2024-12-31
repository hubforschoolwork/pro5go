import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db.js'; // Ensure this is your MongoDB connection file
import User from './models/User.js'; // Import the User model

const app = express();

connectDB();

app.use(cors({
  origin: 'http://localhost:5173', // Allow only this origin
  methods: ['GET', 'POST'], // Specify allowed methods
  allowedHeaders: ['Content-Type'], // Specify allowed headers
}));

app.use(bodyParser.json());

// Login endpoint************
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login request received:", req.body); // Log the request body   

  if (!username || !password) {
    console.error("Username and/or password were not provided."); // Log if credentials are missing
    return res.status(400).json({ error: "Username and password are required." });
  }

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      console.error("Invalid login attempt for username:", username); // Log failed login attempt
      return res.status(401).json({ error: "Invalid username or password." });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Register endpoint***************
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Username already exists." });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start the server*************
const PORT = 3000; // Use any available port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

