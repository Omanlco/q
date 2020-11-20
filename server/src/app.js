const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const layout = require('express-layout')
const {sequelize} = require('./models')

dotenv.config()
global.__basedir = __dirname;

const routes = require('./routes')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine',  'ejs')

const middlewares = [
    layout(),
    express.static(path.join(__dirname, 'public')),
    express.urlencoded({extended: true}),
    express.json()
]


app.use(cors())
app.use(middlewares)
app.use('/', routes)


sequelize.sync()
.then(()=>{
    app.listen(3000)
    console.log('server started on port 3000')
})
