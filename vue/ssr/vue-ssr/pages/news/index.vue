<template>
  <div>
    <h2>News Index Page</h2>
    <p>newsid:{{$route.params.newsId}}</p>

    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/news/123">new1</a></li>
      <li><a href="/news/abc">new2</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>