import express from "express"
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample array of objects (simulating a database)
let users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Mike Johnson', age: 35 }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET a user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// POST a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1, // simple auto-increment id
    name: req.body.name,
    age: req.body.age
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT to update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    user.name = req.body.name;
    user.age = req.body.age;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
