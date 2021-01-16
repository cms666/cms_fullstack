// pages/help/help.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    classify: ['全部', '代课', '外卖', '快递', '代买', '打印', '其它',],
    value: '',
    allData: [],
    data: [],
    refresh: false,
    scroll: 0
  },
  onPageScroll: function (e) {
    let that = this
    if (e.scrollTop <= 0) {
      e.scrollTop = 0;
    } else if (e.scrollTop > wx.getSystemInfoSync().windowHeight) {
      // console.log(wx.getSystemInfoSync().windowHeight);
      // e.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    if (e.scrollTop > that.data.scroll) {
      that.setData({
        refresh: true
      })
    } 
    if(e.scrollTop < that.data.scroll) {
      that.setData({
        refresh: false
      })
    }
    setTimeout(function () {
      that.setData({
        scroll: e.scrollTop
      })
    }, 0)
  },
  receive(e) {
    // console.log(1);
    wx.cloud.callFunction({
      name: 'orderTaking',
      data: {
        id: e.target.dataset.id,
        item: '按钮'
      },
      success(res) {
        wx.showToast({
          title: '接单成功',
          icon: 'success',
          duration: 1000,
          success: wx.switchTab({
            url: '../orderTaker/orderTaker'
          })
        })
      },
    })
    this.initData()
  },
  orderDetail(e) {
    wx.navigateTo({
      url: `../orderDetail/orderDetail?id=${e.currentTarget.dataset.id}&item=帮代`,
    })
  }
  ,
  searchChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    this.initData(this.data.value)
  },
  onClick() {
    this.initData(this.data.value)
  },
  classifyChange(event) {
    
    // console.log(event);
    switch (event.detail.name) {
      case 0:
        this.setData({
          data: this.data.allData
        })
        break;
      case 1:
        let newarr = []
        for (let item of this.data.allData) {
          if (item.classify === '代课') {
            newarr.push(item)
          }
        }
        this.setData({
          data: newarr
        })
        break;
      case 2:
        let newarr2 = []
        for (let item of this.data.allData) {
          if (item.classify === '外卖') {
            newarr2.push(item)
          }
        }
        this.setData({
          data: newarr2
        })
        break;
      case 3:
        let newarr3 = []
        for (let item of this.data.allData) {
          if (item.classify === '快递') {
            newarr3.push(item)
          }
        }
        this.setData({
          data: newarr3
        })
        break;
      case 4:
        let newarr4 = []
        for (let item of this.data.allData) {
          if (item.classify === '代买') {
            newarr4.push(item)
          }
        }
        this.setData({
          data: newarr4
        })
        break;
      case 5:
        let newarr5 = []
        for (let item of this.data.allData) {
          if (item.classify === '打印') {
            newarr5.push(item)
          }
        }
        this.setData({
          data: newarr5
        })
        break;
      case 6:
        let newarr6 = []
        for (let item of this.data.allData) {
          if (item.classify === '其它') {
            newarr6.push(item)
          }
        }
        this.setData({
          data: newarr6
        })
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  refresh(){
    this.initData(this.data.value)
  },
  //获取更新数据
  initData(value) {
    let that = this
    // console.log(value);
    wx.showNavigationBarLoading()
    wx.cloud.callFunction({
      name: 'getOrderDD',
      data: {
        item: '搜索',
        value:value
      },
      success(res) {
        // console.log(res);
        that.setData({
          allData: res.result,
          data: res.result
        })

      },
      complete() {
        if(that.data.allData.length === 0){
           Toast.fail('未查到信息')
        }
        wx.hideNavigationBarLoading()
      }
    })

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    this.setData({
      value:options.value
    })
    this.initData(this.data.value)
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