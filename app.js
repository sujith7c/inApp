//Sample app for the Nodejs

var express = require("express");
var hbs = require("express-handlebars");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var configRouter = require('./routes/settings');

var app = express();
//handlebars.create({'defaultLayout': "main"});
app.set('port',process.env.PORT || 3000);
app.engine('handlebars',hbs(
	{
		defaultLayout:'layout',
	}
));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res) {
	res.render('index', {title:"Test page"});
});

app.use('/configuration', configRouter);

app.use(function(req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('Not Found!!')
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/html');
	res.status(500);
	res.send('Server Error');

});

app.listen(app.get('port'),function() {
	console.log('Listening on port '+ app.get('port') + " Press Ctrl + C to terminate");
});

module.exports = app;