<template>
  <div class="address-edit-box">
    <s-header
      :name="type === 'add' ? '新增地址' : '编辑地址'"
      :back="'/address'"
    ></s-header>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :address-info="type === 'add' ? {} : addressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      @change-area="changeArea"
      ref="reset"
      value="110101"
    />
  </div>
</template>

<script>
import sHeader from "@/components/SimpleHeader";
import { onMounted, reactive, toRefs } from "vue";
import { tdist } from "../common/js/utils";
import { addAddress, editAddress } from "../service/address";
import { Toast } from "vant";
import { useRouter, useRoute } from "vue-router";
import { getAddressDetail, getDefaultAddress } from "../service/address";

export default {
  components: {
    sHeader,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {},
      },
      type: route.query.type,
      addressInfo: {},
    
    });

    onMounted(async () => {
      //
      let _province_list = {};
      let _city_list = {};
      let _county_list = {};
      tdist.getLev1().forEach((p) => {
        _province_list[p.id] = p.text;
        tdist.getLev2(p.id).forEach((c) => {
          _city_list[c.id] = c.text;
          tdist.getLev3(c.id).forEach((c) => (_county_list[c.id] = c.text));
        });
      });
      state.areaList.province_list = _province_list;
      state.areaList.city_list = _city_list;
      state.areaList.county_list = _county_list;
      if (state.type === "edit") {
        const { data: address } = await getAddressDetail(route.query.addressId);
        
        console.log(address);
        state.addressInfo.id = address.addressId;
        state.addressInfo.name = address.userName;
        state.addressInfo.tel = address.userPhone;
        state.addressInfo.province = address.provinceName;
        state.addressInfo.city = address.cityName;
        state.addressInfo.county = address.regionName;
        state.addressInfo.addressDetail = address.detailAddress;
        let code = "";
        for (let key in tdist) {
          if (tdist[key][0] === address.regionName) {
            code = key;
          }
        }
        state.addressInfo.areaCode = code;
        state.addressInfo.isDefault = Boolean(address.defaultFlag);
      }
      console.log(state.areaList);
    });

    const onSave = async (content) => {
      const params = {
        userName: content.name,
        userPhone: content.tel,
        provinceName: content.province,
        cityName: content.city,
        regionName: content.county,
        detailAddress: content.addressDetail,
        defaultFlag: content.isDefault ? 1 : 0,
      };
      //新增或修改
      console.log(content);
  
      const id =
        (await state.type) === "add"
          ? addAddress(params)
          : ((params.addressId = route.query.addressId), editAddress(params));
      console.log(id);
      Toast("保存成功");
      setTimeout(() => {
        router.back();
      }, 1000);
    };
    const reset = () => {};
    const changeArea = (e) => {
      console.log(e);
    };
    return {
      ...toRefs(state),
      onSave,
      changeArea,
      reset,
    };
  },
};
</script>

<style lang="less">
@import "../common/style/mixin";
.edit {
  .van-field__body {
    textarea {
      height: 26px !important;
    }
  }
}
.address-edit-box {
  margin-top: 44px;
  .van-address-edit {
    .van-button--danger {
      background: @primary;
      border-color: @primary;
    }
    .van-switch--on {
      background: @primary;
    }
  }
}
</style>