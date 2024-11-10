import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_API_KEY!);
    console.log('succecc mongoDB');
  } catch (error) {
    console.log('Failure: Cannot connect to MongoDB');
    throw new Error();
  }
};

export default connectDB;
