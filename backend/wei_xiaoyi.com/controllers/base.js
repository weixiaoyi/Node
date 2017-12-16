const express = require('express')
const router = express.Router()

class Base{
  constructor(){
    this.router=router
  }
}

module.exports = Base
