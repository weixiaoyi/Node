const Base = require('./base.js')

class Example extends Base{
  constructor(){
    super()
    this.router.route('/').all(this.all).get(this.get)
  }
  all(req, res, next){
    next()
  }
  get(req, res, next){
    res.json({errcode:0,errmessage:'',data:'hahahha'})
  }
}


module.exports = new Example().router
