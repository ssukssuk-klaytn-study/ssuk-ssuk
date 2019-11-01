const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const projectSchema = new mongoose.Schema({
    name: { type: String },
    fundingAmount: { type: Number },
});

projectSchema.plugin(autoIncrement.plugin, 'Project');

// // 모든 커피숍 조회
// CafeSchema.static('findAll', function(callback) {
// 	return this.find({"deprecated":false}, callback);
// });


// // 가까운 커피숍 num개 조회
// CafeSchema.static('findNear', function(longitude, latitude, maxDistance, num, callback) {
// 	console.log('CafeSchema의 findNear 호출됨.');

// 	this.find({deprecated:false}).where('geometry').near({center:{type:'Point', coordinates:[longitude, latitude]}, maxDistance:maxDistance}).limit(num).exec(callback);
// });

// // 일정 범위 내의 커피숍 조회
// CafeSchema.static('findWithin', function(topleft_longitude, topleft_latitude, bottomright_longitude, bottomright_latitude, callback) {
// 	console.log('CafeShopSchema의 findWithin 호출됨.');

// 	this.find().where('geometry').within({box:[[parseFloat(topleft_longitude), parseFloat(topleft_latitude)], [parseFloat(bottomright_longitude), parseFloat(bottomright_latitude)]]}).exec(callback);
// });

// // 일정 반경 내의 커피숍 조회
// CafeSchema.static('findCircle', function(center_longitude, center_latitude, radius, callback) {
// 	console.log('CafeSchema의 findCircle 호출됨.');

// 	// change radian : 1/6371 -> 1km
// 	this.find().where('geometry').within({center:[parseFloat(center_longitude), parseFloat(center_latitude)], radius: parseFloat(radius/6371000), unique: true, spherical: true}).exec(callback);
// });



// module.exports에 UserSchema 객체 직접 할당
export default mongoose.model('Project', projectSchema);




