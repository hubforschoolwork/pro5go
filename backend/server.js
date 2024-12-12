import express from "express";
import bodyParser from "body-parser";
import { getUsers, saveUsers } from "./users.js"; // Import the functions



const app = express();
app.use(bodyParser.json());

// Endpoint to get all users
app.get("/api/users", (req, res) => {
  const users = getUsers(); // Use the getUsers function
  res.json(users);
});

// Endpoint to register a new user
app.post("/api/register", (req, res) => {
  const newUser = req.body;
  const users = getUsers(); // Get the current users

  newUser.id = users.length + 1; // Assign a new ID
  users.push(newUser); // Add the new user

  saveUsers(users); // Save the updated user list
  res.json({ message: "User registered successfully!", user: newUser });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


