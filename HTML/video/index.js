// 拿到要操作的dom结构
//在这个dom上滑动鼠标能控制滑块的位置
//能控制这个dom的高度变化
//根据dom的值来调整播放速度

let speed = document.querySelector('.speed');
let bar = document.querySelector('.speed-bar');
let video = document.querySelector('.flex')
speed.addEventListener('mousemove',function(e){
  let y = e.pageY - speed.offsetTop;     //offsettop某个结构到浏览器顶部的距离
  let percent = y / speed.offsetHeight;  //offsetheight 某个结构的高度
  let min = 0.4;
  let max = 4;
  let height = Math.round(percent * 100) + '%';
  let playbackRate = percent * (max -min) + min;
  bar.style.height = height;
  video.playbackRate = playbackRate;
  bar.textContent = playbackRate.toFixed(2) + 'x'
})

