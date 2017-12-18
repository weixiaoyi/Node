class Error{
   constructor(){
   }
   error400(res){
      return res.status(400)
   }
   //当API 请求需要用户认证时，如果request中的认证信息不正确，要返回状态码 401，即NOT AUTHORIZED
   error401(res){
      return res.status(401)
   }
}

module.exports = Error
