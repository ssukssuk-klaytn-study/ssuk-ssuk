import { Router } from 'express';
import shortid from 'shortid';
import mongoose from 'mongoose';
import Caver from "caver-js";

/**
 * @swagger
 * tags:
 *   name: Project
 *   description: 프로젝트 정보 가져오기
 */
export default () => {
    const api = Router();
    const Project = mongoose.model('Project');
    const caver = new Caver('https://localhost:8551/');
    const fundingHubContract = new caver.klay.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe');
    /**
     * @swagger
     * /api/projects/:
     *   get:
     *     summary: 프로젝트 리스트 가져오기
     *     tags: [Project]
     *     responses:
     *       200:
     *         description: 성공
     *       403:
     *         $ref: '#/components/res/Forbidden'
     *       404:
     *         $ref: '#/components/res/NotFound'
     *       500:
     *         $ref: '#/components/res/BadRequest'
     */
	api.get('/', (req, res) => {
        Project.find( (err, projects) => {
            if(err) return res.status(500).json({ 'result': 'error'});
            res.json(projects);
        })
    });

    /**
     * @swagger
     * /api/projects/{id}:
     *   get:
     *     summary: 프로젝트 _id로 정보 가져오기
     *     parameters: 
     *      - in: path
     *        name: id
     *        required: true
     *        schema:
     *          type: string
     *     tags: [Project]
     *     responses:
     *       200:
     *         description: 성공
     *       403:
     *         $ref: '#/components/res/Forbidden'
     *       404:
     *         $ref: '#/components/res/NotFound'
     *       500:
     *         $ref: '#/components/res/BadRequest'
     */    
    api.get('/:id', (req, res) => {
        Project.findOne({ _id: req.params.id }, (err, project) => {
            if (err) return res.status(500).json({ 'result': 'error' })
            res.json(project);
        })
    })
    
    /**
     * @swagger
     * /api/projects/new:
     *   post:
     *     summary: 프로젝트 등록하기
     *     parameters:
     *       - in: body
     *         name: body
     *         description: |
     *          프로젝트 정보 등록
     *         type: object
     *         schema:
     *          type: string
     *          properties:
     *              data:
     *                  type: object
     *     tags: [Project]
     *     responses:
     *       200:
     *         description: 성공
     *       403:
     *         $ref: '#/components/res/Forbidden'
     *       404:
     *         $ref: '#/components/res/NotFound'
     *       500:
     *         $ref: '#/components/res/BadRequest'
     */
    api.post('/new', (req, res) => {
        // TODO validation
        const newProject = new Project();
        newProject.data = req.body.data;

        newProject.save()
                .then(project => {
                    const proj = fundingHubContract.method.createProject(newProject.data.fundingGoal, newProject.data.deadline);
                    res.status(200).json({ 'result': 'success' })
                    })
				.catch(err => res.status(500).json({ 'result': 'error' }));
    });
	return api;
}
