const users=require('./users.js')

function router(app){
  app.use('/',users);
}

module.exports = router;