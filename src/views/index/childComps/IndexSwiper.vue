<template>
  <swiper :banners="banners">
  </swiper>
</template>

<script>
import { getSwiper } from "../../../network/index";
import Swiper from "../../../components/swiper/Swiper";

export default {
  name: "IndexSwiper",
  data() {
    return {
      isLoad: false,
      banners: []
    };
  },
  components: {
    Swiper
  },
  created() {
    this.getSwiper();
  },
  methods: {
    getSwiper() {
      getSwiper().then(res => {
        // console.log(res);
        this.banners = res.data.data;
      });
    }
  }
};
</script>

<style scoped>
</style>