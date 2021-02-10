<template>
  <div class="main">
    <header class="search-header">
      <van-icon name="arrow-left" @click="goback" />
      <div class="search">
        <i class="iconfont icon--search"></i>
        <input type="text" class="input-search" v-model="searchText" ref="focus"/>
        <van-icon name="close" class="close" v-show="showcloseicon" @click="clearText"/>
      </div>
      <div class="tip" @click="search">搜索</div>
    </header>
  </div>
</template>

<script>
import { nextTick, reactive, toRefs, watch,ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup(){
    const router = useRouter()
    const state = reactive({
      searchText:'',
      showcloseicon:false,
    })
    const focus = ref(null)

    //自动聚焦事件
    nextTick(()=>{
      focus._value.focus()
    })
    const goback = () =>{
      router.back(-1)
    }
    const search = () =>{
      console.log(state.searchText);
    }

    //清除按钮显示与否
    watch(
      ()=>state.searchText,(newval, oldval) =>{
        console.log(newval);
        state.showcloseicon = newval ? true : false
      }
    )

    const clearText = () =>{
      state.searchText = ''
    }
    return {
      ...toRefs(state),
      goback,
      search,
      focus,
      clearText,
      focus,
    }
  }
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
    .search {
      background-color: #f7f7f7;
      padding: 0.15rem 0.4rem;
      border-radius: 0.5rem;
      vertical-align: middle;
      position: relative;
      width: 70%;
      .iconfont{
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
      .close{
        position: absolute;
        right: 0.5rem;
      }
    }
  }
}
</style>