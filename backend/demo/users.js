import fs from "fs";

const filePath = "./users.json"; // Path to your JSON file

// Function to read users from the JSON file
export const getUsers = () => {
  const data = fs.readFileSync(filePath); // Read the file
  return JSON.parse(data); // Parse the JSON and return the user data
};

// Function to write users to the JSON file
export const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2)); // Write the updated user list
};
