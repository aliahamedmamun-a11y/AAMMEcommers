import mongoose from "mongoose";

let isConnected = false; // Track connection status

const connectDB = async () => {
  if (isConnected) {
    console.log("🔄 Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    throw new Error("Database connection error");
  }
};

export default connectDB;
