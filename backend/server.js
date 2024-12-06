require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./Routes/taskRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Register routes
app.use('/api/tasks', taskRouter); // All task routes under `/api`

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to the database and listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
