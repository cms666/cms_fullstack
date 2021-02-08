<template>
  <sheader :name="'订单详情'" :back="'/myorder?id=1'" />
  <div class="main">
    <div class="order-info">
      <div class="item-desc">
        <span class="tip">订单号</span
        ><span class="content">{{ orderDetail.orderid }}</span>
      </div>
      <div class="item-desc">
        <span class="tip">状态</span><span class="content">{{classify}}</span>
      </div>
      <div class="item-desc">
        <span class="tip">创建时间</span
        ><span class="content">{{ orderDetail.time }}</span>
      </div>
      <div class="item-desc">
        <span class="tip">配送地址</span
        ><span class="content">{{ orderDetail.address }}</span>
      </div>
      <div class="item-desc">
        <span class="tip">花费金额</span
        ><span class="content">￥{{ orderDetail.total }}</span>
      </div>
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
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import sheader from "../components/header";
import { useRoute } from "vue-router";
import { getOrderDetail } from "../../axios/interface/order";
import { Toast } from "vant";

export default {
  components: {
    sheader,
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      materialList: [],
      orderDetail: {
        orderid:'',
        time:'',
        address:'',
        total:"",
      },
      classify:'',
      id: route.query.id,
    });

    onMounted(async () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      let res = await getOrderDetail({ id: state.id });
      console.log(res);
      if (res.code == "80000") {
        state.orderDetail = res.data.orderDetail;
        if(state.orderDetail.ispay.data[0]){
          state.classify = '已支付'
        }else{
          state.classify = '未支付'
        }
        if(state.orderDetail.isclose.data[0]){
          state.classify = '已取消'
        }
        state.materialList = res.data.orderDetailList;
        Toast.clear();
      }
    });

    return {
      ...toRefs(state)
    }
  },
};
</script>

<style lang='less' scoped>
@import "../assets/mixin";

.main {
  padding: 1.2rem 0.2rem;
  .order-info {
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 0.2rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    .item-desc {
      width: 100%;
      margin-bottom: 0.2rem;
      span {
        display: inline-block;
      }
      .tip {
        width: 20%;
        color: #999;
      }
      .content {
        width: 80%;
      }
    }
    .item-desc:last-child {
      margin-bottom: 0;
      .content{
        color: @primary;
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
}
</style>