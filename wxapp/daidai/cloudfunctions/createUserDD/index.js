// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cms-e-2gjc1me4d9fb2f2b'

cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  //先查看user库有没有这个openid

  const checkUser = await db.collection('userDD').where({
    openId: openId
  }).get()
  
  if (checkUser.data.length > 0) {
    await db.collection('userDD').doc(checkUser.data[0]._id).update({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex
      }
    })
  } else {
    const inseriResult = await db.collection('userDD').add({
      data: {
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        sex: event.sex,
        name: '',
        openId: event.userInfo.openId,
        university: '',
        createTime: new Date()
      }
    })
  }
}