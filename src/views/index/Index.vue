<template>
  <div class="home">
    <div class="first">
      <div class="menu">
        <tab-menu></tab-menu>
      </div>
      <div class="center">
        <index-swiper class="swiper" />
        <urgent class="urg" />
      </div>
      <login></login>
    </div>

    <!-- 第二层 -->
    <div class="second">
      <new-position></new-position>
    </div>
  </div>
</template>

<script>
import TabMenu from "./childComps/TabMenu";
import IndexSwiper from "./childComps/IndexSwiper";
import Urgent from "./childComps/Urgent";
import Login from "./childComps/Login";
import NewPosition from "./childComps/NewPosition";

export default {
  name: "Index",
  components: {
    TabMenu,
    IndexSwiper,
    Urgent,
    Login,
    NewPosition
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.home {
  width: 1100px;
  margin: auto;
}

.first {
  display: flex;
}

.menu {
  margin: 10px 7px 10px 0;
}

.swiper {
  width: 550px;
  height: 270px;
  margin-top: 20px;
}

.urg {
  width: 550px;
  height: 450px;
}
</style>