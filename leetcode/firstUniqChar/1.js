// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
let map = new Map()
for(let i =0;i<s.length;i++){
  if(map.has(s[i])){
    map.set(s[i],map.get(s[i])+1)
  }
  else{
    map.set(s[i],i)
  }
}
for(let key of map.keys()){
    if(map.get(key)===s.indexOf(key)){
      return map.get(key)
    }
}
return -1
console.log(firstUniqChar('leetcode'));