const express = require('express');
const router = express.Router();

router.route('/')
  .all((req, res, next)=>{
    console.log('ahhah')
    next();
  })
  .get((req, res, next)=>{
    res.json({errcode:0,errmessage:'',data:'hahahha'})
  });

module.exports = router;
