// alert('w------------------------')
// const frame=window.frames[0]//document.getElementById('myframe').contentWindow
// frame.postMessage('我是数据','*')

window.addEventListener('message',(e)=>{
  console.log(window.document.title)
  console.log(e.data)
  // e.source.postMessage('收到了','*')
},false)
