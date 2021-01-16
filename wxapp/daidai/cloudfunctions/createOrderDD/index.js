// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cms-e-2gjc1me4d9fb2f2b'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = event.userInfo.openId
  const imformation = event

  //检查哪个大学
  const checkUniversity = await db.collection('userDD').where({
    openId: openId
  }).get()
  const inseriResult = await db.collection('orderDD').add({
    data: {
      publisher:openId,
      classify:imformation.classify,
      title:imformation.title,
      desc:imformation.desc,
      price:imformation.price,
      phone:imformation.phone,
      time: imformation.time,
      university:checkUniversity.data[0].university,
      receiver:'',
      orderTaking:false,
      finish:false,
      cancel:false,
      remove:false
    }
  })
  return inseriResult
}