<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
    <van-swipe-item v-for="item in list" :key="item.id">
      <img :src="item.url" alt="" @click="goTo(item.id)" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    list: Array,
    default: function () {
      return {};
    },
  },
  setup() {
    function goTo(id) {
      console.log(id);
    }
    return { goTo };
  },
};
</script>

<style lang='less' scoped>
@import "../assets/mixin";

.my-swipe {
  background-color: @primary;
  img {
    width: 100%;
    height: 7rem;
  }
}
</style>
