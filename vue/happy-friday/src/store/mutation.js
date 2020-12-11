const ADD_ITEMNUM = "ADD_ITEMNUM";
const REMEMBER_ANSWER='REMEMBER_ANSWER'
export default {
  //点击进入下一题
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  [REMEMBER_ANSWER](state,id){
    state.answer_id.push(id)
  }
};
