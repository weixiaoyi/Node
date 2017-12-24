const {mix,Base,Errors} = require(PATH.commonControllers)
const {uploadFile} = require(PATH.commonComponents)
const {defaultSave,localSave} = uploadFile

class File extends mix(Base).with(Errors){
   constructor(){
      super()
      this.router.route('/').all(this.all()).post(localSave(),this.post())
   }
   all(){
      return (req,res,next)=>{
         next()
      }
   }
   post(){
      return (req,res,next)=>{
         this.resok(res,{data:req.files})
      }
   }
}

module.exports = new File().router

