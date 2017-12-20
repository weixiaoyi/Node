const {mix,Base,Errors,Validator} = require(PATH.commonControllers)

class Example extends mix(Base).with(Errors,Validator){
   constructor(){
      super()
      this.router.route('/')
         .all(this.all.bind(this))
         .get(this.get.bind(this))
         .post(this.checkPost(),this.post.bind(this))
         .patch(this.patch.bind(this))
         .delete(this.delete.bind(this))
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
         (req,res,next)=> {
            const errors = this.v.validationResult(req)
            if(!errors.isEmpty()){
               return this.error400(res).json({data:errors.mapped(),message:'错误参数'})
            }
            next()
         }
      ]
   }
   post(req,res,next){
      const data = this.v.matchedData(req)
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
