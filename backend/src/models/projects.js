const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: { type: String },
    data: { type: Object }, // 시간이 없으므로 걍 데이터를 넣자
});

mongoose.model('Project', projectSchema);





