// pages/Detail/detail.js
Page({
  data: {
    list:'',
    showPop: false,    //购物车弹窗
    animationData: {}
  },
  onLoad:function(options){
    let listId=options.id;
      this.getdetail(listId)
  },
  getdetail:function(listId){
    // 请求详情数据
    var that =this
    wx.request({
      url: 'http://learn.tx2.qrqy.net/api/product/getById?id='+listId,
      success:res=>{
        that.setData({
          list:res.data.ret
        })
        console.log(res)
      } 
    })
    wx.hideLoading()
  },
  // 返回
  back:function(){
    wx.switchTab({
      url: '../Home/home',
    })
  },
  //购物车
  shopping:function(){
    this.setData({
      showPop:true
    })
   },
   // 显示底部弹层
 showModal: function() {
  var _this = this;
  var animation = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease',
    delay: 0
  })
  _this.animation = animation
  animation.translateY(300).step()
  _this.setData({
    animationData: animation.export(),
    showPop: true
  })
  setTimeout(function() {
    animation.translateY(0).step()
    _this.setData({
      animationData: animation.export()
    })
  }.bind(_this), 50)
},
// 隐藏底部弹层
hideModal: function() {
  var _this = this;
  // 隐藏遮罩层
  var animation = wx.createAnimation({
    duration: 500,
    timingFunction: "ease",
    delay: 0
  })
  _this.animation = animation
  animation.translateY(300).step()
  _this.setData({
    animationData: animation.export(),
  })
  setTimeout(function() {
    animation.translateY(0).step()
    _this.setData({
      animationData: animation.export(),
      showPop: false
    })
  }.bind(this), 200)
},
// 添加商品件数
onChange(event) {
  console.log(event.detail);
},
footerSubmit:function(){
  wx.showToast({
    title: '添加成功',
  })
},
onClickButton() {
  wx.showToast({
    title: '购买成功',
  })
  wx.switchTab({
    url: '../Shoppingcart/shoppingcart',
  })
 }
})