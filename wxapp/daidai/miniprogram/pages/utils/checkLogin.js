const checkLogin = (path) => {
  wx.getSetting({
    success(settingRes) {
      //已经授权
      //  console.log(settingRes);
      if (settingRes.authSetting['scope.userInfo']) {
        wx.getUserInfo({   //获取用户信息
          success(infoRes) {
            // console.log(infoRes);
            wx.cloud.callFunction({
              name: 'createUserDD',
              data: {
                avatarUrl: infoRes.userInfo.avatarUrl,
                name: '',
                nickName: infoRes.userInfo.nickName,
                sex: infoRes.userInfo.gender,
                university:''
              },
              success(res) {
                //  console.log(res);
                if(path){
                  wx.switchTab({
                    url: `../${path}/${path}`,
                  })
                }
              },
              fail(err) {
                console.log('错误', err);
              }
            })
          },
        })
      } else {
        wx.redirectTo({
          url: '../login/login',
        })
      }
    },
  })
}

export default checkLogin