import mongoose from 'mongoose';
import { Category } from '../interfaces/Category';

const Category = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    type: Number,
    createdBy: mongoose.Schema.Types.ObjectId,
    name: String,
    hasSubCategories: Boolean
})

export default mongoose.model<Category & mongoose.Document>('Category', Category)