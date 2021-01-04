<template>
  <div class="confirm-model">
    <button>打开</button>
    <div>

    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    let isOpen = ref(false)
    return {isOpen}
  }
}
</script>

<style>

</style>