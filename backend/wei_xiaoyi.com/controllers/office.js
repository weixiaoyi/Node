const express = require('express')
const router = express.Router()


function delay(res,time=500){
   const primary=res.json.bind(res)
   res.json=function(obj){
      setTimeout(()=>{
         primary(obj)
      },time)
   }
}
router.get('/users',(req,res,next)=>{
   res.json( {
      total: 3,
      current: 1,
      list: [
         {
            id: 1,
            name: '张三',
            age: 23,
            address: '成都',
         },
         {
            id: 2,
            name: '李四',
            age: 24,
            address: '杭州',
         },
         {
            id: 3,
            name: '王五',
            age: 25,
            address: '上海',
         },
      ],
   })
})

router.post('/login',(req,res,next)=>{
   delay(res,1000)
   if(req.body.userName&&req.body.password){
      res.json({
         errCode:0,
         errMsg:null,
         timestamp:'1234545667',
         data:{
            bossToken:"89252012ccd04aa1828ebd0396666e63",
            bossUser:"chujunfei"
         }
      })
   }
})

router.get('/info',(req,res,next)=>{
   delay(res)
   res.json({
      errcode:0,
      errmsg:null,
      timestamp:'1234545667',
      data:{
         name:'weixiaoyi'
      }
   })
})


/* GET home page. */
router.get('/getAllUsersInfo', (req, res, next)=>{
   delay(res)
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
         errmsg:null,
         timestamp:'1234545667',
         data:{
            totalNum,pageSize,currentPage,tableData
         }
      }
   )
})

router.get('/coaches/info/:page', (req, res, next)=>{
   delay(res)
   const date=Date.now()
   const pagesize=20
   let totalnum
   const currentpage=parseInt(req.params.page)
   let Data=[]

   for(let i=0;i<500;i++){
      const random=Math.floor(Math.random()*4)
      Data.push({
         id: 1000000001005439,
         name: '我是'+i,
         phoneNum: '111-111-1111',
         status: ['UnComplete',"Completed","NotPassed","HasChecked"][random],
         registerTime: date,
         updateTime: date,
      })
   }
   const tableData=Data.slice((currentpage-1)*pagesize,currentpage*pagesize)
   totalnum=Data.length
   res.json({
         errCode:0,
         errMsg:null,
         timestamp:'1234545667',
         data:{
            count:500, //列表总个数
            pageSize:20, //分页，单页数据个数
            currentPage:1, //当前查询的页数也要返回
            resultSet:tableData
         }
      }
   )
})

router.get('/coachinfo', (req, res, next)=>{
   res.json({
      basicInfo:{name:req.query.id+'Name',sex:'男',phoneNum:'183-532-68994',cert:421182199209191750,birthday:'1992.09.19'},
      careerAbility:{careertime:'3年零6个月',gyn:'深海花园健身吧',gynaddress:'深海人民大道7号'},
      degreeInfo:{maxscholl:'本科',graduatefrom:'北京大学',major:'体育',graduatetime:'2016.12.13'},
   })
})

router.get('/coachinfo/:id', (req, res, next)=>{
   res.json({
      errcode:0,
      errmsg:null,
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

router.get('/coach/:id/:info', (req, res, next)=>{
   delay(res)
   const info=req.params.info
   const basic={
      errcode:0,
      errmsg:null,
      timestamp:1234545667
   }
   const date=Date.now()
   switch(info){
      case 'basicInfo':{
         res.json({
            ...basic,
            ...{data:{
               status:'Completed',//初始是未完成,用户跟新后是completed,审核通过hasChecked,未通过notPassed
               info:[
                  {name:'王小虎',status:true},//单条初始状态为true,审核不通过该值为false
                  {sex:0,status:true},
                  {birthday:date,status:true},
                  {cardNum:"421182199209191750",status:true},
                  {phoneNum:'13286667160',status:true},
                  {cards:[
                     {img0:'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true},
                     {img1:'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true}
                  ]}]
            }
            }})
         break
      }
      case 'degreeInfo':{
         res.json({
            ...basic,
            ...{data:{
               status:'Completed',
               info:[
                  {highestDegree:'本科',status:true},
                  {graduatedSchool:'北京大学',status:true},
                  {profession:'体育',status:true},
                  {graduatedDate:date,status:true},
                  {graduatedCertifications:[
                     {'img0':'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true},
                     {'img1':'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true},
                     {'img2':'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true}
                  ]}
               ]
            }
            }})
         break
      }
      case 'careerInfo':{
         res.json({
            ...basic,
            ...{data:{
               status:'Completed',
               info:[
                  {workDate:'7',status:true},
                  {gymnasiumName:'深海花园健身吧',status:true},
                  {gymnasiumAddress:'深海人民大道7号深海人民大道7号',status:true},
                  {workProve :[
                     {'img0':'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true},
                     {'img1':'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true}
                  ]},
                  {careerCertification:[
                     {'img0':'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true},
                     {'img1':'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true},
                     {'img2':'http://p0donywy2.bkt.clouddn.com/static/image/me.png',status:true}
                  ]}
               ]
            }
            }})
         break
      }
   }

})

router.put('/coach/validation/:id/info', (req, res, next)=>{
   delay(res,2000)
   res.json({})
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
