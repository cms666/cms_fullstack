// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'',
    nickname:'',
    university:'',
    university1:'',
    show:false,
  },
  university(){
    this.setData({
      show:true,
      university1:this.data.university
    })
  },
  university1(e){
    this.setData({
      university1:e.detail
    })
  },
  confirm(){
    let that = this
    that.setData({
      university:that.data.university1
    })
    wx.cloud.callFunction({
      name:'getUserInfo',
      data:{
        university:that.data.university1,
        item:'我的大学',
      }
    }).then(res=>{
      console.log(res);
      
    })
  },
  cancel(){},
  exit(e){
    console.log(e);
  },
  myorder(){
    wx.navigateTo({
      url: '../myorder/myorder',
    })
  },
  myorderReceive(){
    wx.navigateTo({
      url: '../myorderReceive/myorderReceive',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.setNavigationBarTitle({
      title: '我的'
    })
    wx.checkSession({
      success() {
        wx.cloud.callFunction({
          name:'getUserInfo',
          data:{
            item:"登录"
          }
        }).then(res =>{
          // console.log(res);
          let user = res.result.data[0]
          that.setData({
            avatarUrl:user.avatarUrl,
            nickname:user.nickName,
            university:user.university
          })
        })
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        wx.login() //重新登录
      }
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