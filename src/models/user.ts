import { IUser } from '../interfaces/IUser';
import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },
    password: String,
    salt: String,
    phone: {
     type: String
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    isRegistered: {
      type: Boolean
    },
    role: {
      type: mongoose.Schema.Types.ObjectId
    },
    type: {
      type: Number
    }
  },
  { timestamps: {createdAt: 'createDate'} },
);

export default mongoose.model<IUser & mongoose.Document>('User', User);