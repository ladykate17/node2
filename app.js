var fs = require('fs'); // include File System core module --> this provides operations like read/write
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
// var fileContents = fs.readFileSync('data.txt'); // Part II code

	// NOTE* readFileSync is Synchronous! The problem with readFileSync is that it is a blocking
	// method. This means that the server has to wait for the file to be loaded before moving 
	// on to the next instruction in your code. This is bad! The performance benifits of node
	// are only realized when slow operations are performed asynchronously so that the server
	// can continue to handle requests while waiting for the results. This is especially true
	// in this example since reading from the file system is very slow. In the next part, you
	// will make your static file server nonblocking.


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

// NOTE* the golden rule of asynchronous programming: Anything that depends on the result of
// an asynchronous call must go inside the callback. Code that comes after the asynchronous
// call is executed before the callback.

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
