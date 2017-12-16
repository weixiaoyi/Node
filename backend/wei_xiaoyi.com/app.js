const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const methodOverride = require('method-override')
// const cors=require('cors')
// const compression = require('compression')
const mongoose=require('mongoose')
const session=require('express-session')
const passport=require('passport')
const mongoStore = require('connect-mongo')(session)
const router = require('./routes')
const app = express()
app.enable('trust proxy')

mongoose.connect('mongodb://localhost/Node',{useMongoClient:true})
mongoose.Promise = global.Promise

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// app.use(cors({
//   origin:'*',
//   credentials:true,
//   methods:['PUT', 'GET', 'POST', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   exposedHeaders:['auth']
// }))
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(helmet())
// app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  secret: 'weixiaoyi',
  resave: false,
  saveUninitialized: true,
  store: new mongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 1*15
  })
}))

app.use(express.static(path.join(__dirname, 'public')))
router(app)

// catch 404 and forward to error handler
app.use((req, res, next)=>{
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})
// error handler
app.use((err, req, res, next)=>{
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
