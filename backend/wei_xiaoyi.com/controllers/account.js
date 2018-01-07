const {mix,Base,Errors,Validator} = require(PATH.commonControllers)
const {Auth,Permission} = require(PATH.commonMiddlewares)
class Account extends mix(Base).with(Errors,Validator){
   constructor(){
      super()
      this.router.route('/login')
         .get(this.get())
         .all(this.all())
         .post(Auth.auth(),Permission.allow(),this.checkPost(),this.post())
         .patch(this.patch()).delete(this.delete())
   }
   all(){
      return (req,res,next)=>{
         next()
      }
   }
   get(){
      return (req,res,next)=>{
         const token=Auth.tokenSign({
            name:req.query.name
         })
         this.resok(res,{token:token})
      }
   }
   checkPost(){
      return [
         this.v.sanitize('token').trim(),
         this.v.body('token').custom(value => {
            if(value=='weixiaoyi'){
               this.v.record('token不符合要求')
            }
            return true
         }),
         (req,res,next)=> {
            const errors = this.v.validationResult(req)
            if(!errors.isEmpty()){
               return this.error400(res,{erros:errors.mapped()})
            }
            next()
         }
      ]
   }
   post(){
      return (req,res,next)=>{
         const data = this.v.matchedData(req)
         this.resok(res,data)
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

module.exports = new Account().router
