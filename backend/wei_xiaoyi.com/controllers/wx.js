const express = require('express')
const router = express.Router()

/* GET home page. */
// router.get('/', (req, res, next)=>{
//    res.json({res:'ok'})
// })
router.post('/', (req, res, next)=>{
    console.log( req.body )
    res.json({res:'ok'})
})

module.exports = router
