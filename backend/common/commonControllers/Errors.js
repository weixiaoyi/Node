const Errors= Super => class extends Super{
   constructor(){
      super()
   }
   resok(res,payload){
      const args={...{code:200,message:''},...payload}
      return res.status(args.code).json(args)
   }
   error400(res,payload){
      const args={...{code:400,message:'请求数据错误',erros:null},...payload}
      return res.status(args.code).json(args)
   }
   error401(res,payload){
      const args={...{code:401,message:'认证信息不正确'},...payload}
      return res.status(args.code).json(args)
   }
   error403(res,payload){
      const args={...{code:403,message:'无相应权限'},...payload}
      return res.status(args.code).json(args)
   }
   error404(res,payload){
      const args={...{code:404,message:'未找到资源'},...payload}
      return res.status(args.code).json(args)
   }
   error500(res,payload){
      const args={...{code:500,message:'系统错误'},...payload}
      return res.status(args.code).json(args)
   }
   errordb(res,payload){
      const args={...{code:500,message:'数据库错误'},...payload}
      return res.status(args.code).json(args)
   }

}

module.exports = Errors
