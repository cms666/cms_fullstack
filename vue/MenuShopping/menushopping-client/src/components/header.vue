<template>
  <header class="simple-header">
    <van-icon name="arrow-left" @click="goBack"/>
    <div class="simple-header-name">{{ name }}</div>
    <i>&nbsp;</i>
  </header>

</template>

<script>
import {useRouter} from 'vue-router'
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    back:{
      type: String,
      default: "",
    }
  },
  setup(props) {
    const router = useRouter()
    const back = props.back
    const goBack = () =>{
      router.push(back)
    }
    return {goBack};
  },
};
</script>

<style lang="less" scoped>
@import '../assets/mixin';
.simple-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  color: #252525;
  background-color: @primary;
  border-bottom: 1px solid #dcdcdc;
  font-size: 0.3rem;
  .van-icon {
    line-height: 1rem;
  }
}
</style>