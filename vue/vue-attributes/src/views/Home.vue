<template>
  <div class="home">
    <p>num: {{num}}</p>
    <p>
      <button @click="add">+</button>
    </p>
  </div>
</template>

<script>
import { addLog, app } from './home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  updated () {
    console.log('原生改变')
  },
  created () {
    console.log('我是原生的')
  },
  mixins: [addLog], // 混入
  extends: app, // 扩展
  methods: {
    add () {
      this.num++
      console.log(this.num ** 2)
    }
  }
}
</script>

<style>

</style>
