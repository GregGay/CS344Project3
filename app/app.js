
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');

var awesome = require('./controllers/word/awesome');
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
/*app.get(‘/users/:user’, function(req, res) { 
	res.send(‘Welcome to the profile of ’ + req.params.user + ‘!’); 
});*/
//app.get('/word/awesome', function(req, res) { res.send('Welcome to the profile of Semmy Purewal'); });
app.get('/words/:word', routes.word);
//app.get('/', routes.server);
//app.get('/word/awesome', awesome.index);
//app.get('/word/:words', controller.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
