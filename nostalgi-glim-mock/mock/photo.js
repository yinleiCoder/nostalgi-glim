const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
    {
        url: '/api/category',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: [
                    {
                        id: Random.id(),
                        title: Random.ctitle(),
                    }
                ]
            }
        }
    }
]