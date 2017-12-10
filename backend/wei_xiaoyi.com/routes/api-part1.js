const express = require('express');
const router = express.Router();
const multer = require('multer');

/* GET home page. */
router.post('/upload', multer().single('myfile'),function(req,res,next){
      res.send(req.file )
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
