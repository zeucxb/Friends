'use strict'

const Restify           = require('restify')
,     Configuration     = require('./lib/utils/configuration.js')
,     UserRoutes        = require('./lib/routes/user.js')

let Server = Restify.createServer(Configuration.server.info)

//middleware
Server.use(Restify.gzipResponse())
Server.use(Restify.bodyParser())

//routes
UserRoutes.forEach((route) => {
    Server[route.method](route.path, route.handler)
})

//startup
Server.listen(Configuration.server.port, () => {
    console.log(`${ Server.name } listening at ${ Server.url }`)
})