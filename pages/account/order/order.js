import { utils } from '/utils/http.js'

Page({
  data: {
    imgUrl: utils.imgUrl,
    nav: '1'
  },

  /**
   *  切换导航
   */
  changeNav(e) {
    let id = utils.data(e)[0]

    this.setData({
      nav: id
    })
  },

  onLoad() {},
});
