const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

async function getResponse(fn) {
    return new Promise(resolve => {
        setTimeout(() => {
            const res = fn()
            resolve(res)
        }, 1000);
    })
}

const mockList = require('./mock/index')
mockList.forEach(item => {
    const {url, method,response} = item
    router[method](url, async ctx => {
        const res = await getResponse(response)
        ctx.body = res
    })
})

app.use(router.routes())
app.listen(3001)
