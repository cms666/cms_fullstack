const two_num = {
  nums: [2, 7, 11, 19],
  target: 9,
  two: function () {
    let i,
      j,
      len = this.nums.length;
    for (i = 0; i < len - 1; i++) {
      for (j = i + 1; j < len; j++) {
        if (this.nums[i] + this.nums[j] ==this.target) {
          return [i, j];
        }
      }
    }
    return [];
  },
};
console.log(two_num.two())