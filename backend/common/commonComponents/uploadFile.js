const multer = require('multer')
const { mkdir,access } = require(PATH.commonUtils).promiseStyle

class uploadFile{
   constructor(props = {
      fieldname:'myfile',//文件域名，这个在前端定义，需要根据前端传入改变
      defaultstr:'wei_xiaoyi.com/public/defaultuploads',//插件默认存储，无法改自定义文件名
      localstr:'wei_xiaoyi.com/public/localuploads'//自定义存储过程
   }) {
      this.fieldname = props.fieldname
      this.defaultstr = props.defaultstr
      this.localstr = props.localstr
      //函数绑定，防止外界应用方法，this找不到
      this.defaultSave=this.defaultSave.bind(this)
      this.localSave=this.localSave.bind(this)
   }
   defaultSave(fieldname = this.fieldname,dest = this.defaultstr){
      if(!this.upload){
         this.upload = multer({dest: dest})
      }
      return this.upload.array(fieldname)
   }
   localSave(fieldname = this.fieldname,dest = this.localstr){
      if(!this.upload){
         this.upload = multer({ storage: multer.diskStorage({
            destination (req, file, cb) {
               access(dest).catch(()=> mkdir(dest)).then(()=> cb(null, dest))
            },
            filename(req, file, cb){
               cb(null, Date.now()+'-'+file.originalname)
            }
         })})
      }
      return this.upload.array(fieldname)
   }
}

module.exports = uploadFile
