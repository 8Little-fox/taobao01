// pages/Shoppingcart/shoppingcart.js
Page({

  data: {
    checked: false,
    goods:[],
    goods0:[
      {
        checked:false,
        title:"ipad1",
        desc:'描述信息',
        price:999,
        cost:1999,
        num:2,
        img:"http://twst.isart.me/o_1dtahd01b14euaa215euetdbhfe.jpg"
      },
      {
        checked:false,
        title:"ipad1",
        desc:'描述信息',
        price:999,
        cost:1999,
        num:2,
        img:"http://twst.isart.me/o_1dtahd01bv6e1kgeun51e231fnvf.png"
      }
    ]
  },
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  goShoping(){
    this.setData({
      goods:this.data.goods0
    })
  }
})