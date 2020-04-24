<template>
  <div class="urgent">
    <div class="title">
      <div class="title-left">紧急招聘</div>
      <div class="title-right">查看更多&gt;&gt;</div>
    </div>
    <div class="content" v-for="item in 6" :key="item">
      <span>{{item}}</span>
      <span>---</span>
      <span>---</span>
      <span>---</span>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'Urgent',
    
  }
</script>

<style scoped>
.title {
  background-color: #DCE6F3;
  height: 35px;
}

.title .title-left {
  float: left;
  margin: 6px 10px;
  height: 20px;
  line-height: 20px;
  border-left: 5px solid #F37D06;
  font-size: 16px;
  font-weight: 600;
  padding: 0 10px;
}

.title .title-right {
  float: right;
  line-height: 35px;
  margin: 0 10px;
  color: #a0a0a0;
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