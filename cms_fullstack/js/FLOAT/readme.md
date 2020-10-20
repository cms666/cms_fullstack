# 浮动

是文本脱离文档流

# 清除浮动

1. 在最后一个浮动元素后面加上一个冗余元素，给它设置 clear:both
2. 给父元素增加伪类
   .clearfix::after{
   content: '';
   display: block;
   clear: both;
   }
3. bfc
# margin 重叠
  1. bfc
