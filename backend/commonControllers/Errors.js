const Errors= superClass => class extends superClass{
  constructor(){
    super()
  }
  error400(res){
    return res.status(400)
  }
  error401(res){
    return res.status(401)
  }
}

module.exports = Errors
