import './index.css'
import axios from 'axios'
axios.interceptors.response.use(function (res) {
   let data=JSON.stringify(res.data)
   const log='<h1 style="font-size: 1rem">'+data+'</h1>'
   //document.append(log)
   //return res.data
   return res.data

}, function (error) {
   return Promise.reject(error)
})


document.getElementById('submit').addEventListener('click',(e)=>{
   const files=document.getElementById('file').files;
   let data=new FormData()
   for(var i=0;i<files.length;i++){
      data.append('myfile',files[i])
   }
   axios({
      url:'/api/file',
      method:'post',
      headers: {'Content-Type': 'multipart/form-data'},
      data:data
   }).then((res)=>{
      console.log(res)
   })
   e.preventDefault()
})
axios.get('/api/office/userlist').then((res)=>{console.log('ahahah')})
axios.get('/api/example',{
   params:{
      name:'weixiaoyi'
   }
}).then(
   (v)=>{
      return axios.post('/api/example', {
         token:v.token
      })
   }
).then(axios.patch('/api/example')).then(axios.delete('/api/example')).then()
// axios.post('/api/example', {
//    id:' 1234'
// }).then((res)=>{
//    console.log(res)
// })
// axios.patch('/api/example').then(res=> console.log(res))
// axios.delete('/api/example').then(res=> console.log(res))




