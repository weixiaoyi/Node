const Base = require('./base.js')
const { check,body, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

class Example extends Base{
   constructor(){
      super()
      this.router.route('/')
         .all(this.all)
         .get(this.get)
         .post(this.checkPost(),this.post)
         .patch(this.patch)
         .delete(this.delete)
   }
   all(req, res, next){
      next()
   }
   get(req, res, next){
      res.json({data:'hahahha'})
   }
   checkPost(){
      return [
         sanitize('id').trim(),
         body('id').custom(value => {
            if(value!=='12345'){
               throw new Error('id不符合要求')
            }
            return true
         }),
         (req,res,next)=>{
            const errors=validationResult(req)
            if(!errors.isEmpty()){
               return this.error400(res).json({data:errors.mapped(),message:'错误参数'})
            }
            next()
         }
      ]
   }
   post(req,res,next){
      const data=matchedData(req)
      res.json({errcode:0,errmessage:'',data:data})
   }
   patch(req,res,next){
      res.send('patch成功')
   }
   delete(req,res,next){
      res.status(204).send('删除成功')
   }
}


module.exports = new Example().router
