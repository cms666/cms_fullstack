<template>
  <sheader :name="'生成订单'" :back="'/home'" />
  <div class="main">
    <div class="address">
      <div class="left">
        <div class="top">
          <span class="name">名字</span><span class="phone">联系方式</span>
        </div>
        <div class="bottom">地址</div>
      </div>
      <van-icon name="arrow" />
    </div>
    <div class="material-list">
      <div class="cart-item" v-for="item in materialList" :key="item.id">
        <div class="item-img">
          <img :src="item.url" alt="" />
        </div>
        <div class="desc">
          <div class="title">{{ item.name }}</div>
          <div class="count">X{{ item.count }}</div>
          <div class="bottom">
            <div class="price">
              ￥<span>{{ item.price }}</span
              >.00
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="create-order">
      <i>&nbsp;</i>
      <div class="total">
        <span class="num">共{{ materialList.length }}件，</span>
        <span class="heji">合计：</span>
        <span class="price"
          >￥<span>{{ total }}</span
          >.00</span
        >
      </div>
      <van-button
        hairline
        round
        type="small"
        color="#14c965"
        class="btnsize"
        @click.stop="goToAccount"
      >
        提交订单
      </van-button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import sheader from "../components/header";
import { getLocal } from "../utils/utils";
import { account } from "../../axios/interface/user";
export default {
  components: {
    sheader,
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      materialList: [],
    });
    onMounted(async () => {
      console.log(JSON.parse(getLocal("account")));
      let accountdata = JSON.parse(getLocal("account"));
      let res = await account(accountdata);
      console.log(res);
      if (res.code == "80000") {
        state.materialList = res.data;
      }
    });
    let total = computed(() => {
      let sum = 0;
      state.materialList.forEach((item) => {
        sum += item.price * item.count;
      });
      return sum;
    });
    return {
      ...toRefs(state),
      total,
    };
  },
};
</script>

<style lang="less" scoped >
@import "../assets/mixin";
.main {
  background-color: @bc;
  padding: 1.2rem 0.2rem 3rem;
  .boxSizing();
  .address {
    background-color: #fff;
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0.2rem;
    .fj();
    .left {
      .name {
        font-size: 0.4rem;
        margin: 0 0.2rem 0.2rem 0;
      }
      .phone {
        color: #999;
      }
    }
  }
  .material-list {
    .cart-item:first-child {
      border-top-right-radius: 0.2rem;
      border-top-left-radius: 0.2rem;
    }
    .cart-item:last-child {
      border-bottom-right-radius: 0.2rem;
      border-bottom-left-radius: 0.2rem;
    }
    .cart-item {
      display: flex;
      background-color: #fff;
      padding: 0.2rem;
      .item-img {
        img {
          .wh(2.5rem,2.5rem);
          border-radius: 0.2rem;
        }
      }
      .desc {
        margin-left: 0.2rem;
        display: flex;
        width: 5.6rem;
        justify-content: space-between;
        flex-direction: column;

        .title {
          width: 5.4rem;
          overflow: hidden;
          white-space: nowrap;
          font-size: 0.4rem;
        }
        .count {
          color: #999;
        }
        .bottom {
          .fj();
          .price {
            color: @primary;
            span {
              font-size: 0.5rem;
            }
          }
        }
      }
    }
    .delete-button {
      margin-right: 0.01rem;
      height: 100%;
      width: 1.8rem;
    }
  }
  .create-order {
    box-sizing: border-box;
    padding: 0.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
    width: 100%;
    .fj();
    .total {
      margin-left: 3.5rem;
      .num {
        color: #999;
      }
      .heji {
        font-size: 0.4rem;
      }
      .price {
        color: @primary;
        span {
          font-size: 0.4rem;
        }
      }
    }
    .btnsize {
      margin-left: 0.2rem;
      width: 2rem;
    }
  }
}
</style>