const express = require('express')

class Base{
   constructor(){
      this.router=express.Router()
   }
}

module.exports = Base
