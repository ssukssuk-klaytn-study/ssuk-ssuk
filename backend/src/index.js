import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import db from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/ssukssuk', {useNewUrlParser: true});
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function(){
//     console.log("Connected to mongodb server");
// })
db();


let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));


app.use(middleware({ config, db }));
app.use('/api', api({ config, db}));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
