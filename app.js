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