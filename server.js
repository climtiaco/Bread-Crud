const express = require('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//Dependencies
const methodOverride = require('method-override')

//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about breads!')
})

//Breads
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

//Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

