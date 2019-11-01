import { Router } from 'express';
import shortid from 'shortid';
import mongoose from 'mongoose';

export default () => {
    let api = Router();
    const Project = mongoose.model('Project');

    // GET api/projects
	api.get('/', (req, res) => {
        Project.find( (err, projects) => {
            if(err) return res.status(500).json({'status': 'error'});
            res.json(projects);
        })
    });

    // GET api/projects/:id
    api.get('/:id', (req, res) => {
        project.findOne({ id: req.param.id }, (err, project) => {
            if (err) return res.status.json({ 'status': 'error' })
            res.json(project);
        })
    })
    
    // POST api/projects/new
    api.post('/new', (req, res) => {
        // TODO validation

        const newProject = new Project();
        newProject.id = shortid.generate();
        newProject.name = req.body.name;
        newProject.fundingAmount = req.body.fundingAmount;

        newProject.save()
                .then(project => {
                    res.status(200).json({'123': 'sss'})
                    })
				.catch(err => res.status(500).json({'123':'fff'}));
    });

    // PUT api/projects
    api.put('', (req, res) => {
        Project.findOne({id: req.body.id}, (err, project) => {
            if (err) return res.status(500).json({'status': 'error'});
            // TODO validation

            project.name = req.body.name;
            project.fundingAmount = req.body.fundingAmount;
            project.save()
                .then(project => {
                    res.status(200).json({'123': 'sss'})
                    })
                .catch(err => res.status(500).json({'123':'fff'}));
        });
    })

    // DELETE api/projects/:id
    api.delete('/:id', (req, res) => {
        // TODO Validation
        Project.findOneAndDelete({ id: req.param.id}, (err, project) => {
            if (err) return res.status(500).json({'status': 'error'});
            res.status(200).json({'123': 'sss'})
        })
    })

	return api;
}
