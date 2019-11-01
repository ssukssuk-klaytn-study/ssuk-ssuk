// export default callback => {
// 	// connect to a database if needed, then pass it to `callback`:
// 	callback();
// }
const mongoose = require('mongoose');
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
  mongoose.connection.on('disconnected', connect);
//   require('./user.js'); // user.js는 나중에 만듭니다.
};