const Base = require('./base.js')
const uploadFile=require('../../commonComponent/uploadFile.js')
const {defaultSave,localSave}=new uploadFile()

class File extends Base{
  constructor(){
    super()
    this.router.route('/').all(this.all).post(localSave(),this.post)
  }
  all(req, res, next){
    next()
  }
  post(req, res, next){
    res.send(req.files )
  }
}

module.exports = new File().router

