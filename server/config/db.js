import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`\nMongoDB connection failed: ${error.message}`);
    console.error(
      'Start MongoDB locally (port 27017) or set MONGODB_URI in server/.env to a MongoDB Atlas connection string.\n'
    );
    throw error;
  }
};

export default connectDB;
