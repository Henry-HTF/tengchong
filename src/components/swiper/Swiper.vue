<template>
  <div class="swiper">
    <el-carousel height="235px" >
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="'http://tczpwht.jiujuer.com/file' + item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  
  export default {
    name: 'Swiper',
    props: {
      banners: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .el-carousel-item {
    margin: 0 auto;
  }
</style>