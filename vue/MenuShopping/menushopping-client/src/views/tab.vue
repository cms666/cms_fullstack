<template>
  <sheader :name="'各类美食'" :back="'-1'" />
  <div class="main">
    <van-tabs
      v-model:active="active"
      :color="'#FF6B01'"
      class="tabs"
      @click="onChangeTab"
    >
      <van-tab
        :title="item.name"
        v-for="item in categoryList"
        :key="item.id"
        :name="item.name"
      ></van-tab>
    </van-tabs>
    <div class="content">
      <foodlist :foods="FoodList" />
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import sheader from "../components/header";
import foodlist from "../components/foodlist";
import { useRoute } from "vue-router";
import { getTabFoodData } from "../../axios/interface/material";
import { Toast } from "vant";
export default {
  components: {
    sheader,
    foodlist,
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      active: route.query.name || "鲁菜",
      categoryList: [
        {
          name: "鲁菜",
          id: 0,
        },
        {
          name: "川菜",
          id: 1,
        },
        {
          name: "粤菜",
          id: 2,
        },
        {
          name: "苏菜",
          id: 3,
        },
        {
          name: "闽菜",
          id: 4,
        },
        {
          name: "浙菜",
          id: 5,
        },
        {
          name: "湘菜",
          id: 6,
        },
        {
          name: "徽菜",
          id: 7,
        },
      ],
      FoodList: [],
    });
    onMounted(() => {
      init(state.active);
    });
    const onChangeTab = (name, title) => {
      init(name);
    };
    const init = async (name) => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      let res = await getTabFoodData({ type: name });
      console.log(res);
      if (res.code == "80000") {
        state.FoodList = res.data;
        Toast.clear();
      } else {
        Toast(res.message);
      }
    };
    return {
      ...toRefs(state),
      onChangeTab,
    };
  },
};
</script>

<style lang="less" scoped >
@import "../assets/mixin";
.main {
  margin-top: 2rem;
  .tabs {
    position: fixed;
    top: 1rem;
    left: 0;
    width: 100%;
  }
}
</style>