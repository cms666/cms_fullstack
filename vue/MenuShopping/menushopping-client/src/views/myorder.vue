<template>
  <sheader :name="'我的订单'" :back="'/user'" />
  <div class="main">
    <van-tabs
      v-model:active="status"
      :color="'#FF6B01'"
      class="order-tab"
      @click="onChangeTab"
    >
      <van-tab title="全部" name=""></van-tab>
      <van-tab title="待付款" name="0"></van-tab>
      <van-tab title="待发货" name="1"></van-tab>
      <van-tab title="待收货" name="2"></van-tab>
      <van-tab title="已发货" name="3"></van-tab>
      <van-tab title="已取消" name="4"></van-tab>
    </van-tabs>
    <div class="content">
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh"
        class="order-list-refresh"
      >
        <van-list
          v-model:loading="loading"
          :finished="finished"
          @load="onLoad"
          :offset="10"
          :immediate-check="check"
          finished-text="没有更多了"
          class="van-list"
        >
          <div
            class="order-item-box"
            v-for="(item, index) in list"
            :key="item.orderDetail.id"
            @click="goToDetail(item.orderDetail.orderid)"
          >
            <div class="order-item-header">
              <span>订单时间：{{ item.orderDetail.time }}</span>
              <span>{{ item.status }}</span>
            </div>
            <orderlist :orderDetailList="item.orderDetailList" />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import sheader from "../components/header";
import orderlist from "../components/orderlist";
import { getOrderList } from "../../axios/interface/order";
import { useRouter } from "vue-router";

export default {
  components: {
    sheader,
    orderlist,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      status: "",
      page: 0,
      totalpage: 0,
      check: false,
    });

    const onLoad = async () => {
      if (!state.refreshing && state.page < state.totalpage) {
        state.page += 1;
      }
      if (state.refreshing) {
        state.list = [];
        state.refreshing = false;
      }
      let { data } = await getOrderList({
        pagenumber: state.page,
        status: state.status,
      });
      console.log(data);
      let { pageNum, orderlist } = data;

      state.list = state.list.concat(orderlist);
      state.totalpage = pageNum;
      state.loading = false;
      if (state.page >= pageNum) {
        state.finished = true;
      }

      console.log(state.page);
    };

    const onRefresh = () => {
      // 清空列表数据
      state.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      state.loading = true;
      state.refreshing = true;
      state.page = 0;
      onLoad();
    };
    const onChangeTab = (name, title) => {
      console.log(name, title);
      state.status = name;
      onRefresh();
    };
    onMounted(() => {
      onRefresh();
    });

    //去订单详情
    const goToDetail = (id) => {
      router.push({ path: "/orderdetail", query: { id: id } });
    };
    return {
      ...toRefs(state),
      onLoad,
      onRefresh,
      onChangeTab,
      goToDetail,
    };
  },
};
</script>

<style lang='less' scoped>
@import "../assets/mixin";
.main {
  padding-top: 2.2rem;
  box-sizing: border-box;
  .order-tab {
    position: fixed;
    top: 1rem;
    left: 0;
    z-index: 99;
  }
  .content {
    overflow-y: scroll;
    padding: 0.2rem 0.2rem 0;
    .van-list {
      overflow-y: scroll;
      // height: 17.2rem;
    }
    .order-item-box {
      background-color: #fff;
      margin-bottom: 0.2rem;
      border-radius: 0.2rem;
      .order-item-header {
        .fj();
        padding: 0.2rem;
      }
    }
  }
}
</style>