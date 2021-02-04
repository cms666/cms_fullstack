<template>
  <div class="cart-detail">
    <div class="cart-list">
      <van-checkbox-group v-model="checked" @change="selectChange">
        <div class="cart-item" v-for="item in cartlist" :key="item.id">
          <van-checkbox :name="item.materialid"></van-checkbox>
          <div class="item-img">
            <img :src="item.material.url" alt="" />
          </div>
          <div class="desc">
            <div class="title">{{ item.material.name }}</div>
            <div class="count">X{{ item.count }}</div>
            <div class="bottom">
              <div class="price">
                ￥<span>{{ item.material.price }}</span
                >.00
              </div>
              <div class="btn">
                <van-stepper
                  v-model="value"
                  integer
                  :model-value="item.count"
                  :name="item.materialid"
                  @change="numChange"
                />
              </div>
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import {Toast} from 'vant'
export default {
  props: {
    cartlist: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  setup(props) {
    const state = reactive({
      checked: [],
    });

    //增减数量
    const numChange = (value, detail) => {
            Toast.loading({
        message: "修改中...",
        forbidClick: true,
      });
      console.log(value, detail.name);
      console.log(props.cartlist.filter((item) => item.materialid == detail.name));
      if( props.cartlist.filter((item) => item.materialid == detail.name)[0].count == value){
        return
      }
      props.cartlist.filter((item) => item.materialid == detail.name)[0].count = value
    };

    //选中与否
    const selectChange = (check) => {
      console.log(check);
    };
    return {
      ...toRefs(state),
      selectChange,
      numChange,
    };
  },
};
</script>

<style lang="less" scoped >
@import "../assets/mixin";
.cart-detail {
  background-color: @bc;
  padding: 0.2rem;
  .boxSizing();
  .cart-list {
    .cart-item {
      display: flex;
      background-color: #fff;
      padding: 0.2rem;
      border-radius: 0.2rem;
      margin-bottom: 0.2rem;
      .item-img {
        margin-left: 0.3rem;
        img {
          .wh(2.5rem,2.5rem);
          border-radius: 0.2rem;
        }
      }
      .desc {
        margin-left: 0.2rem;
        display: flex;
        width: 5.6rem;
        justify-content: space-between;
        flex-direction: column;

        .title {
          width: 5.4rem;
          overflow: hidden;
          white-space: nowrap;
          font-size: 0.4rem;
        }
        .count {
          color: #999;
        }
        .bottom {
          .fj();
          .price {
            color: @primary;
            span {
              font-size: 0.5rem;
            }
          }
        }
      }
    }
  }
}
</style>