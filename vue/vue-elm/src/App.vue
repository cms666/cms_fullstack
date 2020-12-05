<template>
  <div id="app">
    <Header :seller="seller" />
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商家</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="page">
      <router-view :seller="seller"/>
    </div>
    
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import { getSeller } from "@/api/index";
import qs from "query-string";
export default {
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id,
      },
    };
  },
  components: {
    Header,
  },
  created() {
    getSeller().then((seller) => {
      console.log(seller);
      this.seller = Object.assign({}, this.seller, seller);
    });
  },
};
</script>

<style lang="stylus">
@import 'common/stylus/variable.styl';

.tab
  display: flex;
  width: 100%;
  line-height: 36px;
  height: 36px;
  &-wrapper
    flex 1
    text-align: center;
    a
      text-decoration: none;
      width: 100%;
      display: inline-block;
      color:#666;
    .router-link-exact-active
      color: $color-red;
      border-bottom: 2px solid $color-red;
</style>
