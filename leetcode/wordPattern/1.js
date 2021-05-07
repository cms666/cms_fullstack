// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律
var wordPattern = function(pattern, s) {
  let news = s.split(' ')
  if(pattern.length!==news.length) return false
  for(let i = 0; i < pattern.length; i++){
    if(pattern.indexOf(pattern[i])!==news.indexOf(news[i])) return false
  }
  return true
};