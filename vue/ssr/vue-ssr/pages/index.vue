<template>
  <div class="container">
    <ul>
      <li><nuxt-link :to="{name:'index'}">Home</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">About</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:1234}}">New</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
