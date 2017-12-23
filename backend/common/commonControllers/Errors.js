const Errors= Super => class extends Super{
   constructor(){
      super()
   }
   resok(res,{message='',data=null,code=200}){
      return res.status(code).json({code:code,message:message,data:data})
   }
   error400(res,message='请求数据错误',data=null){
      return res.status(400).json({code:400,message:message,data:data})
   }
   error401(res,message='认证信息不正确',data=null){
      return res.status(401).json({code:401,message:message,data:data})
   }
   error403(res,message='无相应权限',data=null){
      return res.status(403).json({code:403,message:message,data:data})
   }
   error404(res,message='未找到资源',data=null){
      return res.status(404).json({code:404,message:message,data:data})
   }
   error500(res,message='系统错误',data=null){
      return res.status(500).json({code:500,message:message,data:data})
   }
   errordb(res,message='数据库错误',data=null){
      return res.status(500).json({code:500,message:message,data:data})
   }

}

module.exports = Errors
