const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Set mongoose options
    mongoose.set('strictQuery', false);
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('\n📋 Troubleshooting Tips:');
    console.error('1. Make sure MongoDB is installed and running');
    console.error('2. Check if your connection string is correct in .env file');
    console.error('3. If using MongoDB Atlas, check your IP whitelist');
    console.error('4. Try using MongoDB Atlas: https://www.mongodb.com/atlas\n');
    process.exit(1);
  }
};

module.exports = connectDB;
