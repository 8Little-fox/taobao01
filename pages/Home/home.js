//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    item: 0,
    tab: 0,
    list: [],
    active: 0,
    imgUrls: [
      '../../images/img1.jpg',
      '../../images/img2.jpg',
      '../../images/img3.jpg',
      '../../images/img4.jpg',
      '../../images/img5.jpg',
      
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 5000, // 自动切换时间间隔
    duration: 500, // 滑动动画时长
    circular: true, // 是否采用衔接滑动
    pageType: 1,
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
          list: res.data.ret.data
        })
        console.log(res.data.ret.data)
      }
    })
    wx.hideLoading()
  }
})