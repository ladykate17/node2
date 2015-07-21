var fs = require('fs'); // include File System core module --> this provides operations like read/write
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var fileContents = fs.readFileSync('data.txt');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.header('Content-Type', 'text/html');
	res.send(fileContents);
})

var server = app.listen(9795, function() {
	console.log('Express server listening on port ' + server.address().port);
});
