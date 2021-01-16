// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'cms-e-2gjc1me4d9fb2f2b'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const item = event.item
  
  if(item==='取消'){
    const id = event.id
    const check = await db.collection('orderDD').where({
      _id:id
    }).get()
    
    if (check.data.length > 0) {
      await db.collection('orderDD').doc(check.data[0]._id).update({
        data: {
          cancel:true
        }
      })
    }
  }
  if(item==='确认完成'){
    const id = event.id
    await db.collection('orderDD').doc(id).update({
        data: {
          finish:true
        }
   })
  }
  if(item==='完成'){
    const id = event.id
    await db.collection('orderDD').doc(id).update({
        data: {
          remove:true
        }
   })
  }
  if(item==='确认修改'){
    const id = event.id
    const check = await db.collection('orderDD').where({
      _id:id
    }).get()
    
    if (check.data.length > 0) {
      await db.collection('orderDD').doc(check.data[0]._id).update({
        data: {
          title: event.title,
          desc: event.desc,
          price: event.price,
          phone: event.phone,
          time: event.currentDate,
        }
      })
    }
  }
}