const http = require('http')
const Mock = require('mockjs')
var urlModule = require('url')
const server = http.createServer()
server.on('request', function (req, res) {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    console.log('请求路径=' + req.url)
    var { pathname: url, query } = urlModule.parse(req.url, true)
    var callback = "callback=" + query.callback
    var url = url + `?${callback}`
    var pageIndex = query.pageIndex
    var commentId = query.id
    console.log(pageIndex + commentId)
    // 新闻
    if (url == `/getNewsList?${callback}`) {
        var data = Mock.mock({
            'news|5-10': [
                {
                    'id|+1': 1,
                    title: '@title',
                    text: '@cparagraph',
                    time: '@datetime',
                    number: '@integer(1, 1000)',
                    image: '@image(42x42,@color,@character)'
                }]
        });
        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    } else if (url == `/getNewsInfo/:id?${callback}`) {
        //新闻详情数据
        var data = Mock.mock({
            'newsinfo|1': [
                {
                    title: '@title',
                    text: '@cparagraph(2,8),@cparagraph(2,8)\t\r\n,@cparagraph(3,8)\t\r\n,@cparagraph(5,8)',
                    time: '@datetime',
                    number: '@integer(1, 1000)',
                    image: '@image(842x242,@color,@character)'
                }]
        });
        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    } else if (url == `/getComments/:id/:pageIndex?${callback}`) {

        // 模拟评论数据
        var data = Mock.mock({
            'comments|3-15': [
                {
                    'number|+1': 1,
                    name: '@cname',
                    time: '@datetime',
                    text: '@word'
                }]
        });
        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    } else if (url == `/postComment?${callback}`) {

        // 模拟发表评论数据
        var data = Mock.mock({
            'postComment|1': [
                {
                    name: '@cname',
                    time: '@now',
                    text: '@word'
                }]
        });
        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    } else if (url == `/getPro?${callback}`) {
        console.log('------')
        var data = Mock.mock({
            'getPro|5-10': [
                {
                    img: '@image(162x150,@color,@character)',
                    title: '@ctitle',
                    new: '@integer(500, 13000)',
                    old: '@integer(600, 15000)',
                    number: '@integer(1,500)'
                }
            ]
        })
        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    } else if (url == `/getProParamInfo/:id?${callback}`) {
        console.log('------')
        var data = Mock.mock({
            'proParamInfo|1': [
                {
                    number: '@id',
                    repertory: '@integer(1,100)',
                    time: '@datetime'
                }
            ]
        })
        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    } else if (url == `/getProPrice/:id?${callback}`) {
        console.log('+++++')
        var data = Mock.mock({
            'proPrice|1': [
                {
                    price: '@integer(500,5000)',
                    nowPrice: '@integer(400,4000)',
                    name:'@name'
                }
            ]
        })
        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    } else if (url == `/cart/getCarList?${callback}`) {
        var cartlist = query.ids
        var arr = [cartlist]
        console.log(cartlist)
        // 模拟后台数据，获取id的个数，模拟假数据
        arr.forEach(element => {
            console.log(element)
        });
        var data = Mock.mock({
            'carimg|1': [
                {
                    img: '@image(60*60,@color,@character)',
                }
            ]
        })

        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    }else if (url == `/getImagesShare/:id?${callback}`) {
        var cateid = query.id
        console.log('img--'+cateid)
        var data = Mock.mock({
            'imagesShare|5-10': [
                {
                    'id|+1': 0,
                    img:'@image(842x242,@color,@character)',
                    title:'@title',
                    text:'@cparagraph(2,5)'
                }
            ],
            'cate|6':[
                {
                    'id|+1': 0,
                    title:'@city'
                }
            ]
        })
        res.end(query.callback + "(" + JSON.stringify(data, null, 4) + ")")
    } 
    else {
        res.end('路径不符')
    }

})
server.listen(3000, function () {
    console.log('服务器启动成功')
})