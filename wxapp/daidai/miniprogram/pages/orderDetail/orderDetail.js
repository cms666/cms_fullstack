// miniprogram/pages/orderDetail/orderDetail.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    classify: '',
    time: '',
    title: '',
    desc: '',
    price: '',
    phone: '',
    receiver: {},
    tip: '',
    ing: true,
    finish: true,
    init: true,
    detailData: {},
    help: true,
    receive: true,
    finish2: true
  },
  cancel() {
    let that = this
    wx.cloud.callFunction({
      name: 'updateOrder',
      data: {
        item: '取消',
        id: that.data.id
      }
    }).then(res => {
      Toast.success('已取消')

      wx.switchTab({
        url: '../order/order',
      })
    })
  },
  update() {
    let that = this
    let data = JSON.stringify(that.data.detailData)
    let item = '修改'
    wx.navigateTo({
      url: `../publish/publish?data=${data}&item=${item}`,
    })
  },
  timestampToTime(timestamp) {
    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return Y + M + D + h + m;
  },
  receive() {
    // console.log(1);
    let that = this
    wx.cloud.callFunction({
      name: 'orderTaking',
      data: {
        id: that.data.id,
        item: '按钮'
      },
      success(res) {
        Toast.success('接单成功')
        wx.switchTab({
          url: '../orderTaker/orderTaker'
        })
      },
    })
  },
  finish() {
    Toast.success('完成')
    let that = this
    wx.cloud.callFunction({
      name: 'updateOrder',
      data: {
        item: '完成',
        id: that.data.id
      }
    }).then(res => {
      wx.hideToast()
      wx.switchTab({
        url: '../order/order',
      })
    })
  },
  finish2() {
    Toast.success('完成')
    let that = this
    wx.cloud.callFunction({
      name: 'updateOrder',
      data: {
        item: '确认完成',
        id: that.data.id
      }
    }).then(res => {
      wx.hideToast()
      wx.switchTab({
        url: '../orderTaker/orderTaker',
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    if (options.item === '帮代') {
      that.setData({
        help: false
      })
    }
    if (options.item === '接单') {
      that.setData({
        finish2: false
      })
    }

    wx.cloud.callFunction({
      name: 'oneOrder',
      data: {
        id: options.id,
        item: '发单'
      }
    }).then(res => {
      // console.log(res);
      let data = res.result.neworder[0]
      that.setData({
        detailData: data,
        id: data._id,
        classify: data.classify,
        time: that.timestampToTime(data.time),
        title: data.title,
        desc: data.desc,
        price: data.price,
        phone: data.phone,
        receiver: res.result.newuser.length === 0 ? [] : res.result.newuser[0]
      })
      if (Date.now() > data.time && !data.orderTaking) {
        that.setData({
          tip: '超出截止时间无人接单',
          init: false
        })
      } else {
        that.setData({
          tip: '暂无人接单',
          init: false
        })
      }
      if (data.orderTaking && !data.finish) {
        that.setData({
          tip: '任务进行中',
          ing: false,
          init: true,
          receive: false
        })
      }
      if (data.finish) {
        that.setData({
          tip: '任务已完成',
          finish: false,
          init: true,
          receive: false
        })
      }
      if (data.cancel || data.remove) {
        that.setData({
          finish: true,
          init: true,
          help: true,
          finish2: true,
          ing: true
        })
      }
    })
    // console.log(123);

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