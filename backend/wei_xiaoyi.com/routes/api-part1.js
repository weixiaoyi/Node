const express = require('express');
const router = express.Router();
const {disk}=require('../../commonComponent/uploadFile.js')

router.post('/upload', disk(),(req,res,next)=>{
  res.send(req.files )
});

router.route('/example')
  .all((req, res, next)=>{
    console.log('ahhah')
    next()
  })
  .get((req, res, next)=>{
    res.json({errcode:0,errmessage:'',data:'hahahha'})
  });

module.exports = router;
