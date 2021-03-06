const express = require( 'express' )
const path = require( 'path' )
const favicon = require( 'serve-favicon' )
const logger = require( 'morgan' )
const cookieParser = require( 'cookie-parser' )
const bodyParser = require( 'body-parser' )
const helmet = require( 'helmet' )
const methodOverride = require( 'method-override' )
const passport = require( 'passport' )
const router = require( './routes' )
const app = express()
app.enable( 'trust proxy' )

// view engine setup
app.set( 'views', path.join( __dirname, 'views' ) )
app.set( 'view engine', 'jade' )

app.use( logger( 'dev' ) )
app.use( helmet() )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( cookieParser() )
app.use( methodOverride( function (req, res) {
    if ( req.body && typeof req.body === 'object' && '_method' in req.body ) {
        const method = req.body._method
        delete req.body._method
        return method
    }
} ) )

app.use( express.static( path.join( __dirname, 'public' ) ) )
router( app )

// catch 404 and forward to error handler
app.use( (req, res, next) => {
    const err = new Error( 'Not Found' )
    err.status = 404
    next( err )
} )
// error handler
app.use( (err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get( 'env' ) === 'development' ? err : {}
    // render the error page
    res.status( err.status || 500 )
    res.render( 'error' )
} )

module.exports = app
