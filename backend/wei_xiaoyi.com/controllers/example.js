const {Base,errors,validator} = require('../../commonControllers')
const { mix } = require('mixwith')

class Example extends errors(validator(Base)){
// class Example extends Errors(Validator(Base)){
   constructor(){
      super()
      //this.post=this.post.bind(this)
      this.router.route('/')
         .all(this.all)
         .get(this.get)
         .post(this.checkPost(),this.post)
         .patch(this.patch)
         .delete(this.delete);
   }
   all(req, res, next){
      next()
   }
   get(req, res, next){
      res.json({data:'hahahha'})
   }
   checkPost(){
      return [
         this.v.sanitize('id').trim(),
         this.v.body('id').custom(value => {
            if(value!=='1234'){
               throw new Error('id不符合要求')
            }
            return true
         }),
         (req,res,next)=>{
            const errors=this.v.validationResult(req)
            if(!errors.isEmpty()){
               return this.error400(res).json({data:errors.mapped(),message:'错误参数'})
            }
            next()
         }
      ]
   }
   post(req,res,next){
      const data=this.v.matchedData(req)
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
