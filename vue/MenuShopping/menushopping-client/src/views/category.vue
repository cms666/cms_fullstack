<template>
  <div class="main">
    <header class="header">
      <router-link to="/search">
        <i class="iconfont icon--search"></i>
      </router-link>
    </header>
  </div>
  <snavbar />
</template>

<script>
import sheader from "../components/header";
import snavbar from "../components/navbar";
export default {
  components: {
    sheader,
    snavbar,
  },
};
</script>

<style lang="less" scoped >
@import "../assets/mixin";
.main {
  .header {
    .wh(100%, 1rem);
    .fj();
    padding: 0 0.4rem;
    background: @primary;
    line-height: 1rem;
    .boxSizing();
    z-index: 10000;
    box-shadow: 0 0 0.1rem #666;
  }
}
</style>