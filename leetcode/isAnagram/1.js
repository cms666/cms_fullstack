// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let maps = new Map();
  let mapt = new Map();
  for (let i = 0; i < s.length; i++) {
    let count = maps.get(s[i]);
    console.log(count);
    if (count) {
      maps.set(s[i], count+1);
    } else {
      maps.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    let count = mapt.get(t[i]);
    if (count>0) {
      mapt.set(t[i], count+1);
    } else {
      mapt.set(t[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    console.log(maps.get(s[i]),mapt.get(s[i]));
    if (maps.get(s[i]) !== mapt.get(s[i])) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram('abcd','abcd'));
