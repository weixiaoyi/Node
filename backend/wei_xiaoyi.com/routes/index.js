const {
    render,
    wx
} = require( '../controllers' )

const router = app => {
    app.use( '/', render );
    app.use( '/wx', wx )
}

module.exports = router