<template>
  <div class="new-position">
    <div class="title">
      <div class="title-left">最新岗位</div>
      <div class="content" v-for="item in 6" :key="item">
        <span>{{item}}</span>
        <span>--</span>
        <span>--</span>
        <span>--</span>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'NewPosition',
    
  }
</script>

<style scoped>
.new-position {
  width: 820px;
  height: 410px;
}

.title {
  background-color: #DCE6F3;
  height: 35px;
}

.title-left {
  margin: 7px 10px;
  height: 20px;
  line-height: 20px;
  border-left: 5px solid #F37D06;
  font-size: 16px;
  font-weight: 600;
  padding: 0 10px;
}

.content {
  background-color: #fff;
  height: 65px;
  text-align: center;
  line-height: 65px;
  display: flex;
}

.content span {
  flex: 1;
}
</style>