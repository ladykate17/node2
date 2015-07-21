var fs = require('fs'); // include File System core module --> this provides operations like read/write
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
// var fileContents = fs.readFileSync('data.txt'); // Part II code


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Part II code
// app.get('/', function(req, res){ 
// 	res.header('Content-Type', 'text/html');
// 	res.send(fileContents);
// });

// Part III code
// app.get('/', function(req, res){ 
// 	fs.readFile('data.txt', function(err, data){
// 		res.header('Content-Type', 'text/html');
// 		res.send(data);
// 	});
// });

// Bonus: Static File Server
app.get('/:filename', function(req, res) {

	fs.readFile(req.param.filename, function(err, data){
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
	
});

var server = app.listen(9795, function() {
	console.log('Express server listening on port ' + server.address().port);
});
