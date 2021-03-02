<template>
  <div>
    <GlobalHeader :user="currentUser"></GlobalHeader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
export default defineComponent({
  name: 'App',
  setup () {
    const currentUser = {
      isLogin: true,
      nickName: '露西',
      _id: 1,
      column: 123,
      email: 123456
    }
    return {
      currentUser
    }
  },
  components: {
    GlobalHeader
  }
})
</script>

<style>

</style>
