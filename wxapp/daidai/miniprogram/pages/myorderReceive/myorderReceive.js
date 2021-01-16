// pages/orderTaker/orderTaker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[]
  },
  orderDetail(e){
    wx.navigateTo({
      url: `../orderDetail/orderDetail?id=${e.currentTarget.dataset.id}&item=接单`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的接单'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const that = this
    wx.showNavigationBarLoading()
    wx.cloud.callFunction({
      name:'orderTaking',
      data:{
        item:'我的接单'
      },
      success(res){
        // console.log(res);
        that.setData({
          data:res.result
        })
      },
      complete() {
        wx.hideNavigationBarLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})