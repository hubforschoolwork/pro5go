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


import express from "express";
import bodyParser from "body-parser";
import { getUsers, saveUsers } from "./users.js";

const app = express();
app.use(bodyParser.json());

// Endpoint to get all users
app.get("/api/users", (req, res) => {
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

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
