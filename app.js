const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
