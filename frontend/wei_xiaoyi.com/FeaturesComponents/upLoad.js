
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