import { Service, Inject } from 'typedi';
import MailerService from './mailer';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import { Category } from '../interfaces/Category';
import { Document } from 'mongoose';

@Service()
export default class MetadataService {
    constructor(   
    @Inject('categoryModel') private categoryModel: Models.CategoryModel,
    private mailer: MailerService,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
) {
}
   public async getCategories(): Promise<(Category & Document<any>)[]> {
       try {
           const categories = await this.categoryModel.find();
           return categories;
       } catch(err) {
            console.log(err.stack);
       }
   }
}