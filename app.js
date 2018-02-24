
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

//adding variables, the routes.
//step #1.

var login = require('./routes/login');
var index = require('./routes/index');
var hello = require('./routes/hello');
var play = require('./routes/play');
var game = require('./routes/game');
var profile = require('./routes/profile');

// Example route
// var user = require('./routes/user');

var app = express();

//importing extra routes
//That was for project....

//var index = require('./routes/index');
var project = require('./routes/project');
//routing, from the routes folder.... 

//assigning paths

//app.get('/', index.view);
//new paths

app.get('/', login.view);
app.get('/index', index.view);
app.get('/play', play.view);
app.get('/profile', profile.view);

//for those project lists.
//app.get('/project', project.viewProject);
//app.get('/project/:name', project.viewProject);

// office hour changes

//user requests /play, 

// play.view from play.js
app.get('/play', play.view);
app.get('/login',login.view);
app.get('index', index.view);
app.get('/game', game.view);
app.get('/profile', profile.view);

//Trying to set up play here.... this is for the link
/*
var play =('./routes/play');

app.get('/', index.view);
app.get('/play', play.viewProject);
app.get('/play/:name', play.viewProject);
*/


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/hello/:userName', hello.view);

// app.get('/users', user.list);


//adding the play route here.

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
