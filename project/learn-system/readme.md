# 学习系统
  客户？ 
  需求  存储同学信息，OA
  - 学籍
    1. 同学的信息登入及完善系统
      原型设计表单 小piu
    2. 照片上传功能
      云开发文件上传

  - 项目的形式
    1. 小程序 用户端
      vant + 云开发
      微信/QQ小程序
    2. PC 端的admin 后台系统
      VUE + Element
      分班级  分页  列表
      详情
  - 功能要求细分
    1. 角色区分  role -1>1>2>3>4>5>6  数字越大  权限越大
      admin/teacher/stuadmin/student|trystudent
      user _id uid(学号 10000) pro_num  has_resume has_job shixi_danwei  zhuanzheng_danwei 
      shixi_paymeng zhuanzheng_paymeng score(荣誉) bid can_waibao
      ban
        bid bname
    2. 试听功能|邀请 运营 分享
      生成图功能  百度一下  https://juejin.im/post/6844903663840788493
    3. 学习跟进系统
      - GitHub 提交 
        收集用户的GitHub账号
        图  爬虫
      - 主动提交
        1. 每个人都一张图 新的覆盖旧的
          gitPic_id url uid  bid
        2. ts 标红
        3. 列表  班级
      - 文章
        articles
        _id uid title desc ts is_top love_num
        url
        love_num  怎么计算
        user love_num  0  articles count save
        >0 写文章时 +1
        post_article
      - 项目
      - leetcode
      - 外包
        即时计件 倒计时
        提交代码记录
        付费记录
        开源出去？
      
