<template>
  <div id="r">
    home
    <div>
      <router-link :to="{name:'nav'}">nav</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
