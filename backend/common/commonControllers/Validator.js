const { check,body, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

const Validator = Super => class extends Super{
   constructor(){
      super()
      this.v={check, body, validationResult, matchedData, sanitize}
      this.v.record=(errmessage)=>{throw new Error(errmessage)}
   }
}


module.exports = Validator
