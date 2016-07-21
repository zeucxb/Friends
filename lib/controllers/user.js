'use strict'

let controller = {

    getAll: (req, res, next) => {
        res.send('test')
        return next()
    },
    
    getByQuery: (req, res, next) => {
        res.send(req.params.query)
        return next()
    },
    
    create: (req, res, next) => {
        res.send('create')
        return next()
    },

    updateByQuery: (req, res, next) => {
        res.send('query')
        return next()
    },
    
    deleteByQuery: (req, res, next) => {
        res.send('query')
        return next()
    }
}

module.exports = controller