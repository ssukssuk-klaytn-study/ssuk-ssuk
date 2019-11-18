import { version } from '../../package.json';
import { Router } from 'express';
import funding from './funding';
import projects from './projects';

export default ({ config, db }) => {
	const api = Router();

	api.use('/projects', projects())
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
