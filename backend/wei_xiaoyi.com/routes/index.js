const {
   render,
   example,
   file,
   office
} = require('../controllers')

const router = app =>{
   app.use('/',render)
   app.use('/api/example/',example)
   app.use('/api/file/',file)
   app.use('/user/',office)
}

module.exports = router