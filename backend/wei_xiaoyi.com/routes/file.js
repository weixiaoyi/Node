const express = require('express');
const router = express.Router();
const {disk}=require('../../commonComponent/uploadFile.js')

router.post('/', disk(),(req,res,next)=>{
  res.send(req.files )
});

module.exports = router;
