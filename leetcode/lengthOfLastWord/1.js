var lengthOfLastWord = function (s) {
  let s1=s.replace(/(\s*$)/g, "")
  let news=s1.split(' ');
  //console.log(news)
  return news[news.length - 1].length;
};
console.log(lengthOfLastWord(" a "));
