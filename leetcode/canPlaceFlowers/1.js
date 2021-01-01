//种花问题
var canPlaceFlowers = function (flowerbed, n) {
  let first1 = flowerbed.indexOf(1);
  if (first1 === -1) return Math.ceil(flowerbed.length / 2) >= n;
  let count = 0;
  let last1 = flowerbed.lastIndexOf(1);
  let length = flowerbed.length;
  let pre = first1;
  for (let i = first1 + 1; i < length; i++) {
    if (flowerbed[i] === 1) {
      if (i - pre - 1 > 2) {
        count += Math.floor((i - pre - 2) / 2);
      }
      pre = i;
    }
  }
  if (first1 > 1 || length - last1 > 2) {
    count += Math.floor(first1 / 2) + Math.floor((length - last1 - 1) / 2);
  }
  return count >= n;
};
