const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String },
    fundingAmount: { type: Number },
});

mongoose.model('Project', projectSchema);





