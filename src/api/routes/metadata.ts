import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import MetadataService from '../../services/metadata';
import { IUserInputDTO } from '../../interfaces/IUser';
import middlewares from '../middlewares';
import { celebrate, Joi } from 'celebrate';
import { Logger } from 'winston';

const route = Router();

export default (app: Router) => {
    app.use('/metadata', route);
    
    route.get('/', (req, res, next) => {
        return res.status(200).send('Hello');
    })
    route.get('/categories',  async (req: Request, res: Response, next: NextFunction) => {
        const logger: Logger = Container.get('logger');
        logger.debug('Calling metadata endpoint with request query: %o', req.url );
        try {
           const metadataServiceInstance = Container.get(MetadataService);
           const categories = await metadataServiceInstance.getCategories();
           return res.status(200).send(categories);
        } catch(e) {
            logger.error('🔥 error: %o', e);
            return next(e);
        }
    })
}