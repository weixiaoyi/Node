const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/userlist', (req, res, next)=>{
   res.json({
      tableData: [{
         date: '2016-05-03',
         name: '王小虎',
         province: '上海',
         city: '普陀区',
         address: '上海市普陀区金沙江路 1518 弄',
         zip: 200333
      }, {
         date: '2016-05-02',
         name: '王小虎',
         province: '上海',
         city: '普陀区',
         address: '上海市普陀区金沙江路 1518 弄',
         zip: 200333
      }, {
         date: '2016-05-04',
         name: '王小虎',
         province: '上海',
         city: '普陀区',
         address: '上海市普陀区金沙江路 1518 弄',
         zip: 200333
      }, {
         date: '2016-05-01',
         name: '王小虎',
         province: '上海',
         city: '普陀区',
         address: '上海市普陀区金沙江路 1518 弄',
         zip: 200333
      },
         {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
         },{
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
         },{
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
         },{
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
         }]
   })
})

module.exports = router
