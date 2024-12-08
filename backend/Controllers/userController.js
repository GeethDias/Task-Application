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

module.exports = { loginUser };
