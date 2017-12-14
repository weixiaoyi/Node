const router=(app)=>{
  app.use('/',require('./render.js'));
  app.use('/api/example/',require('./example.js'));
  app.use('/api/file/',require('./file.js'));
}

module.exports = router;