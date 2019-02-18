var Mock = require('mockjs');
var data = Mock.mock({
    'news|5-10':[{
        'id|+1':1,
        title:'@title',
        text:'@cparagraph',
        time:'@date',
        number:'@integer(1, 1000)',
        image:'@image(42x42,#eee,Logo)'
    }]
});
console.log(JSON.stringify(data,null,4))