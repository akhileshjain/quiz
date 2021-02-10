import { Router } from 'express';
import auth from './routes/auth';
import metadata from './routes/metadata';
//import user from './routes/user';
//import agendash from './routes/agendash';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	metadata(app);
	//agendash(app);

	return app
}