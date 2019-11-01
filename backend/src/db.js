
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

export default () => {
  function connect() {
    mongoose.connect('mongodb://localhost', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  autoIncrement.initialize(mongoose.connection);
  mongoose.connection.on('disconnected', connect);
  require('./models/projects.js');
//   require('./user.js'); // user.js는 나중에 만듭니다.
};