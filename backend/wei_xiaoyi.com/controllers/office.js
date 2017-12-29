const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/getAllUsersInfo', (req, res, next)=>{
   const pageSize=20
   let totalNum
   const currentPage=parseInt(req.query.page)
   let Data=[]
   for(let i=0;i<500;i++){
      Data.push({
         id: i,
         name: '我是'+i,
         phoneNum: '111-111-1111',
         timeRegister: '2017.8.13',
         timeActive: '2017.9.13'
      })
   }
   const tableData=Data.slice((currentPage-1)*pageSize,currentPage*pageSize)
   totalNum=Data.length
   res.json({
         errcode:0,
         errmsg:'',
         timestamp:'1234545667',
         data:{
            totalNum,pageSize,currentPage,tableData
         }
      }
   )
})

router.get('/getAllCoachesInfo', (req, res, next)=>{
   const pagesize=20
   let totalnum
   const currentpage=parseInt(req.query.page)
   let Data=[]

   for(let i=0;i<500;i++){
      const random=Math.floor(Math.random()*4)
      Data.push({
         id: i,
         name: '我是'+i,
         phoneNum: '111-111-1111',
         status: ['待审核',"已核实","未通过","未完成"][random],
         timeRegister: '2017.8.13',
         timeActive: '2017.9.13'
      })
   }
   const tableData=Data.slice((currentpage-1)*pagesize,currentpage*pagesize)
   totalnum=Data.length
   res.json({
         errcode:0,
         errmsg:'',
         timestamp:'1234545667',
         data:{
            totalNum:500, //列表总个数
            pageSize:20, //分页，单页数据个数
            currentPage:1, //当前查询的页数也要返回
            tableData:tableData
         }
      }
   )
})

// router.get('/coachinfo', (req, res, next)=>{
//    res.json({
//       basicInfo:{name:req.query.id+'Name',sex:'男',phoneNum:'183-532-68994',cert:421182199209191750,birthday:'1992.09.19'},
//       careerAbility:{careertime:'3年零6个月',gyn:'深海花园健身吧',gynaddress:'深海人民大道7号'},
//       degreeInfo:{maxscholl:'本科',graduatefrom:'北京大学',major:'体育',graduatetime:'2016.12.13'},
//    })
// })

router.get('/coachinfo/:id', (req, res, next)=>{
   res.json({
      errcode:0,
      errmsg:'',
      timestamp:'1234545667',
      data:{
         basicInfo: {
            status:'unComplete/completed/hasChecked/notPassed',//初始是未完成,用户跟新后是completed,审核通过hasChecked,未通过notPassed
            info:[
               {name:'王小虎',status:true},//单条初始状态为true,审核不通过该值为false
               {sex:'男',status:true},
               {phoneNum:'183-532-68994',status:true},
               {card:421182199209191750,status:true},
               {birthDay:'1992.09.19',status:true},
               {cardImg:[
                  {front:'http://qiniuyun/22780955/cert/front.png',status:true},
                  {back:'http://qiniuyun/22780955/cert/back.png',status:true}
               ]}]
         },
         degreeInfo:{
            status:'unComplete/completed/hasChecked/notPassed',
            info:[
               {highestDegree:'本科',status:true},
               {graduatedUniversity:'北京大学',status:true},
               {major:'体育',status:true},
               {graduatedTime:'2016.12.13',status:true},
               {certificateImg:{
                  'name125566767':'http://qiniuyun/22780955/cert/name125566767.png',status:true,
                  'name346576889':'http://qiniuyun/22780955/cert/name346576889.png',status:true
               }
               }
            ]
         },
         careerAbility:{
            status:'unComplete/completed/hasChecked/notPassed',
            info:[
               {jobTime:'3年零6个月',status:true},
               {gym:'深海花园健身吧',status:true},
               {gymAddress:'深海人民大道7号',status:true},
               {jobCertificateImg :[
                  {'name146667777':'http://qiniuyun/22780955/cert/name146667777.png',status:true},
                  {'name126677786767':'http://qiniuyun/22780955/cert/name126677786767.png',status:true}
               ]},
               {qualiCertificateImg:[
                  {'name1433447777':'http://qiniuyun/22780955/cert/name1433447777.png',status:true},
                  {'name66777767777':'http://qiniuyun/22780955/cert/name66777767777.png',status:true}
               ]}
            ]
         }
      }
   })
})

router.get('/coachinfo/:id?info=basicInfo', (req, res, next)=>{
   res.json({
      errcode:0,
      errmsg:'',
      timestamp:'1234545667',
      data:{
         status:'unComplete/completed/hasChecked/notPassed',//初始是未完成,用户跟新后是completed,审核通过hasChecked,未通过notPassed
         info:[
            {name:'王小虎',status:true},//单条初始状态为true,审核不通过该值为false
            {sex:'男',status:true},
            {phoneNum:'183-532-68994',status:true},
            {card:421182199209191750,status:true},
            {birthDay:'1992.09.19',status:true},
            {cardImg:[
               {front:'http://qiniuyun/22780955/cert/front.png',status:true},
               {back:'http://qiniuyun/22780955/cert/back.png',status:true}
            ]}]
      }
   })
})

router.post('/updateValidationStatus/:id', (req, res, next)=>{
   res.json({
      basicInfo: {
         status:'notPassed',
         info:[
            {name:'王小虎',status:false},//单条初始状态为true,审核不通过该值为false
            {sex:'男',status:true},
            {phoneNum:'183-532-68994',status:true},
            {card:421182199209191750,status:false},
            {birthDay:'1992.09.19',status:true},
            {cardImg:[
               {front:'http://qiniuyun/22780955/cert/front.png',status:true},
               {back:'http://qiniuyun/22780955/cert/back.png',status:true}
            ]}]
      },
   })
})

router.post('/user/login', (req, res, next)=>{
   res.json({
      kaptcha:1234,//验证码
      name:'wangxiaohu',
      password:'0F5607308AB73CFEA24CE51B9CFCF302',//加密后的密码
      timestamp:'1514526492000'
   })
})

module.exports = router
