const { check,body, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

const Validator = superClass => class extends superClass{
   constructor(){
      super()
      this.v={check, body, validationResult, matchedData, sanitize}
      this.me=this.me.bind(this)
      this.me()
   }
   me(){
      console.log(this)
   }
}


module.exports = Validator
