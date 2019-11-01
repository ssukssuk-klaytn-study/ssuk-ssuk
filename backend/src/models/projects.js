const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    fundingAmount: { type: Number },
});

mongoose.model('Project', projectSchema);





