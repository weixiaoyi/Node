import './index.css'
import axios from 'axios'
axios.interceptors.response.use(function (res) {
  let data=JSON.stringify(res.data)
  const log='<h1 style="font-size: 1rem">'+data+'</h1>'
  //document.append(log)
  return res.data;
}, function (error) {
  return Promise.reject(error);
});


window.addEventListener('message',(e)=>{
  console.log(window.document.title)
  //e.source.postMessage('收到了','*')
},false)
// window.parent.postMessage('显示页加载完毕','*');


document.getElementById('submit').addEventListener('click',(e)=>{
  console.log('submit')
  const files=document.getElementById('file').files;
  console.log(files.length)
  let data=new FormData()
  for(var i=0;i<files.length;i++){
    data.append('myfile',files[i])
  }
  axios({
    url:'/api/upload',
    method:'post',
    headers: {'Content-Type': 'multipart/form-data'},
    data:data
  }).then((res)=>{
    console.log(res)
  })
  e.preventDefault()
})

axios.get('/api/example').then((res)=>{
  console.log(res)
})




