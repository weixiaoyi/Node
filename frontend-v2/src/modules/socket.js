import io from 'socket.io-client'
class Socket{
  constructor(url){
    this.url=url
    this._test()
  }
  _test(){
    console.log('原生Websocket模块导入')
  }
  socketIo(url=this.url){
    this.socket=io(this.url)
    return this.socket
  }
  webSocket(url='ws://wei-xiaoyi.com/socket.io/test'){
    const socket = new WebSocket(url)
    socket.onopen = ()=> {
      console.log('前端socket连接成功')
      socket.send('hello')
      console.log('前端socket发送信息')
    }
    socket.onmessage = () => {
      console.log('前端socket收到信息')
      socket.close()
    }
    socket.onclose = ()=> { console.log('前端socket主动关闭连接') }
    return socket
  }

}

export default Socket
