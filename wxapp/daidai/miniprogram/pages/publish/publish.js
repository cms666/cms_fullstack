// pages/publish/publish.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
import timestampToTime from '../utils/timestampToTime'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: '',
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2021, 10, 1).getTime(),
    currentDate: new Date().getTime(),
    show: false,
    time: '',
    title: '',
    desc: '',
    price: '',
    phone: '',
    showpublish: false,
    showupdate: true,
    id: ''
  },
  title(e) {
    this.setData({
      title: e.detail
    })
  },
  desc(e) {
    this.setData({
      desc: e.detail
    })
  },
  price(e) {
    this.setData({
      price: e.detail
    })
  },
  phone(e) {
    this.setData({
      phone: e.detail
    })
  },
  update() {
    let that = this
    wx.cloud.callFunction({
      name: 'updateOrder',
      data: {
        id: that.data.id,
        item: '确认修改',
        title: that.data.title,
        desc: that.data.desc,
        price: that.data.price,
        phone: that.data.phone,
        time: that.data.currentDate,
      },
      success(res) {
        Toast.success('修改成功')
        wx.switchTab({
            url: '../order/order'
          })
      },
      fail(err) {
        // console.log(err);
      }
    })
  },
  publish() {
    let that = this
    wx.cloud.callFunction({
      name: 'createOrderDD',
      data: {
        title: that.data.title,
        desc: that.data.desc,
        price: that.data.price,
        phone: that.data.phone,
        time: that.data.currentDate,
        classify: that.data.classify,
      },
      success(res) {
        Toast.success('发布成功')
        wx.switchTab({
          url: '../order/order'
        })
      },
      fail(err) {
        // console.log(err);
      }
    })
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  confirm(value) {
    this.setData({ show: false, time: timestampToTime(this.data.currentDate) });
  },
  cancel() {
    this.setData({ show: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this
    if (options.item == '修改') {
      let data = JSON.parse(options.data)
      // console.log(data);
      that.setData({
        id: data._id,
        title: data.title,
        desc: data.desc,
        price: data.price,
        phone: data.phone,
        currentDate: data.time,
        time: timestampToTime(data.time),
        classify: data.classify,
        showpublish: true,
        showupdate: false
      })
    } else {
      that.setData({
        classify: options.classify
      })
    }

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