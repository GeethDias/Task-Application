const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Generate JWT
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// User Login
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("Username and Password: ", username, password)
  const user = await User.findOne({ username });

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Check if the password is correct
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Generate a token
    const token = createToken(user._id);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Function to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// User Registration
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  console.log("Username: ", username)
  // Validate input
  if (!username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create new user
    const newUser = await User.create({ username, password });
    console.log("New User: ", newUser)
    // Generate token
    const token = generateToken(newUser._id);
    console.log("Token: ", token)

    res.status(201).json({ username: newUser.username, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { loginUser, registerUser };
