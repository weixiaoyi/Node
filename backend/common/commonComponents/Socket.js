class Socket{
   constructor(server){
      this.server=server
      this._test()
   }
   _test(){
      console.log('Socket模块引入')
   }
   webSocket(server=this.server){
      const WebSocket = require('ws')
      const sockets = new WebSocket.Server({ server })
      sockets.on('connection',(socket)=>{
         console.log('原生Websocket连接成功')
         socket.on('message',message =>{
            console.log('socket接收到消息')
            socket.send(message)
            console.log('socket发送消息')
         })
         socket.on('close',() =>{
            console.log('socket关闭连接')
         })
      })
      return sockets
   }
}

module.exports = Socket
