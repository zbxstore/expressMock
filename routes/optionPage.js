var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/uploadOptions', function (req, res, next) {
    
    const options = req.body.options;
    res.json(options)

    
});




router.get('/downloadOptions', function (req, res, next) {
    res.json(dataLoad)
});




module.exports = router;



var dataLoad = {
    "data": {
        "options": {
            "priceLineForList": true,
            "selectedCategories": [
                "母婴",
                "运动",
                "数码",
                "电器",
                "日用"
            ],
            "priceLineForDetail": false,
            "needPush": false,
            "selectedKeywords": [
                "京东",
                "天猫",
                "苏宁易购",
                "12号店"
            ],
            "categories": [
                "食品",
                "母婴",
                "个护",
                "数码",
                "电器",
                "日用",
                "运动",
                "服饰鞋帽",
                "玩模乐器",
                "办公",
                "家装",
                "汽车",
                "图书",
                "旅行"
            ]
        }
    },
    "message": "测试内容7u1j",
    "timestamp": 53712,
    "code": 100
}


var dataUp = {
    "timestamp": 81877,
    "code": 38642,
    "message": "测试内容h715"
}


/* let categorieMap = {};

for (i in categories) {
    let category = categories[i];
    categorieMap[category] = false;
}  

for (i in selectedCategories) {
    let selectedCategory = selectedCategories[i];
    categorieMap[selectedCategory] = true;
}
 */