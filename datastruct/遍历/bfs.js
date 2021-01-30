function BFS(root){
  const queue = [] //初始化一个队列
  //入口坐标入队
  queue.push(root)
  //队列不为空，
  while(queue.length){
    const top = queue[0]  //去除队头元素
    访问top
    //检查从top出发还能抵达的元素
    `for('从top出发还能遍历到的所有元素'){
      queue.push(从top出发还能遍历到的所有元素)
    }`
    queue.shift() //访问完毕
  }

}