<template>
  <div id="app">
    <router-view class="router-view" v-slot="{ Component }">
      <transition :name="transitionName">
        <!-- <keep-alive include="search,myorder"> -->
          <component :is="Component" />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      transitionName: "slide-left",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less">
@import "./assets/mixin.less";
html,
body {
  overflow-x: hidden;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  background-color: @bc;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
  z-index: 1000;
}
</style>
