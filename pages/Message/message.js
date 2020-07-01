// pages/Message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:0,tab:0,
    messagelist:[]
    },
    onLoad: function (e){
      this.platList()
    },
    platList: function (e) {
      wx.showLoading({
        title: '加载中',
      })
      var that = this
      wx.request({
        url: 'http://learn.tx2.qrqy.net/api/product/getListByCon',
        success: res => {
          that.setData({
            messagelist: res.data.ret.data
          })
          console.log(res.data.ret.data)
        }
      })
      wx.hideLoading()
    }
})