<template>
  <div class="main">
    <header class="search-header">
      <van-icon name="arrow-left" @click="goback" />
      <div class="search">
        <i class="iconfont icon--search"></i>
        <input
          type="text"
          class="input-search"
          v-model="searchText"
          ref="focus"
          @keyup.enter="onRefresh"
        />
        <van-icon
          name="close"
          class="close"
          v-show="showcloseicon"
          @click="clearText"
        />
      </div>
      <div class="tip" @click="onRefresh">搜索</div>
    </header>
    <div class="tab">
      <div
        class="item"
        :class="{ 'item-select': itemId == item.id }"
        v-for="item in tabData"
        :key="item.id"
        @click="tabChange(item.id)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="content">
      <van-pull-refresh
        v-model="refreshing"
        @refresh="onRefresh"
        class="order-list-refresh"
         ref="position"
      >
        <van-list
          v-model:loading="loading"
          :finished="finished"
          @load="onLoad"
          :offset="10"
          :immediate-check="false"
          finished-text="没有更多了"
          class="van-list"
        >
          <foodlist :foods="searchResult" v-if="itemId == 1" />
          <material :materials="searchResult" v-else />
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import {
  nextTick,
  reactive,
  toRefs,
  watch,
  ref,
  onActivated,
  onMounted,
} from "vue";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import foodlist from "../components/foodlist";
import material from "../components/materiallist";
import { searchGoods } from "../../axios/interface/material";
import { Toast } from "vant";
import { setLocal, getLocal } from "../utils/utils";
export default {
  name: "search",
  components: {
    foodlist,
    material,
  },
  setup() {
    const router = useRouter();
    const focus = ref(null);
    const position = ref(null);
    const state = reactive({
      searchResult: [],
      searchText: "",
      showcloseicon: false,
      itemId: 1,
      tabData: [
        { id: 1, name: "菜品" },
        { id: 2, name: "食材" },
      ],
      page: 0,
      scrollTop: 0,
      loading: false,
      finished: false,
      refreshing: false,
      totalpage: 0,
    });

    //进入详情页面缓存
    onBeforeRouteLeave((to, from, next) => {
      console.log("离开");
      if (to.name == "home" || to.name == "category") {
        if (getLocal("keepalive")) {
          localStorage.removeItem("keepalive");
        }
        next();
      }
      if (to.name == "materialdetail" || to.name == "fooddetail") {
        console.log(position);
        state.scrollTop = document.body.scrollTop;
        setLocal("keepalive", JSON.stringify(state));
        next();
      }
    });
    onMounted(() => {
      if (getLocal("keepalive")) {
        for (let key in state) {
          state[key] = JSON.parse(getLocal("keepalive"))[key];
        }
      }
    });
    //自动聚焦和滚动事件
    nextTick(() => {
      focus._value.focus();
      console.log(state.scrollTop);
      if (getLocal("keepalive")) {
        document.body.scrollTop = state.scrollTop;
      }
    });
    const goback = () => {
      router.back(-1);
    };
    //切换tab
    const tabChange = (id) => {
      state.itemId = id;
      onRefresh();
    };
    const onLoad = async () => {
      if (!state.refreshing && state.page < state.totalpage) {
        state.page += 1;
      }
      if (state.refreshing) {
        state.searchResult = [];
        state.refreshing = false;
      }
      search();
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
    const search = async () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      console.log(state.searchText);
      let res = await searchGoods({
        type: state.itemId,
        pageNum: state.page,
        searchText: state.searchText,
      });
      console.log(res);
      if (res.code == "80000") {
        state.searchResult = state.searchResult.concat(res.data.list);
        state.totalpage = res.data.pageNum;
        state.loading = false;
        if (state.page >= res.data.pageNum) {
          state.finished = true;
        }
        Toast.clear();
      } else {
        state.loading = false;
        state.finished = true;

        Toast(res.message);
      }
    };

    //清除按钮显示与否
    watch(
      () => state.searchText,
      (newval, oldval) => {
        console.log(newval);
        state.showcloseicon = newval ? true : false;
      }
    );

    const clearText = () => {
      state.searchText = "";
    };
    return {
      ...toRefs(state),
      goback,
      search,
      focus,
      clearText,
      focus,
      tabChange,
      position,
      onRefresh,
      onLoad,
    };
  },
};
</script>

<style lang="less" scoped >
@import "../assets/mixin";
.main {
  .search-header {
    .fj();
    background-color: @primary;
    padding: 0.15rem 0.4rem;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    .search {
      background-color: #f7f7f7;
      padding: 0.15rem 0.4rem;
      border-radius: 0.5rem;
      vertical-align: middle;
      position: relative;
      width: 70%;
      .iconfont {
        display: inline-block;
        position: absolute;
        left: 0.3rem;
      }
      .input-search {
        border: none;
        background-color: #f7f7f7;
        margin-left: 0.6rem;
        width: 80%;
      }
      .close {
        position: absolute;
        right: 0.5rem;
      }
    }
  }
  .tab {
    position: fixed;
    top: 1rem;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0.2rem 0.4rem;
    background-color: #fff;
    width: 100%;
    z-index: 999;
    box-sizing: border-box;
    box-shadow: 0 0.03rem 0.03rem rgb(243, 241, 241);
    .item {
      flex: 1;
      text-align: center;
      border: 1px solid @btncol;
      padding: 0.15rem 0;
      color: @btncol;
    }
    .item-select {
      background-color: @btncol;
      color: #fff;
    }
    .item:first-child {
      border-top-left-radius: 0.1rem;
      border-bottom-left-radius: 0.1rem;
    }
    .item:last-child {
      border-top-right-radius: 0.1rem;
      border-bottom-right-radius: 0.1rem;
    }
  }
  .content {
    margin-top: 1.8rem;
    .van-list {
      overflow-y: scroll;
      // height: 17.2rem;
      height: 15.6rem;
    }
    .van-list::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
}
</style>