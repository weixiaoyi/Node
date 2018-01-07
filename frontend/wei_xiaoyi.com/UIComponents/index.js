import axios from 'axios'
axios.interceptors.response.use(function (res) {
   let data=JSON.stringify(res.data)
   const log='<h1 style="font-size: 1rem">'+data+'</h1>'
   return res.data

}, function (error) {
   return Promise.reject(error)
})


document.getElementById('submit').addEventListener('click',(e)=>{
   const files=document.getElementById('file').files
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

// axios.get('/api/example',{
//    params:{
//       name:'weixiaoyi'
//    }
// }).then(
//    (v)=>{
//       return axios.post('/api/example', {
//          token:v.token
//       })
//    }
// ).then(axios.patch('/api/example')).then(axios.delete('/api/example')).then()





