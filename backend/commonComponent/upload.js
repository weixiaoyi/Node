const multer = require('multer');
const fs=require('fs')
let upload=null;
let storage=null;
const deststr='wei_xiaoyi.com/public/uploads/'
const diskstr='wei_xiaoyi.com/public/disk'

const dest=()=>{
  if(!upload){
    upload= multer({dest: deststr})
  }
  return upload.array('myfile')
}

const disk=(()=>{
  storage = multer.diskStorage({
    async destination (req, file, cb) {
      await fs.mkdir(diskstr)
      cb(null, diskstr)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'-'+file.originalname)
    }
  })
  return ()=>{
    if(!upload){
      upload = multer({ storage: storage })
    }
    return upload.array('myfile')
  }
})()

const upLoader={
  dest,
  disk
}

module.exports = upLoader;
