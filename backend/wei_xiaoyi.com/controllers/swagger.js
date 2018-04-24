const express = require('express')
const router = express.Router()
const pathToSwaggerUi = require( 'swagger-ui-dist' ).absolutePath()

router.use(express.static( pathToSwaggerUi ))
router.all('*.json', (req, res, next)=>{
    res.json({res:'ok'})
})

module.exports = router
