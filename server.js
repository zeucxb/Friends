'use strict'

const Koa               = require('koa')
,     KoaRoute          = require('koa-route')
,     Configuration     = require('./lib/utils/configuration.js')
,     UserRoutes        = require('./lib/routes/user.js')

let Server = Koa()

UserRoutes.forEach((route) => {
    Server.use(KoaRoute[route.method](route.path, route.handler))
})

//startup
Server.listen(Configuration.server.port, () => {
    console.log(`${ Server.name } listening at ${ Server.url }`)
})

