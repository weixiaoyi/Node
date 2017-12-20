const {
  render,
  example,
  file,
} = require('../controllers')

const router = app =>{
  app.use('/',render)
  app.use('/api/example/',example)
  app.use('/api/file/',file)
}

module.exports = router