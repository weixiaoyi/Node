const mongoose = require('mongoose')
// const session = require('express-session')
// const mongoStore = require('connect-mongo')(session)
const jwt=require('jsonwebtoken')
const {User} = require(PATH.models)
const {mix,Errors} = require(PATH.commonControllers)
const config = require(PATH.commonConfig)

mongoose.connect(config.mongodbUrl,{useMongoClient:true})
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error',()=>{console.log( '数据库错误')})
db.once('open', function() {
   console.log('数据库已连接')
})

class Auth extends mix(Object).with(Errors){
   constructor(){
      super()
   }
   auth(){
      return this.token()
   }
   token(){
      return (req, res, next)=>{
         const token=req.headers.token||req.query.token||req.body.token
         if(!token) this.error401(res)
         jwt.verify(token,config.secret, (err, decoded)=>{
            if(err) this.error401(res)
            User.findOne({name:decoded.name})
               .then((user)=>{
                  if(!user)
                     this.error404(res)
                  else{
                     req.user=user
                     next()
                  }
               })
               .then(null,(err)=>{
                  this.errordb(res)
               })
         })
      }
   }
   tokenSign(payload){
      return jwt.sign(payload,config.secret,{ expiresIn: '1h' })
   }
   // session(){
   //    return session({
   //       secret: config.secret,
   //       resave: false,
   //       saveUninitialized: true,
   //       store: new mongoStore({
   //          mongooseConnection: mongoose.connection,
   //          ttl: 1*15
   //       })
   //    })
   // }
}


module.exports = new Auth()
