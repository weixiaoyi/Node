const multer = require('multer');
const {mkdir,access}=require('./promiseStyle.js')

let upload=null;
let storage=null;
const deststr='wei_xiaoyi.com/public/uploads/'
const diskstr='wei_xiaoyi.com/public/disk'
const filefiled='myfile'

const dest=()=>{
  if(!upload){
    upload= multer({dest: deststr})
  }
  return upload.array(filefiled)
}

const disk=(()=>{
  storage = multer.diskStorage({
    destination (req, file, cb) {
     access(diskstr).catch(()=>mkdir(diskstr)).then(()=>cb(null, diskstr))
    },
    filename(req, file, cb){
      cb(null, Date.now()+'-'+file.originalname)
    }
  })
  return ()=>{
    if(!upload){
      upload = multer({ storage: storage })
    }
    return upload.array(filefiled)
  }
})()

const upLoader={
  dest,
  disk
}

module.exports = upLoader;
