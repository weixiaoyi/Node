<template>
  <div id="home">
    <div class="header">公共导航头</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.header{
  background-color: red;
}
</style>
