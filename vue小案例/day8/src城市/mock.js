import Mock from 'mockjs'

export default Mock.mock({
    'list|10-20':[
        {
            'title':'@ctitle(2,3)',
            'content':'@ctitle(10,20)',
            'time':'@date("yyyy-mm-dd")',
            'bool':'@boolean',
            'type|0-3':0
        }
    ]
});