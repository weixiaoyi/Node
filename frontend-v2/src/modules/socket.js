import io from 'socket.io-client'
class Message{
  constructor(url){
    this.url=url
    this._test()
  }
  socketIo(url=this.url){
    this.socket=io(this.url)
    return this.socket
  }
  webSocket(url='ws://wei-xiaoyi.com/socket.io/test'){
    const socket = new WebSocket(url)
    socket.onopen = ()=> {
      console.log('连接上')
      socket.send('前端发送消息')
    }
    socket.onmessage = e => {
      console.log(e.data)
      socket.close()
    }
    socket.onclose = ()=> { console.log('前端主动关闭连接') }
    return socket
  }
  _test(){
    console.log('io模块导入')
  }
}

export default Message
