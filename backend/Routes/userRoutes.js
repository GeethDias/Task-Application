const express = require('express');
const { loginUser } = require('../Controllers/userController');
const { registerUser } = require('../Controllers/userController');

const Router = express.Router();

// User login route
Router.post('/login', loginUser);

// Register route
Router.post('/register', registerUser);

module.exports = Router;
