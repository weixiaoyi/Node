const {
   render,
} = require('../controllers')

const router = app =>{
   app.use('/',render)
}

module.exports = router