import { utils } from '/utils/http.js'

Page({
  data: {
    imgUrl: utils.imgUrl,
    nav: '1',
    buy: false,
    type: '1',
    explain: false
  },

  /**
   *  选择详情导航
   */
  changeNav(e) {
    let id = utils.data(e)[0]
    this.setData({
      nav: id
    })
  },

  /**
   *  购买弹框
   */
   chooseBuy(e) {
     let id = utils.data(e)[0]
     this.setData({
       buy: true,
       type: id
     })
   },

  /**
   *  关闭购买弹框
   */
   closeBuy() {
     this.setData({
       buy: false
     })
   },

  /**
   *  说明弹框
   */
   chooseExplain() {
     this.setData({
       explain: true
     })
   },

  /**
   *  关闭说明弹框
   */
   closeExplain() {
     this.setData({
       explain: false
     })
   },

   /**
    *  获取商品详情
    */
  getGoodsDetail(id) {
    let that = this,
        url = '/goods/getGoodsOne'

    utils._post(
      url,
      {id: id},
      res => {
        console.log(res)
        if (res.result === '1') {
          let data = res.data,
              showImg = data.showImg.split(',')
          
          that.setData({
            slider: showImg,
            goodDetail: data
          })
        }
      },
      err => {
        console.log(err)
      }
    )
  },

  onLoad(query) {
    let id = query.id
    this.getGoodsDetail(id)  //  获取商品详情
  }
})
