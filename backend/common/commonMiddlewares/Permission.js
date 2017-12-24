const mongoose = require('mongoose')

class Permission{
   constructor(){}
   allow(list=[]){
      return (req,res,next)=>{
         console.log(req.user)
         next()
      }
   }

}

module.exports = new Permission()
