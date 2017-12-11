const express = require('express');
const router = express.Router();
const upload=require('../../commonComponent/upload.js')

router.post('/upload', upload.disk(),function(req,res,next){
  res.send(req.files )
  //res.json({errcode:0,errmessage:'上传文件'})
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
