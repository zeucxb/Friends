'use strict'

const Restify           = require('restify')
,     Configuration     = require('./lib/utils/configuration.js')

let Server = Restify.createServer(Configuration.server.info)

Server.use(Restify.gzipResponse())
Server.use(Restify.bodyParser())

Server.get('/try/', (req, res, next) => {
    res.send('me test')
    return next()
});

Server.listen(Configuration.server.port, () => {
    console.log(`${ Server.name } listening at ${ Server.url }`)
})