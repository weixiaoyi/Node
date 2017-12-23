const {mix,Base,Errors,Validator} = require(PATH.commonControllers)
const {auth} = require(PATH.commonMiddlewares)
class Example extends mix(Base).with(Errors,Validator){
   constructor(){
      super()
      this.router.route('/').all(this.all())
         .get(this.get()).post(this.checkPost(),this.post())
         .patch(this.patch()).delete(this.delete())
   }
   all(){
      return (req,res,next)=>{
         next()
      }
   }
   get(){
      return (req,res,next)=>{
         const token=auth.tokenSign({
            name:req.query.name
         })
         this.resok(res,{data:{token:token}})
      }
   }
   checkPost(){
      return [
         this.v.sanitize('token').trim(),
         this.v.body('token').custom(value => {
            if(value=='weixiaoyi'){
               throw new Error('token不符合要求')
            }
            return true
         }),
         (req,res,next)=> {
            const errors = this.v.validationResult(req)
            if(!errors.isEmpty()){
               return this.error400(res,'参数错误',errors.mapped())
            }
            next()
         }
      ]
   }
   post(){
      return (req,res,next)=>{
         const data = this.v.matchedData(req)
         this.resok(res,{data:data})
      }
   }
   patch(){
      return (req,res,next)=>{
         this.resok(res,{message:'patch成功'})
      }
   }
   delete(){
      return (req,res,next)=>{
         this.resok(res,{message:'删除成功'})
      }
   }
}

module.exports = new Example().router
