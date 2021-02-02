import { IUser } from '../interfaces/IUser';
import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a user name'],
      index: true,
    },
    password: String,
    salt: String,
    phone: {
     type: String
    },
    firstName: {
      type: String,
      required: [true, 'Please enter first name']
    },
    lastName: {
      type: String,
      required: [true, 'Please enter first name']
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