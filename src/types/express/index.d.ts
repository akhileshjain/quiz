import { Document, Model } from 'mongoose';
import { IUser } from '../../interfaces/IUser';
import {Category} from '../../interfaces/Category';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser & Document;
    }    
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type CategoryModel = Model<Category & Document>;
  }
}