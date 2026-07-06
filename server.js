require('dotenv').config();

const connectDB = require('./config/db');
const seedAdmin = require('./utils/seedAdmin');
const app = require('./app');

const port = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    await seedAdmin();

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();