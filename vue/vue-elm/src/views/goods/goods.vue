<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            class="menu-item"
            @click="selectMenu(index)"
            v-for="(item, index) in goods"
            :key="index"
            :class="{'current':currentIndex === index}"
          >
            <span class="text">
              <SupportIco :size=3 :type="item.type" v-if="item.type>0" />
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li class="food-list" v-for="(item,index) in goods" :key="index" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li class="food-item" v-for="(food,idx) in item.foods" :key="idx" >
                <div class="icon">
                  <img :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <!-- + -->
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 购物车 -->
    <ShopCart/>
  </div>
</template>

<script>
import SupportIco from "../../components/support.ico/support-ico";
import BScroll from 'better-scroll'
import { getGoods } from "@/api/index";
import ShopCart from '../../components/shop-cart/Shop-cart'
import CartControl from '../../components/cart-control/cart-control'
export default {
  data () {
    return {
      goods: [],
      // currentIndex: 0,
      listHeight: [],
      scrollY: 0
    }
  },
  created () {
    getGoods().then((res) => {
      console.log(res);
      this.goods = res
      this.$nextTick(() => { // 只会在dom渲染完成后执行
        this._initScroll()
        this._calculateHeight()
      })
      
    })
  },
  methods: {
    selectMenu(idx) {
      // this.currentIndex = idx
      let foodList = this.$refs.foodList
      let el = foodList[idx]
      this.foodsScroll.scrollToElement(el, 300)
    },
     _initScroll() { // 出现滚动效果
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', pos => {
        // console.log(pos);
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight() {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for(let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight // 获取dom结构的高度
        this.listHeight.push(height)
      }
      // console.log(this.listHeight);
    }
  },
  components: {
    SupportIco,
    ShopCart,
    CartControl
  },
  computed: {
    currentIndex() {
      for (let i = 1; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i-1]
        let height2 = this.listHeight[i]
        if(this.scrollY >= height1 && this.scrollY < height2) {
          return i-1
        }
      }
      return 0
    },
    selectFoods(){
      let foods=[]
      // for(){

      // }
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';

.goods
  display: flex;
  position: absolute;
  top: 177px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper
    flex 0 0 80px
    width: 80px;
    background: $color-background-ssss;
    .menu-item
      display: flex;
      width: 56px;
      height: 54px;
      padding: 0 12px;
      line-height: 14px;
      align-items: center;
      justify-content: center;
      font-size $fontsize-small
      &.current
        background: #fff;
        font-weight: 700;
  .foods-wrapper
    flex 1
    .title
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size $fontsize-small
      color rgb(147,153,159)
      background: $color-background-ssss;
    .food-item
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      position: relative;
      &:last-child
        padding-bottom: 0;
      .icon
        flex 0 0 57px
        margin-right: 10px;
        img
          width: 100%;
      .content 
        flex 1
        .name 
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra 
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc 
          line-height 12px
          margin-bottom 8px
        .extra 
          .count 
            margin-right 12px
        .price 
          font-weight 700
          line-height 24px
          .now 
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old 
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position: absolute;
          right: 0;
          bottom: 12px;
</style>