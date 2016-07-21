'use strict'

let controller = {

    getAll: (res, req, next) => {
        res.send([])
        return next()
    },
    
    getByQuery: (res, req, next) => {
        res.send('query')
        return next()
    },
    
    create: (res, req, next) => {
        res.send('create')
        return next()
    },

    updateByQuery: (res, req, next) => {
        res.send('query')
        return next()
    },
    
    deleteByQuery: (res, req, next) => {
        res.send('query')
        return next()
    }
}

module.exports = controller