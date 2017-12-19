const { check,body, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')

const Validator = Super => class extends Super{
   constructor(){
      super()
      this.v={check, body, validationResult, matchedData, sanitize}
   }
}


module.exports = Validator
