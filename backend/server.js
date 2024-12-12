const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./Routes/taskRoutes');
const userRouter = require('./Routes/userRoutes'); // Import user routes

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Register routes
app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter); // Register user routes

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to the database and listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error(error);
  });
