const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/userlist', (req, res, next)=>{
   const pagesize=10;
   let totalnum;
   const currentpage=parseInt(req.query.page)
   let Data=[]
   for(let i=0;i<500;i++){
      Data.push({
         id: i,
         name: '我是'+i,
         phonenumber: '111-111-11111',
         status: '待审核',
         timeregister: '2017.8.13',
         timeactive: '2017.9.13'
      })
   }
   const tableData=Data.slice((currentpage-1)*pagesize,currentpage*pagesize)
   totalnum=Data.length
   res.json({
      totalnum,pagesize,currentpage,tableData
   })
})

router.get('/coachlist', (req, res, next)=>{
   const pagesize=10;
   let totalnum;
   const currentpage=parseInt(req.query.page)
   let Data=[]
   for(let i=0;i<500;i++){
      Data.push({
         id: i,
         name: '我是'+i,
         phonenumber: '111-111-11111',
         status: '待审核',
         timeregister: '2017.8.13',
         timeactive: '2017.9.13'
      })
   }
   const tableData=Data.slice((currentpage-1)*pagesize,currentpage*pagesize)
   totalnum=Data.length
   res.json({
      totalnum,pagesize,currentpage,tableData
   })
})

module.exports = router
