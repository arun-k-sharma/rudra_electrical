require('dotenv').config();

const connectDB = require('./config/db');
const seedAdmin = require('./utils/seedAdmin');
const app = require('./app');

const port = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB('mongodb://127.0.0.1:27017/rudra_electricals');

    await seedAdmin();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();