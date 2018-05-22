import { utils } from '/utils/http.js'

Page({
  data: {
    imgUrl: utils.imgUrl
  },

  /**
   *  到我的订单
   */
  goOrder() {
    my.navigateTo({
      url: '/pages/account/order/order'
    })
  },

  /**
   *  到现金抵用券
   */
  goCoupon() {
    my.navigateTo({
      url: '/pages/account/coupon/coupon'
    })
  },

  /**
   *  到帮助中心
   */
  goHelp() {
    my.navigateTo({
      url: '/pages/account/help/help'
    })
  },

  onLoad() {},
});
