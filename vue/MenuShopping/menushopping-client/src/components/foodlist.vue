<template>
  <div class="food">
    <header class="food-header">{{ title }}</header>
    <div class="food-box">
      <div
        class="food-item"
        v-for="item in foods"
        :key="item.id"
        @click="goToDetail(item)"
      >
        <img :src="item.url" alt="" />
        <div class="food-desc">
          <div class="title">{{ item.name }}</div>
          <div class="classify">{{ item.classify }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    foods:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
};
</script>

<style lang="less" scoped >
@import "../assets/mixin";
.food {
  padding: 0.2rem 0.4rem 2rem 0.4rem;
  background-color: @bc;
  .boxSizing();
  .food-header {
    text-align: center;
  }
  .food-box {
    width: 100%;
    .food-item {
      padding: 0.2rem;
      display: flex;
      background-color: #fff;
      margin-top: 0.3rem;
      border-radius: 0.2rem;
      img {
        .wh(2rem,2rem);
      }
      .food-desc{
        margin-left: 0.2rem;
        .title{
          font-weight: 700;
        }
        .classify{
          color: #666;
          margin-bottom: 0.2rem;
        }
        .desc{
          width: 6.4rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>