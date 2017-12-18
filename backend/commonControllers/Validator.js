const express = require('express')
const { check,body, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

class Validator{
   constructor(){
      this.v={check, body, validationResult, matchedData, sanitize}
   }
}

class Base{
   constructor(){
      this.router=express.Router()
   }
   //任何时候，如果请求有问题，如校验请求数据时发现错误，要返回状态码 400，即BAD REQUEST
   error400(res){
      return res.status(400)
   }
   //当API 请求需要用户认证时，如果request中的认证信息不正确，要返回状态码 401，即NOT AUTHORIZED
   error401(res){
      return res.status(401)
   }
}

module.exports = Base
