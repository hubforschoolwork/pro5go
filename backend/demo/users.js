// import fs from "fs";

// const users = JSON.parse(fs.readFileSync("./demo/users.js"));


import fs from "fs";

const filePath = "./users.json";

// Load mock data from JSON file
export const getUsers = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Save updated data to JSON file
export const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};
