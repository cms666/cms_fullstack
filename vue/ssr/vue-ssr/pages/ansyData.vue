<template>
  <div>
    <h1>名字:{{info[0].nm}}</h1>
    <h1>主演:{{info[0].star}}</h1>
    <h1>上映时间:{{info[0].rt}}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      name:'hello wn'
    }
  },
  async asyncData(){
    let {data} = await axios.get('https://m.maoyan.com/ajax/movieOnInfoList')
    console.log(data.movieList);
    return {info:data.movieList}
  }
}
</script>

<style>

</style>