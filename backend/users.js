// import fs from "fs";

// const filePath = "./users.json"; // Path to your JSON file

// // Function to read users from the JSON file
// export const getUsers = () => {
//   try {
//     if (!fs.existsSync(filePath)) {
//       // If the file doesn't exist, return an empty array
//       return [];
//     }
//     const data = fs.readFileSync(filePath, "utf-8"); // Specify encoding for better readability
//     return JSON.parse(data); // Parse and return the user data
//   } catch (error) {
//     console.error("Error reading users:", error.message);
//     return []; // Return an empty array on failure
//   }
// };

// // Function to write users to the JSON file
// export const saveUsers = (users) => {
//   try {
//     fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8"); // Add encoding
//   } catch (error) {
//     console.error("Error saving users:", error.message);
//   }
// };
