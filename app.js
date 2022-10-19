<<<<<<< HEAD
'use strict';
var debug = require('debug')('my express app');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('home/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('home/error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
=======
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

var http = require('http').createServer(app);
var io = require('socket.io')(http);

var counter = 0;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/home.html');
});

io.on('connection', (socket) => {
  counter ++
  socket.broadcast.emit('update', counter);
  socket.emit('update', counter);

  socket.on('disconnect', () => {
    counter --
    socket.broadcast.emit('update', counter);
  });

  socket.on('updateRequest', () => {
    console.log('updateRequest')
    socket.broadcast.emit('update', counter);
  });
});

app.use(cookieParser())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.use('/', require('./routes/shops'));
app.use('/', require('./routes/guitars'));
app.use('/', require('./routes/phones'));
app.use('/', require('./routes/tvs'));
app.use('/', require('./routes/admin'));

app.get('*', (req, res) => {
  res.statusCode = 404
  res.end()
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

http.listen(port)
>>>>>>> backend
