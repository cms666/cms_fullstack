<template>
  <div class="confirm-model">
    <button>打开</button>
    <teleport>
      <div></div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isOpen = ref(false);
    return { isOpen };
  },
};
</script>

<style>
</style>