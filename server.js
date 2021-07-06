//a social app for rating music venues ...maybe auth not too sure...have it so that photographers can rate aspects of the venue. 

//setup be able to search via your location for venues. so maybe a form that submits either with venue name or just location
//based on the search result return picture of venue and info on it.


//load the packages
const express = require('express')
const app = express()
const logger = require('morgan')
const flash = require('express-flash')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo') //(session)
const methodOverride = require('method-override')
const connectDB = require('./config/database')
require('dotenv').config({ path: './config/.env' })

require('./config/passport')(passport)
connectDB()

// const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(methodOverride("_method"))

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: `${process.env.DB_STRING}` })  //new MongoStore({ mongooseConnection: mongoose.connection}) wasn't working 
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//set routes
const indexRoute = require('./routes/index')
const dashboardRoute = require('./routes/dashboard')
// const venuesRoute = require('.routes/venues')
// const postRoute = require('./routes/post')

//set controllers
app.use('/', indexRoute)
app.use('/dashboard', dashboardRoute)
// app.use('/venues', venuesRoute)
// app.use('/post', postRoute)


app.listen(process.env.PORT, ()=>{
    console.log(`Sentient being named: Robot ${process.env.PORT}!`)
})
