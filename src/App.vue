<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <re-footer></re-footer>
  </div>
</template>
  


<script>
import NavBar from './components/navbar/NavBar'
import ReFooter from './components/footer/ReFooter'

export default {
  name: "app",
  components: {
    NavBar,
    ReFooter
  }
};
</script>

<style>
@import url(./assets/css/base.css);
@import url(./assets/css/icon/iconfont.css);
</style>
