<template>
  <div id="navigator">
    现在是nav页面
  </div>
</template>

<script>
  import axios from 'axios'
  import SockJS from 'sockjs-client'
  import io from 'socket.io-client'
  import {Socket} from '@modules'
  export default {
    name: 'navigator',
    data(){
      return {

      }
    },
    created(){
//      const socket=(new Socket('http://wei-xiaoyi.com')).socketIo()
//      socket.on('connect', function(){
//        console.log('ahha')
//      });
//      socket.on('news', function(data){
//        console.log(data)
//      });
//      socket.on('disconnect', function(){
//        console.log('关闭')
//      });

    const sock =(new Socket('ws://wei-xiaoyi.com/socket.io/test')).webSocket()

    }

  }
</script>

<style>

</style>
