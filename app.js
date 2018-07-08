/*
*App main file
*/

var express = require("express");
var hbs = require("express-handlebars");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
//Included the helmet middleware
var helmet = require('helmet');

var configRouter = require('./routes/settings');
var userRouter = require('./routes/user.js');

var app = express();
app.use(helmet())

//handlebars.create({'defaultLayout': "main"});
app.set('port',process.env.PORT || 3000);
app.engine('handlebars',hbs(
	{
		defaultLayout:'layout',
	}
));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function(req, res) {
	res.render('index', {title:"InApp:Home"});
});

//define all mount here
app.use('/config', configRouter);
app.use('/user', userRouter);

/*app.use(function(req, res, next) {
	//res.status(404);
	res.render('view-404',{title:'NotFound'});
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/html');
	res.status(500);
	res.send('Server Error');

});
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
  });

  
// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
  
	// render the error page
	res.status(err.status || 500);
	res.render('view-404');
  });
  

/*app.listen(app.get('port'),function() {
	console.log('Listening on port '+ app.get('port') + " Press Ctrl + C to terminate");
});
*/
module.exports = app;