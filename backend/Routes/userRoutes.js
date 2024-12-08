const express = require('express');
const { loginUser } = require('../Controllers/userController');

const Router = express.Router();

// User login route
Router.post('/login', loginUser);

module.exports = Router;
