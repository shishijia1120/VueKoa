const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')
const bodyParser = require('koa-body')
const cors = require('koa2-cors')
const Router = require('koa-router')


let user = require('./appApi/user.js')
let goods = require('./appApi/goods.js')

let router = new Router();
router.use('/user',user.routes())
router.use('/goods',goods.routes())

app.use(bodyParser())
app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())




// 立即执行函数
;(async () =>{
    await connect()
    initSchemas()
})()



app.listen(3000,()=>{
    console.log('[Server] starting at port 3000')
})