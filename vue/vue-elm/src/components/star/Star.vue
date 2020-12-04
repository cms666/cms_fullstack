<template>
  <div class="star">
    <span class="star-item on" v-for="index in parseInt(score)" :key="index"></span>
    <span class="star-item off" v-for="index in 5-parseInt(score)" :key="index"></span>
  </div>
</template>

<script>
export default {
    props: {
    score: {
      type: Number
    },
  },
};
</script>

<style lang="stylus" scoped>
.star
  display: flex;
  align-items: center;
  justify-content: center;
  &-item
    background-size: 20px 22px;
    height: 20px;
    margin-right: 22px;
    width: 20px;
    background-repeat: no-repeat;
    &.on 
      background-image: url(on.png);
      // background-color: red;
    &.off
      background-image: url(off.png)
      // background-color: yellow;
    &:last-child
      margin-right: 0;
</style>