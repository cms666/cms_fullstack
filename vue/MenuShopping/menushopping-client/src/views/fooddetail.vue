<template>
  <sheader :name="'食材详情'" :back="'-1'" />
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
    <van-swipe-item v-for="item in 1">
      <img :src="foodDetail.url" alt="" />
    </van-swipe-item>
  </van-swipe>
  <div class="foodDetail">
    <div class="foodDetail-header">
      <div class="title">{{ foodDetail.name }}</div>
      <div class="price">
        {{ foodDetail.classify }}
      </div>
    </div>
    <div class="foodDetail-desc">
      <div class="distribution">
        <div class="tip">教程</div>
        <div class="right">
          <router-link
            :to="{ path: '/video', query: { url: foodDetail.howdo } }"
            ><van-icon name="tv-o" />看教程</router-link
          >
        </div>
      </div>
      <div class="desc">
        <div class="tip">详情</div>
        <div class="right">{{ foodDetail.desc }}</div>
      </div>
    </div>
  </div>
  <div class="material-title">主要食材</div>
  <cartlist :cartlist="foodMaterial" :cart="false" />
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" dot />
    <van-action-bar-icon
      icon="cart-o"
      text="购物车"
      :badge="count ? count : ''"
      @click="goTo"
    />
    <van-action-bar-button
      type="warning"
      text="加入购物车"
      @click="goAddCart"
    />
    <van-action-bar-button color="#14c965" text="立即购买" @click="goToBuy" />
  </van-action-bar>
</template>

<script>
import { onMounted, reactive, toRefs, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import sheader from "../components/header";
import cartlist from "../components/cartlist";
import {
  detail,
  addCart,
  getFoodDetail,
  addFoodCart,
} from "../../axios/interface/material";
import { useStore } from "vuex";
import { Toast } from "vant";

export default {
  components: {
    sheader,
    cartlist,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      foodDetail: {},
      foodMaterial: [],
    });

    onMounted(async () => {
      console.log(route.params);

      let { data } = await getFoodDetail({ id: route.params.id });
      state.foodDetail = data.foodDetail;
      state.foodMaterial = data.foodMaterial;
      console.log(data);
    });

    // 角标
    const count = computed(() => {
      return store.state.cartCount;
    });
    //加入购物车
    const goAddCart = async () => {
      // let res = await addCart({id:state.foodDetail.id,count:1})
      // console.log(res);
      // if(res.code == '80000'){
      //   store.dispatch('updateCart')
      //   Toast.success(res.message)
      // }else{
      //   Toast.fail(res.message)
      // }
      console.log("加入购物车");
      console.log(store.state.cartselected);
      if(!store.state.cartselected.length){
        Toast('请选择商品')
        return
      }
      let res = await addFoodCart(store.state.cartselected);
      if (res.code == "80000") {
        store.dispatch("updateCart");
        Toast.success(res.message);
      } else {
        Toast.fail(res.message);
      }
    };
    //去购物车
    const goTo = () => {
      router.push("/cart");
    };
    return {
      ...toRefs(state),
      count,
      goAddCart,
      goTo,
    };
  },
};
</script>

<style lang='less' scoped>
@import "../assets/mixin";
.my-swipe {
  margin-top: 1rem;
  img {
    width: 100%;
    height: 10rem;
  }
}
.foodDetail {
  padding: 0.2rem;
  background-color: @bc;
  .foodDetail-header {
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    .title {
      color: #333;
      font-weight: 500;
      font-size: 0.4rem;
      margin-bottom: 0.2rem;
    }
    .price {
      color: @primary;
      font-weight: 700;
      span {
        font-size: 0.5rem;
      }
    }
  }
  .foodDetail-desc {
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 0.2rem;
    .distribution,
    .desc {
      display: flex;
      align-items: center;
      margin-bottom: 0.2rem;
    }
    .tip {
      width: 10%;
      color: #999;
    }
    .right {
      width: 90%;
    }
  }
}
.material-title {
  text-align: center;
  font-weight: 500;
}
</style>