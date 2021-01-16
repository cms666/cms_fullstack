// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cms-e-2gjc1me4d9fb2f2b'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const item = event.item
  const id = event.id
  if(item==='发单'){
    const oneOrder = await db.collection('orderDD').where({
      _id:id
    }).get()
    let neworder = oneOrder.data
    let newuser = []
    if(oneOrder.data[0].orderTaking){
      const getReceiver = await db.collection('userDD').where({
        openId:oneOrder.data[0].receiver
      }).get()
      newuser = getReceiver.data
    }
    return {neworder, newuser}
  }

}