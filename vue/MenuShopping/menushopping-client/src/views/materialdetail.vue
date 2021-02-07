<template>
  <sheader :name="'食材详情'" />
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
    <van-swipe-item v-for="item in 1">
      <img :src="material.url" alt="" />
    </van-swipe-item>
  </van-swipe>
  <div class="material">
    <div class="material-header">
      <div class="title">{{ material.name }}</div>
      <div class="price">
        ￥<span>{{ material.price }}</span
        >.00
      </div>
    </div>
    <div class="material-desc">
      <div class="distribution">
        <div class="tip">配送</div>
        <div class="right">顺丰</div>
      </div>
      <div class="desc">
        <div class="tip">详情</div>
        <div class="right">{{ material.desc }}</div>
      </div>
    </div>
  </div>
      <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" dot />
      <van-action-bar-icon icon="cart-o" text="购物车" :badge="count ? count : ''" @click="goTo" />
      <van-action-bar-button type="warning" text="加入购物车" @click="goAddCart"/>
      <van-action-bar-button color="#14c965" text="立即购买" @click="goToBuy"/>
    </van-action-bar>
</template>

<script>
import { onMounted, reactive, toRefs,computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import sheader from "../components/header";
import { detail,addCart } from "../../axios/interface/material";
import { useStore } from 'vuex';
import { Toast } from "vant";

export default {
  components: {
    sheader,
  },
  setup() {
    const route = useRoute();
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      material: {},
    });

    onMounted(async () => {
      console.log(route.params);

      let { data } = await detail({ id: route.params.id });
      state.material = data;
      console.log(state.material);
    });
        // 角标
    const count = computed(() => {
      return store.state.cartCount
    })
    //加入购物车
    const goAddCart = async ()=>{
      let res = await addCart({id:state.material.id,count:1})
      console.log(res);
      if(res.code == '80000'){
        store.dispatch('updateCart')
        Toast.success(res.message)
      }else{
        Toast.fail(res.message)
      }
    }
    //去购物车 
    const goTo = () =>{
      router.push('/cart')
    }
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
.material {
  padding: 0.2rem 0.2rem 1.5rem;
  background-color: @bc;
  .material-header {
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
  .material-desc {
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
    .right{
      width: 90%;
    }
  }
}
</style>