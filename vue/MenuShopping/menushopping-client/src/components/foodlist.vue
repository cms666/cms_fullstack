<template>
  <div class="food">
    <header class="food-header">{{ title }}</header>
    <div class="food-box">
      <div
        class="food-item"
        v-for="item in foods"
        :key="item.id"
        @click="goToDetail(item.id)"
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
import { useRouter } from "vue-router";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    foods: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  setup() {
    const router = useRouter();
    const goToDetail = (id) => {
      router.push({ path: `/fooddetail/${id}` });
    };

    return {
      goToDetail,
    };
  },
};
</script>

<style lang="less" scoped >
@import "../assets/mixin";
.food {
  padding: 0.2rem;
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
        border-radius: 0.1rem;
      }
      .food-desc {
        margin-left: 0.2rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 7rem;
        .title {
          font-weight: 700;
          margin-bottom: 0.1rem;
        }
        .classify {
          color: #666;
          margin-bottom: 0.2rem;
        }
        .desc {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>