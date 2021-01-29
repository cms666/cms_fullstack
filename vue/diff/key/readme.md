# 响应式数据更新

出发 watcher 观察者里面的回调 vm._update 函数，去通知页面
这个过程中 vm_render()生成新的 vnode 的
vm._update 就会带着新的 vnode 去触发__path__过程（虚拟 DOM 和真实 DOM 比较）
{
  target: 'ul'
}

# __path__ 过程

1. 对比新旧节点是否是相同的节点（isSameNode）
2. isSameNode = false 不是相同节点，直接销毁旧的 vnode,渲染新的 vnode
3. 如果节点相同，要尽可能地做节点的复用
4. 如果新 vnode 是文字 vnode,那就直接调用浏览器的 api 替换文字
5. 如果新的 vnode 有新的 children，旧的 vnode 没有，直接 addvode 子节点
6. 如果旧的有 children，新的 vnode 没有，直接 removeVode 旧的子节点

# diff 核心比较

let oldStartIdx = 0 //旧首节点
let newStartIdx = 0 //新首节点

let oldEndIdx = oldCh.length - 1 //旧尾节点
let newEndIdx = newCh.length - 1 //新尾节点
function sameVnode(a, b){
  return (
    a.key === b.key && (
    a.tag === b.tag &&
    a.isComment = b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
    )
  )
}
