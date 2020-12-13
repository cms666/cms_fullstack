<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{count}}</h2>
    <h2>{{newCount}}</h2>
    <!-- <h1>{{msg}}</h1> -->
    <p>
      <button @click="$store.commit('reduce')">-</button>
      <button @click="add(3)">+</button>
    </p>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  // computed:{
  //   newCount(){
  //     return this.$store.state.count*2
  //   }
  // },
  data(){
    return{
      msg:''
    }
  },
  // computed:mapState({
  //   newCount:state=>state.count * 3
  // }),
  computed:{
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  // mounted(){
  //   this.msg = [...mapState].count
  // },
  methods:{
    ...mapMutations(['add','reduce']),
    // add(){
    //   this.$store.state.count++
    // }
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>