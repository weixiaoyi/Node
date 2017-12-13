// alert('w------------------------')
const frame=document.getElementById('myframe').contentWindow; //window.frames[0]
frame.postMessage('我是数据','http://main.wei-xiaoyi.com')

// window.addEventListener('message',(e)=>{
//   console.log(window.document.title)
//   console.log(e.data)
//   // e.source.postMessage('收到了','*')
// },false)
