const {
    render,
    wx,
    swagger
} = require( '../controllers' )

const router = app => {
    app.use( '/', render );
    app.use( '/wx', wx )
    app.use( '/swagger', swagger )
}

module.exports = router