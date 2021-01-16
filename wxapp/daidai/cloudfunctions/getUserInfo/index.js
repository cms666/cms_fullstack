// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cms-e-2gjc1me4d9fb2f2b'

cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const openId = event.userInfo.openId
  const item = event.item
  const getUserInfo = await db.collection('userDD').where({
    openId: openId
  }).get()
  if (item === '登录') {
    return getUserInfo
  }
  if (item === '我的大学') {
    const university = event.university
    const univ = await db.collection('userDD').doc(getUserInfo.data[0]._id).update({
      data: {
        university: university
      }
    })
    return univ
  }
}