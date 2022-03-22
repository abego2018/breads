//Dependencies
const express = require('express')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about breads!')
})

//Breads
const breadsController = require ('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

//Listen
app.listen(PORT, () =>{
    console.log('nomming at port', PORT)
})

