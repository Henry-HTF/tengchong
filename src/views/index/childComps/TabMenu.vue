<template>
  <div class="menu">
    <div class="menu-list">
      <div class="menu-list-item" v-for="(item, index) in menulist" :key="index">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
  import {getMenuList} from '../../../network/index'

  export default {
    name: 'TabMenu',
    data() {
      return {
        menulist: []
      }
    },
    created() {
      this.getMenuList()
    },
    methods: {
      getMenuList() {
        getMenuList().then(res => {
          // console.log(res);
          this.menulist = res.data.data.function
          
        })
      }
    },
  }
</script>

<style scoped>
.menu-list-item {
  width: 255px;
  height: 35px;
  background-color: #fff;
  line-height: 35px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #F5F5F5;
}
</style>