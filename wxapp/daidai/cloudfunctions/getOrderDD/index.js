// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cms-e-2gjc1me4d9fb2f2b'

cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const openId = event.userInfo.openId
  const item = event.item
  //
  const getUserInfo = await db.collection('userDD').where({
    openId: openId
  }).get()
  // return getUserInfo
  if (item === '搜索') {
    const value = event.value
    // return value
    const getOrderDD = await db.collection('orderDD').orderBy('time', 'asc').where({
      title: db.RegExp({
        regexp: '.*' + value + '.*',
        options: 'i'
      })
    }).get()
    // return getOrderDD
    const getUser = await db.collection('userDD').get()
    let data = []
    for (let fd of getOrderDD.data) {
      if (!fd.orderTaking && fd.time > (Date.now() + 8 * 3600000) && !fd.remove && fd.university == getUserInfo.data[0].university) {
        let obj = {}
        for (let user of getUser.data) {
          if (user.openId === fd.publisher) {
            obj['avatar'] = user.avatarUrl,
              obj['nickname'] = user.nickName
          }
        }
        obj['id'] = fd._id
        obj['classify'] = fd.classify
        obj['desc'] = fd.desc
        obj['price'] = fd.price
        obj['time'] = timestampToTime(fd.time)
        obj['title'] = fd.title

        data.push(obj)
      }
    }
    return data
  }
  const getOrderDD = await db.collection('orderDD').orderBy('time', 'asc').get()
  function timestampToTime(timestamp) {
    let date = new Date(timestamp + 28800 * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return Y + M + D + h + m;
  }
  // return getOrderDD.data
  if (item === '发单') {
    let data = []
    for (let fd of getOrderDD.data) {
      if (openId === fd.publisher && !fd.remove && !fd.cancel) {
        let obj = {}
        obj['id'] = fd._id
        obj['classify'] = fd.classify
        obj['desc'] = fd.desc
        obj['finish'] = fd.finish
        obj['orderTaking'] = fd.orderTaking
        obj['phone'] = fd.phone
        obj['price'] = fd.price
        obj['publisher'] = fd.publisher
        obj['receiver'] = fd.receiver
        let now = Date.now()
        if (now > fd.time && !fd.orderTaking) {
          obj['tip'] = '超出时间无人接单'
        } else {
          obj['tip'] = '暂无人接单'
        }
        if (fd.orderTaking) {
          obj['tip'] = '进行中'
        }
        if (fd.finish) {
          obj['tip'] = '已完成'
        }
        obj['time'] = timestampToTime(fd.time)
        obj['title'] = fd.title
        obj['university'] = fd.university
        data.push(obj)
      }
    }
    return data
  }
  if (item === '我的发单') {
    let data = []
    for (let fd of getOrderDD.data) {
      if (openId === fd.publisher && (fd.remove || fd.cancel)) {
        let obj = {}
        obj['id'] = fd._id
        obj['classify'] = fd.classify
        obj['desc'] = fd.desc
        obj['price'] = fd.price
        let now = Date.now()
        if (fd.remove) {
          obj['tip'] = '已完成'
        } else {
          obj['tip'] = '已取消'
        }
        obj['time'] = timestampToTime(fd.time)
        obj['title'] = fd.title
        data.push(obj)
      }
    }
    return data
  }
  if (item === '帮代') {
    const getUser = await db.collection('userDD').get()
    let data = []
    for (let fd of getOrderDD.data) {
      if (!fd.orderTaking && fd.time > (Date.now() + 8 * 3600000) && !fd.remove && getUserInfo.data[0].university == fd.university) {
        let obj = {}
        obj['id'] = fd._id
        obj['classify'] = fd.classify
        obj['desc'] = fd.desc
        obj['finish'] = fd.finish
        obj['orderTaking'] = fd.orderTaking
        obj['phone'] = fd.phone
        obj['price'] = fd.price
        obj['publisher'] = fd.publisher
        obj['receiver'] = fd.receiver
        obj['time'] = timestampToTime(fd.time)
        obj['title'] = fd.title
        obj['university'] = fd.university
        for (let user of getUser.data) {
          if (user.openId === fd.publisher) {
            obj['avatar'] = user.avatarUrl,
              obj['nickname'] = user.nickName
          }
        }
        data.push(obj)
      }
    }
    return data
  }

}