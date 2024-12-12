const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = {
  'john_doe': 'password123',
  'jane_smith': 'securepassword',
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid username or password' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

