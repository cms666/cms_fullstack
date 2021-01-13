<template>
  <div class="address-box">
    <s-header
      :name="'地址管理'"
      :back="from === 'create-order' ? '/create-order' : '/user'"
    ></s-header>
    <div class="address-item">
      <van-address-list
        v-if="from != 'mine'"
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
      <van-address-list
        v-else
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
import { onMounted, reactive, toRefs } from "vue";
import { getAddressList } from "../service/address";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    sHeader,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      list: [],
      from: route.query.from,
    });

    onMounted(async () => {
      // 请求所有的地址列表
      const { data } = await getAddressList();
      if (!data) {
        state.list = [];
        return;
      }
      console.log(data);
      state.list = data.map((item) => {
        return {
          id: item.addressId,
          name: item.userName,
          tel: item.userPhone,
          address: `${item.provinceName}${item.cityName}${item.regionName}${item.detailAddress}`,
          isDefault: Boolean(item.defaultFlag),
        };
      });
      //
      //
      //
    });

    // 新增地址
    const onAdd = () => {
      router.push({
        path: "/address-edit",
        query: { type: "add", from: state.from },
      });
    };

    //编辑地址
    const onEdit = (item) => {
      console.log(item.id);
      router.push({
        path: "/address-edit",
        query: { type: "edit", from: state.from, addressId: item.id },
      });
    };
    //选中地址
    const select = (item) => {
      router.push({
        path: "/create-order",
        query: { addressId: item.id, from: state.from },
      });
    };

    return {
      ...toRefs(state),
      onAdd,
      select,
      onEdit,
    };
  },
};
</script>

<style lang="less">
@import "../common/style/mixin";
.address-box {
  .van-radio__icon {
    display: none;
  }
  .address-item {
    margin-top: 44px;
    .van-button {
      background: @primary;
      border-color: @primary;
    }
  }
}
</style>