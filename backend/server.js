// import express from "express";
// import bodyParser from "body-parser";
// import { getUsers, saveUsers } from "./users.js"; // Import the functions



// const app = express();
// app.use(bodyParser.json());

// // Endpoint to get all users
// app.get("/api/users", (req, res) => {
//   const users = getUsers(); // Use the getUsers function
//   res.json(users);
// });

// // Endpoint to register a new user
// app.post("/api/register", (req, res) => {
//   const newUser = req.body;
//   const users = getUsers(); // Get the current users

//   newUser.id = users.length + 1; // Assign a new ID
//   users.push(newUser); // Add the new user

//   saveUsers(users); // Save the updated user list
//   res.json({ message: "User registered successfully!", user: newUser });
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));

// **************************************************************************************
// import express from "express";
// import bodyParser from "body-parser";
// import { getUsers, saveUsers } from "./users.js";

// const app = express();
// app.use(bodyParser.json());

// // Endpoint to get all users
// app.get("/api/users", (req, res) => {
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

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));






// *****************************************************

import express from "express";
import bodyParser from "body-parser";
import { getUsers, saveUsers } from "./users.js";
import cors from "cors";



const app = express();
app.use(cors());
app.use(express.json());


// Endpoint to get all users
app.get("/api/users", (req, res) => {
  res.send("Server is running!");
  try {
    const users = getUsers(); // Use the getUsers function
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Failed to fetch users." });
  }
});

// Endpoint to register a new user
app.post("/api/register", (req, res) => {
  try {
    const newUser = req.body;
    const users = getUsers(); // Get the current users

    // Validate user data
    if (!newUser.username || !newUser.password) {
      return res.status(400).json({ error: "Username and password are required." });
    }

    // Check for duplicate usernames
    const userExists = users.some((user) => user.username === newUser.username);
    if (userExists) {
      return res.status(400).json({ error: "Username already exists." });
    }

    // Add the new user
    newUser.id = users.length + 1; // Assign a new ID
    users.push(newUser);

    saveUsers(users); // Save the updated user list
    res.json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ error: "Failed to register user." });
  }
});

// Endpoint to log in a user
app.post("/api/login", (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Request body:", req.body); // Log the body for debugging

    if (!username || !password) {
      console.error("Missing username or password");
      return res.status(400).json({ error: "Username and password are required." });
    }

    const users = getUsers(); // Get users from the JSON file
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
      console.error("Invalid credentials");
      return res.status(401).json({ error: "Invalid username or password." });
    }

    // Simulating a session by returning the user details (token-based approach is recommended for production)
    res.json({ message: "Login successful!", user });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "An error occurred during login." });
  }
});


// Endpoint to access the dashboard (protected route)
app.get("/api/dashboard", (req, res) => {
  try {
    // Simulate authentication for simplicity
    // In real applications, use JWT or session-based authentication
    const authHeader = req.headers.authorization;

    if (!authHeader || authHeader !== "Bearer valid-token") {
      return res.status(403).json({ error: "Access denied. Please log in first." });
    }

    res.json({ message: "Welcome to the dashboard!" });
  } catch (error) {
    console.error("Error accessing dashboard:", error.message);
    res.status(500).json({ error: "Failed to load dashboard." });
  }
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
