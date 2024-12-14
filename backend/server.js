import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";

const app = express();
const filePath = "./users.json"; // Path to your users.json file

app.use(cors());

   // Allow CORS for all origins (can be restricted in production)

   app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST'], // Specify allowed methods
    allowedHeaders: ['Content-Type'], // Specify allowed headers
}));

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
    console.log("Login request received:", req.body); // Log the request body
    const { username, password } = req.body;

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



// *******************************************************************************************
// import express from "express";
// import { getUsers, saveUsers } from "./users.js";
// import cors from "cors";
// import bodyParser from "body-parser";

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json);



// // Endpoint to get all users
// app.get("/api/users", (req, res) => {
//   res.send("Server is running!");
//   try {
//     const users = getUsers(); // Use the getUsers function
//     res.json(users);
//   } catch (error) {
//     console.error("Error fetching users:", error.message);
//     res.status(500).json({ error: "Failed to fetch users." });
//   }
// });

// // Endpoint to register a new user
// app.post("/api/register", (req, res) => {
//   try {
//     const newUser = req.body;
//     const users = getUsers(); // Get the current users

//     // Validate user data
//     if (!newUser.username || !newUser.password) {
//       return res.status(400).json({ error: "Username and password are required." });
//     }

//     // Check for duplicate usernames
//     const userExists = users.some((user) => user.username === newUser.username);
//     if (userExists) {
//       return res.status(400).json({ error: "Username already exists." });
//     }

//     // Add the new user
//     newUser.id = users.length + 1; // Assign a new ID
//     users.push(newUser);

//     saveUsers(users); // Save the updated user list
//     res.json({ message: "User registered successfully!", user: newUser });
//   } catch (error) {
//     console.error("Error registering user:", error.message);
//     res.status(500).json({ error: "Failed to register user." });
//   }
// });

// // Endpoint to log in a user
// app.post("/api/login", (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const users = getUsers(); // Get users from the JSON file

//     const user = users.find((u) => u.username === username && u.password === password);

//     if (!user) {
//       return res.status(401).json({ error: "Invalid username or password." });
//     }

//     res.json({ message: "Login successful!", user });
//   } catch (error) {
//     console.error("Error during login:", error.message);
//     res.status(500).json({ error: "An error occurred during login." });
//   }
// });


// // Endpoint to access the dashboard (protected route)
// app.get("/api/dashboard", (req, res) => {
//   try {
//     // Simulate authentication for simplicity
//     // In real applications, use JWT or session-based authentication
//     const authHeader = req.headers.authorization;

//     if (!authHeader || authHeader !== "Bearer valid-token") {
//       return res.status(403).json({ error: "Access denied. Please log in first." });
//     }

//     res.json({ message: "Welcome to the dashboard!" });
//   } catch (error) {
//     console.error("Error accessing dashboard:", error.message);
//     res.status(500).json({ error: "Failed to load dashboard." });
//   }
// });

// // Start the server
// app.listen(3000, () => console.log("Server running on http://localhost:3000"));
// ********************************************************************************



// Dec 12, 2024



// import express from "express";
// import bodyParser from "body-parser";
// import fs from "fs";
// import cors from "cors";

// const app = express();
// const filePath = "./users.json"; // Path to your users.json file

// app.use(cors());
// app.use(bodyParser.json());

// // Helper functions
// const getUsers = () => JSON.parse(fs.readFileSync(filePath));
// const saveUsers = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

// // Login endpoint
// app.post("/api/login", (req, res) => {
//     try {
//         const { username, password } = req.body;

//         if (!username || !password) {
//             return res.status(400).json({ error: "Username and password are required." });
//         }

//         const users = getUsers();
//         const user = users.find((u) => u.username === username && u.password === password);

//         if (!user) {
//             return res.status(401).json({ error: "Invalid username or password." });
//         }

//         res.json({ message: "Login successful", user });
//     } catch (error) {
//         console.error("Error in /api/login:", error.message);
//         res.status(500).json({ error: "Server error. Please try again later." });
//     }
// });

// // Start the server
// app.listen(3000, () => console.log("Server running on http://localhost:3000"));
