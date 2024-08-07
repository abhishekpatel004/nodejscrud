const express = require('express');
const connectToMongoDB  = require('./mvc/config/mongodb');
const employeeRoutes = require('./mvc/routes/mongodbRoutes');
const {connectToMySqlDb} = require('./mvc/config/mysqldb');
const userRoutes = require('./mvc/routes/mysqlRoutes');

const PORT = 8002;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use employee routes
app.use('/employeesCrudMongo', employeeRoutes);
app.use('/employeesCrudMysql', userRoutes);


// Initialize and start the server
const startServer = async () => {
  try {
    await connectToMongoDB();
    await connectToMySqlDb();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

// Call the function to start the server
startServer();
