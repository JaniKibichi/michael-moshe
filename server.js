var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	meetupsController = require('./server/controllers/meetupsController.js');

mongoose.connect('mongodb://localhost:27017/mosher');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname +'/client/js'));

//REST API
app.get('/api/meetups',meetupsController.list);
app.post('/api/meetups',meetupsController.create);

app.listen(3300, function(){
	console.log('It is working...');
});