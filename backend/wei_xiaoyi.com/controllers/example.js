const {mix,Base,Errors} = require(PATH.commonControllers)
class Example extends mix(Base).with(Errors){
   constructor(){
      super()
      this.router.route('/')
         .get(this.get())
         .all(this.all())
         .post(this.post())
         .patch(this.patch()).delete(this.delete())
   }
   all(){
      return (req,res,next)=>{
         next()
      }
   }
   get(){
      return (req,res,next)=>{
         this.resok(res,{message:'get成功'})
      }
   }
   post(){
      return (req,res,next)=>{
         this.resok(res,{message:'post成功'})
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
