<template>
  <div id="home">
    <div class="header">公共导航头</div>
    <div>
      <router-link :to="{name:'nav'}">nav</router-link>
    </div>
    <input type="file" @change="change">
    <button @click="send">send</button>
    <img :src="src"/>
    {{ text }}
    <iframe id="viewer" :src="pdfsrc" width="300" height="300"/>
    <video :src="videosrc" controls>videffffffffffff</video>
    <router-view></router-view>
  </div>
</template>

<script>
  import request from '@utils/request'

  export default {
    name: 'home',
    data: () => {
      return {
        src: null,
        pdfsrc: null,
        text: null,
        videosrc: null,
        filelist: []
      }
    },
    methods: {
      change(e) {
        const files = e.target.files
        this.filelist = files
        if ( !files.length ) return
        const reader = new FileReader()
        let type,dataurl
        if ( /image/.test( files[0].type ) ) {
          reader.readAsDataURL( files[0] )
          type = 'image'
        } else if ( /text/.test( files[0].type ) ) {
          reader.readAsText( files[0] )
          type = 'text'
        } else if ( /pdf/.test( files[0].type ) ) {
          type = 'pdf'
          dataurl=window.URL.createObjectURL( files[0] )
          this.pdfsrc = dataurl
        }else if ( /video/.test( files[0].type ) ) {
          type = 'video'
          dataurl=window.URL.createObjectURL( files[0] )
          this.videosrc = dataurl
        }

        reader.onload = () => {
          const result = reader.result
          if ( type == 'text' ) {
            this.text = result
          } else if ( type == 'image' ) {
            this.src = result
          }
          window.URL.revokeObjectURL(dataurl);
        }
      },
      send() {
        if ( !this.filelist.length ) return
        console.log( this.filelist )
      }
    }
  }
</script>

<style>
  .header {
    background-color: red;
  }
</style>
