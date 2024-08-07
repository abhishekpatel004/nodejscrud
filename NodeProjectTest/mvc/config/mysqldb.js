const { Sequelize } = require('sequelize');

// Replace the placeholders with your actual database connection details
const sequelize = new Sequelize('Db_name', 'username', 'password', {
  host: 'localhost', // Replace 'localhost' with your database host if it's different
  dialect: 'mysql',
  logging: false // Set to `true` if you want to enable SQL query logging
});

// Function to connect to MySQL
const connectToMySqlDb = async () => {
  try {
    await sequelize.authenticate(); // Authenticate the connection
    console.log('Connected to MySQL');
  } catch (err) {
    console.error('Error connecting to MySQL:', err);
    throw err; // Propagate the error to be handled by the server initialization
  }
};

module.exports = { sequelize, connectToMySqlDb };

