const util = require('util')
const fs=require('fs')
let { mkdir , access }=fs
mkdir=util.promisify(mkdir)
access=util.promisify(access)
// const promisefy= obj=>{
//   for(let i in obj){
//     obj.i= util.promisify(obj.i)
//   }
// }
const promiseStyle = {
  mkdir,
  access
}
// promisefy(promiseStyles)

module.exports =promiseStyle
