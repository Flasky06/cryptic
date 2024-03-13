import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://bonnienjuguna106:cryptic@cluster0.oadp0ry.mongodb.net/";
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("connected to mongoDB");
  } catch (error) {
    console.log("Error connecting to mongoDB", error);
  }
};
