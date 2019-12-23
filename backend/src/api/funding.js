import { Router } from 'express';
import mongoose from 'mongoose';
import Caver from 'caver-js';

/**
 * @swagger
 * tags:
 *   name: Funding
 *   description: 펀딩
 */
export default () => {
    const api = Router();
    const caver = new Caver('https://localhost:8551/');
    const fundingHubContract = new caver.klay.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe');

    const Project = mongoose.model('Project');

    // GET api/fun
	api.get('/', (req, res) => {
        Project.find( (err, projects) => {
            if(err) return res.status(500).json({'status': 'error'});
            res.json(projects);
        })
    });

    /**
     * @swagger
     * /api/funding/:id:
     *   post:
     *     summary: 프로젝트 펀딩하기
     *     tags: [Funding]
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
    api.post('/:id', (req, res) => {
        Project.findOne({ _id: req.params.id }, (err, project) => {
            if (err) return res.status(500).json({ 'result': 'error' })
            fundingHubContract.method.contribute(_project, req.body.data.amount);
            res.json(project);
        })
    });
	return api;
}
