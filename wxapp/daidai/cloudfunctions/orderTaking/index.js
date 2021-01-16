// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cms-e-2gjc1me4d9fb2f2b'

cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const userId = event.userInfo.openId

  if (event.item === '接单') {
    const getOrderDD = await db.collection('orderDD').where({
      receiver:userId
    }).get()   
    const getUser = await db.collection('userDD').get()
    let data = []
    for (let fd of getOrderDD.data) {
      if (!fd.finish) {
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
        obj['title'] = fd.title
        obj['university'] = fd.university
        for(let user of getUser.data){
          if(user.openId === fd.publisher){
            obj['avatar']=user.avatarUrl,
            obj['nickname']=user.nickName
          }
        }
        data.push(obj)
      }
    }

    return data
  }
  if (event.item === '我的接单') {
    const getOrderDD = await db.collection('orderDD').where({
      receiver:userId
    }).get()   
    const getUser = await db.collection('userDD').get()
    let data = []
    for (let fd of getOrderDD.data) {
      if (fd.finish) {
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
        obj['title'] = fd.title
        obj['university'] = fd.university
        for(let user of getUser.data){
          if(user.openId === fd.publisher){
            obj['avatar']=user.avatarUrl,
            obj['nickname']=user.nickName
          }
        }
        data.push(obj)
      }
    }

    return data
  }
  if (event.item === '按钮') {
    const orderId = event.id
    const updateorder = await db.collection('orderDD').doc(orderId).update({
      data: {
        orderTaking: true,
        receiver: userId
      }
    })
  }
}