import { utils } from '/utils/http.js'

Page({
  data: {
    imgUrl: utils.imgUrl
  },

  /**
   *  获取banner
   */
   getBanner() {
        let that = this,
            url = '/carousel/getCarousel'

        utils._post(
          url,
          {page: 1, size: 3, type: 1},
          res => {
            // console.log(res)
            that.setData({
              slider: res.data.img
            })
          },
          err => {
            console.log(err)
          }
        )
   },

   /**
    *  获取品牌
    */
  getBrand() {
    let that = this,
        url = '/brand/getBrand'

    utils._post(
      url,
      {},
      res => {
        // console.log(res)
        that.setData({
          brand: res.data.brand,
          chosen: res.data.brand[0].id
        })

        let brandId = this.data.chosen
        this.getGoods('1', brandId)
      },
      err => {
        console.log(err)
      }
    )
  },

  /**
   *  选择品牌
   */
  chooseBrand(e) {
    let that = this,
        id = utils.data(e)[0]
    
    that.setData({
      chosen: id
    })
    this.getGoods('1', id)
  },

  /**
   *  获取商品
   */
  getGoods(page, brandId) {
    let that = this,
        url = '/goods/getGoods'

    utils._post(
      url,
      {page: page, size: '6', brandId: brandId},
      res => {
        // console.log(res)
        that.setData({
          goods: res.data.goods,
          page: res.data.page
        })
      },
      err => {
        console.log(err)
      }
    )
  },

  /**
   *  到商品详情
   */
  goGoodsDetail(e) {
    let id = utils.data(e)[0]
    my.navigateTo({
      url: '/pages/goodsDetail/goodsDetail?id=' + id
    })
  },

  /**
   *  页面加载
   */
  onLoad() {
    this.getBanner()
    this.getBrand()
  }
})
