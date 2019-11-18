import { Router } from 'express';
import shortid from 'shortid';
import mongoose from 'mongoose';

export default () => {
    const api = Router();
    const Project = mongoose.model('Project');

    // GET api/projects
	api.get('/', (req, res) => {
        Project.find( (err, projects) => {
            if(err) return res.status(500).json({'status': 'error'});
            res.json(projects);
        })
    });

	return api;
}
