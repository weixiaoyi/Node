const users=require('./users.js')
const apiPart1=require('./api-part1.js')

const router=(app)=>{
  app.use('/',users);
  app.use('/api',apiPart1);
}

module.exports = router;