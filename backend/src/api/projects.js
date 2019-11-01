import { Router } from 'express';
import mongoose from 'mongoose';

export default () => {
    let api = Router();
    const projects = mongoose.model('Project');
    
    // GET api/projects/
	api.get('/', (req, res) => {
        projects.find(function(err, projects){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(projects);
        })
    });
    
    // POST api/projects/new
    api.post('/new', (req, res) => {
        console.log(req.body.name);
        const newProject = new projects();
        newProject.name = req.body.name;
        newProject.fundingAmount = 1;

        newProject.save()
                .then(project => {
                    console.log(1, project)
                    res.status(200).json({'123': 'sss'})

                    })
				.catch(err => res.status(500).json({'123':'fff'}));
    });

	return api;
}
