require('./config$');

function success() {
require('../..//app');
require('../..//pages/home/home');
require('../..//pages/goodsDetail/goodsDetail');
require('../..//pages/account/account');
require('../..//pages/account/order/order');
require('../..//pages/account/coupon/coupon');
require('../..//pages/account/help/help');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
