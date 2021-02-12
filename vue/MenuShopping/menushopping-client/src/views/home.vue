<template>
  <header class="home-header">
    <div class="header-title"><p>跟着食谱买菜</p></div>
    <div class="search" @click="tosearch">
      <i class="iconfont icon--search"></i>
    </div>

    <router-link to="./login" tag="span" v-if="!isLogin">登录</router-link>
    <router-link to="./user" tag="span" v-else class="usericon">
      <van-icon name="manager-o" />
    </router-link>
  </header>
  <swiper :list="homeSwiper" />
  <!-- 分类列表 -->
  <div class="classify">
    <div class="category-list">
      <div v-for="item in categoryList" :key="item.name" @click="goToTab(item.name)">
        <img :src="item.url" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
  <foodlist :title="'爆火菜品'" :foods="homeFoodList" />
  <material :title="'新鲜食材'" :materials="homeMaterialList" class="materialpadding"/>
  <snavbar />
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import snavbar from "../components/navbar";
import swiper from "../components/swiper";
import foodlist from "../components/foodlist";
import material from "../components/materiallist";
import { useRouter } from "vue-router";
import { home } from "../../axios/interface/home";
import { getLocal } from "../utils/utils";
import { Toast } from "vant";
import { useStore } from "vuex";

export default {
  components: {
    snavbar,
    swiper,
    foodlist,
    material,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      categoryList: [
        {
          name: "鲁菜",
          url:
            "https://img.redocn.com/sheji/20200707/badacaixizhilucaizhongguofengshuimoshufayishuzi_11049861.jpg.285.jpg",
        },
        {
          name: "川菜",
          url:
            "https://img.redocn.com/sheji/20200707/badacaixizhichuancaizhongguofengshuimoshufayishuzi_11049869.jpg.285.jpg",
        },
        {
          name: "粤菜",
          url:
            "https://img.redocn.com/sheji/20200707/badacaixizhiyuecaizhongguofengshuimoshufayishuzi_11049863.jpg.285.jpg",
        },
        {
          name: "苏菜",
          url:
            "https://img.redocn.com/sheji/20200707/badacaixizhisucaizhongguofengshuimoshufayishuzi_11049871.jpg.285.jpg",
        },
        {
          name: "闽菜",
          url:
            "https://img.redocn.com/sheji/20200707/badacaixizhimincaizhongguofengshuimoshufayishuzi_11049865.jpg.285.jpg",
        },
        {
          name: "浙菜",
          url:
            "https://img.redocn.com/sheji/20200707/badacaixizhizhecaizhongguofengshuimoshufayishuzi_11049873.jpg.285.jpg",
        },
        {
          name: "湘菜",
          url:
            "https://img.redocn.com/sheji/20200707/badacaixizhixiangcaizhongguofengshuimoshufayishuzi_11049867.jpg.285.jpg",
        },
        {
          name: "徽菜",
          url:
            "https://img.redocn.com/sheji/20200707/badacaixizhihuicaizhongguofengshuimoshufayishuzi_11049875.jpg.285.jpg",
        },
      ],
      isLogin: false,
      homeSwiper: [],
      homeFoodList: [],
      homeMaterialList: [],
    });
    const tosearch = () => {
      router.push("/search");
    };
    onMounted(async () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      const token = getLocal("token");
      if (token) {
        state.isLogin = true;
      }
      const { data } = await home();
      Toast.clear();
      console.log(data);
      (state.homeSwiper = data.homeSwiper),
        (state.homeFoodList = data.homeFoodList);
      state.homeMaterialList = data.homeMaterialList;
    });
    const goToTab =(name) =>{
      router.push({path:'/tab',query:{name:name}})
    }
    return {
      ...toRefs(state),
      tosearch,
      goToTab,
    };
  },
};
</script>
<style lang="less" scoped >
@import "../assets/mixin";
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 1rem);
  .fj();
  padding: 0 0.4rem;
  background: @primary;
  line-height: 1rem;
  .boxSizing();
  z-index: 10000;
  box-shadow: 0 0 0.1rem #666;
}
.header-title {
  font-family: STHupo;
  font-size: 0.5rem;
  color: #666;
}
.search {
  height: 0.8rem !important;
  width: 50%;
  background-color: @bc;
  border-radius: 0.5rem;
  padding: 0 0.2rem;
  line-height: 0.8rem;
  .boxSizing();
}
.usericon {
  font-size: 0.5rem;
  padding-top: 0.1rem;
}
.classify {
  .boxSizing();
  padding: 0.3rem 0.2rem;
  margin-top: -0.1rem;
  background-color: @primary;
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
}
.category-list {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 0.3rem;
  background-color: @primary;
  box-shadow: 0 0.1rem 0.3rem #666;
  border-radius: 0.3rem;
  div {
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
    img {
      .wh(1rem, 1rem);
      margin: 0.3rem auto 0.2rem auto;
      border-radius: 50%;
    }
  }
}
.materialpadding{
  padding-bottom: 1.8rem;
}
</style>