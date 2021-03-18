// app.js
import request from 'service/network.js'

App({
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    
    // let userInfo = wx.getStorageSync('userInfo') || {}
    // if(userInfo){
    //   this.globalData.userInfo = userInfo
    // }


    // //登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res)
    //   }
    // })
    // //获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  login() {
    //登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res)
        wx.getWeRunData({
          success: resrun => {
            // 拿 encryptedData 到开发者后台解密开放数据
            console.log(resrun)
            request({
              data:{
                'code':res.code,
                'encryptedData': resrun.encryptedData,
                'iv': resrun.iv
              },
              url: 'weixin/wxlogin',
            }).then(ress => {
              console.log(ress)
    
              // wx.setStorageSync('userId', res.data.userId)
              // this.globalData.userId=res.data.userId
              // wx.setStorageSync('dormitoryId', res.data.dormitoryId)
              // this.globalData.dormitoryId=res.data.dormitoryId
              // wx.redirectTo({
              //   url: '/pages/dormitory/dormitory',
              // })
              
            }).catch(err => {
              console.log(err)
            })
          }
        })
        
      }
    })
    //获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // wx.login({
    //   success: res => {
    //     wx.getUserInfo({
    //       success: getRes => {
    //         this.globalData.userInfo = getRes.userInfo
    //         console.log(res)
    //         // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //         // 所以此处加入 callback 以防止这种情况
    //         if (this.userInfoReadyCallback) {
    //           this.userInfoReadyCallback(getRes)
    //         }
    //       }
    //     })
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})
