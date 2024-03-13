import mongoose, { Schema, Document, Model } from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User: Model<User> =
  mongoose.models.User || mongoose.model<User>("User", userSchema);

export default User;
