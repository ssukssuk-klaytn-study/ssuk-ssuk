import { version } from '../../package.json';
import { Router } from 'express';
import projects from './projects';

export default ({ config, db }) => {
	let api = Router();

	api.use('/projects', projects())
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
