const mongoose = require('mongoose');
require('dotenv').config();
const connectToMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw err; // Propagate the error to be caught in the server initialization
    }
  };
  
  module.exports = connectToMongoDB;