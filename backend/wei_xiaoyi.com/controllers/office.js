const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/userlist', (req, res, next)=>{
   const pagesize=10
   let totalnum
   const currentpage=parseInt(req.query.page)
   let Data=[]
   for(let i=0;i<500;i++){
      Data.push({
         id: i,
         name: '我是'+i,
         phonenumber: '111-111-1111',
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
   const pagesize=10
   let totalnum
   const currentpage=parseInt(req.query.page)
   let Data=[]
   for(let i=0;i<500;i++){
      Data.push({
         id: i,
         name: '我是'+i,
         phonenumber: '111-111-1111',
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

router.get('/coachinfo', (req, res, next)=>{
   res.json({
      basicInfo:{name:req.query.id+'Name',sex:'男',phoneNum:'183-532-68994',cert:421182199209191750,birthday:'1992.09.19'},
      careerAbility:{careertime:'3年零6个月',gyn:'深海花园健身吧',gynaddress:'深海人民大道7号'},
      degreeInfo:{maxscholl:'本科',graduatefrom:'北京大学',major:'体育',graduatetime:'2016.12.13'},

   })
})

module.exports = router
