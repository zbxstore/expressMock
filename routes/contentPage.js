var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getProductPriceLine', function (req, res, next) {
    res.json(dataProductPriceLine)
});

router.get('/getAllMallPricce', function (req, res, next) {
    res.json(dataAllMallPricce)
});

router.get('/getProductEvaluateInfo', function (req, res, next) {
    res.json(dataProductEvaluateInfo)
});

router.get('/getBrandInfo', function (req, res, next) {
    res.json(dataBrandInfo)
});


module.exports = router;



var dataProductPriceLine = {
    "code": 100,
    "timestamp": 33405,
    "data": {
        "priceLine": {
            "historyHighest": 180,
            "historyLowest": 80,
            "days": [
                {
                    "day": "03-19",
                    "price": 414
                },
                {
                    "day": "04-19",
                    "price": 214
                }, 
                {
                    "day": "05-19",
                    "price": 154
                },
                {
                    "day": "06-19",
                    "price": 284
                },
            ],
            "current": 120
        }
    },
    "message": "价格走势"
};



var dataAllMallPricce = {
    "code": 100,
    "message": "全网比价",
    "timestamp": 16326,
    "data": {
        "mallPrices": [
            {
                "name": "相宜本草 INOHERB",
                "url": "https://xybc.tmall.com/shop/view_shop.htm?user_number_id=90919986&ali_trackid=2%3Amm_112928821_13812316_148750065%3A1524645493_224_86316425&clk1=6b5874f7a5a6a6a7c24b88dc33eadf9f&upsid=6b5874f7a5a6a6a7c24b88dc33eadf9f",
                "logo": "http://127.0.0.1:3000/images/all-jd.png",
                "price": 6068
            },
            {
                "name": "INOHERB",
                "url": "https://xybc.tmall.com/shop/view_shop.htm?user_number_id=90919986&ali_trackid=2%3Amm_112928821_13812316_148750065%3A1524645493_224_86316425&clk1=6b5874f7a5a6a6a7c24b88dc33eadf9f&upsid=6b5874f7a5a6a6a7c24b88dc33eadf9f",
                "logo": "http://127.0.0.1:3000/images/all-taobao.png",
                "price": 46068
            },  
            {
                "name": "京东",
                "url": "https://xybc.tmall.com/shop/view_shop.htm?user_number_id=90919986&ali_trackid=2%3Amm_112928821_13812316_148750065%3A1524645493_224_86316425&clk1=6b5874f7a5a6a6a7c24b88dc33eadf9f&upsid=6b5874f7a5a6a6a7c24b88dc33eadf9f",
                "logo": "http://127.0.0.1:3000/images/all-suning.png",
                "price": 68
            },   
            {
                "name": "天猫",
                "url": "https://xybc.tmall.com/shop/view_shop.htm?user_number_id=90919986&ali_trackid=2%3Amm_112928821_13812316_148750065%3A1524645493_224_86316425&clk1=6b5874f7a5a6a6a7c24b88dc33eadf9f&upsid=6b5874f7a5a6a6a7c24b88dc33eadf9f",
                "logo": "http://127.0.0.1:3000/images/all-taobao.png",
                "price": 6068
            },
            {
                "name": "天猫",
                "url": "https://xybc.tmall.com/shop/view_shop.htm?user_number_id=90919986&ali_trackid=2%3Amm_112928821_13812316_148750065%3A1524645493_224_86316425&clk1=6b5874f7a5a6a6a7c24b88dc33eadf9f&upsid=6b5874f7a5a6a6a7c24b88dc33eadf9f",
                "logo": "http://127.0.0.1:3000/images/all-jd.png",
                "price": 460
            }
            

        ]
    }
}


var dataProductEvaluateInfo = {
    "code": 100,
    "message": "好评率",
    "data": {
        "evaluateInfo": {
            "badRate": 5,
            "goodRate": 92,
            "tags": [
                {
                    "tag": "质量好",
                    "num": 12
                },
                {
                    "tag": "价格便宜",
                    "num": 122
                }, 
                {
                    "tag": "物流块",
                    "num": 36
                }, 
                {
                    "tag": "不好用",
                    "num": 782
                }               
            ],
            "sum": 80010,
            "normalRate": 3
        }
    },
    "timestamp": 36434
}

var dataBrandInfo = {
    "timestamp": 37723,
    "message": "品牌信息",
    "data": {
        "brandInfo": {
            "url": "https://item.jd.com/7275691.html",
            "age": 31,
            "sold": 25566,
            "discount": 227,
            "hot": 2824,
            "name": "华为",
            "score": 9.26
        }
    },
    "code": 100
}