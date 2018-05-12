var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getListOfChina', function (req, res, next) {
    res.json(dataChina)
});
router.get('/getListOfLowest', function (req, res, next) {
    res.json(dataLowest)
});

router.get('/getListOfMyFocus', function (req, res, next) {
    res.json(dataFocus)
});

router.get('/getListOfOversea', function (req, res, next) {
    res.json(dataSea)
});

module.exports = router;



var dataChina = {
    "timestamp": 87646,
    "data": {
        "productList": [
            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "20元券",
                "isHistoryLowest": true,
                "createAt": 1524190500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "1280.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "京东",
                "fromNum": 3,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/00665B41FA.jpeg_resize.jpg"
            },
            {
                "title": "这是一个标题",
                "coupon": "20元券",
                "isHistoryLowest": false,
                "createAt": 500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "39.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "天猫",
                "fromNum": 56,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/2F7411E72F.jpeg_resize.jpg"
            },
            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "100元券",
                "isHistoryLowest": true,
                "createAt": 1177887500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "68.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "美团",
                "fromNum": 563,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180420/49DAED7808.jpeg_resize.jpg"
            },
            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "100元券",
                "isHistoryLowest": true,
                "createAt": 1177887500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "68.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "美团",
                "fromNum": 563,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/5B30AF5342.jpeg_resize.jpg"
            },

            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "100元券",
                "isHistoryLowest": true,
                "createAt": 1177887500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "68.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "美团",
                "fromNum": 563,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/C9E43FFAEA.jpeg"
            },

            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "100元券",
                "isHistoryLowest": true,
                "createAt": 1177887500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "68.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "美团",
                "fromNum": 563,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/C9E43FFAEA.jpeg"
            },

                        {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "100元券",
                "isHistoryLowest": true,
                "createAt": 1177887500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "68.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "美团",
                "fromNum": 563,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/C9E43FFAEA.jpeg"
            },

            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "100元券",
                "isHistoryLowest": true,
                "createAt": 1177887500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "68.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "美团",
                "fromNum": 563,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/C9E43FFAEA.jpeg"
            },

            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "100元券",
                "isHistoryLowest": true,
                "createAt": 1177887500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "68.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "美团",
                "fromNum": 563,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/C9E43FFAEA.jpeg"
            },

            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "100元券",
                "isHistoryLowest": true,
                "createAt": 1177887500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "68.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "美团",
                "fromNum": 563,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180421/C9E43FFAEA.jpeg"
            },








        ]
    },
    "message": "国内折扣",
    "code": 57011
}

var dataLowest = {
    "code": 73288,
    "message": "历史最低",
    "data": {
        "productList": [
            {
                "title": "巴拉巴拉雁3童装4男童5夏装2018新款6夏款7儿童8运动套装9岁潮（券）",
                "coupon": "20元券",
                "isHistoryLowest": false,
                "createAt": 1524190500046,
                "url": "https://www.qiang100.com/zhi/16240362.html",
                "price": "39.0元",
                "uuid": "16240362",
                "isHistoryNewLowest": true,
                "sourceName": "天猫",
                "fromNum": 56533,
                "logo": "https://static-zhi-image.qiang100.com/zdmimg/20180420/49DAED7808.jpeg_resize.jpg"
            }
        ]
    },
    "timestamp": 48714
}


var dataFocus = {
    "code": 43037,
    "message": "我的关注",
    "timestamp": 11413,
    "data": {
        "productList": [
            {
                "sourceName": "测试内容5kxv",
                "createAt": 74833,
                "uuid": "测试内容emvg",
                "isHistoryNewLowest": false,
                "url": "测试内容4ies",
                "price": "测试内容nd2l",
                "title": "测试内容z8c9",
                "fromNum": 73277,
                "coupon": "测试内容b624",
                "isHistoryLowest": true,
                "logo": "测试内容v09o"
            }
        ]
    }
}

 
var dataSea = {
    "message": "海淘折扣",
    "timestamp": 67810,
    "data": {
        "productList": [
            {
                "url": "测试内容c7k4",
                "price": "测试内容el27",
                "title": "测试内容26b7",
                "uuid": "测试内容5eh5",
                "fromNum": 55746,
                "sourceName": "测试内容1emw",
                "coupon": "测试内容651d",
                "isHistoryLowest": false,
                "createAt": 43648,
                "isHistoryNewLowest": false,
                "logo": "测试内容o6te"
            }
        ]
    },
    "code": 87685
} 