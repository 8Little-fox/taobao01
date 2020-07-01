// pages/My/my.js
Page({
  data: {
  },

  order: function (e) {
    wx.redirectTo({
      url: '/pages/order/order',
    })
  },


obligation: function (e) {
  wx.redirectTo({
    url: '/pages/obligation/obligation',
  })
},
})