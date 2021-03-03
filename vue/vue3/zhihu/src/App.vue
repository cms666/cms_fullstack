<template>
  <div>
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <Loading v-if="isLoading"></Loading>
    <div class="column">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import Loading from './components/Loading.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store/types'
export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.isLoading)
    return {
      currentUser,
      isLoading
    }
  },
  components: {
    GlobalHeader,
    Loading
  }
})
</script>

<style>
.column{
  padding-top: 70px;
  width: 500px;
  margin: 0 auto;
}
</style>
