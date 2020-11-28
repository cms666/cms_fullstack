<template>
  <div class="hi">
    <p @click="sendHi">{{hi}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hi: 'hi! Welcome',
      hiMsg: '我是Hi组件里的数据'
    }
  },
  methods: {
    sendHi() {
      this.$emit('sendHi',this.hiMsg)
    }
  }
}
</script>

<style>

</style>