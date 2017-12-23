const mongoose = require('mongoose')
const schema=new mongoose.Schema({
   authId: String,
   role: String,
   name: String,
   date: { type: Date, default: Date.now }
})
const User=mongoose.model('User', schema)

module.exports = User
