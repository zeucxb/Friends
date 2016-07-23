'use strict'

const controller = require('../controllers/user.js')

let routes = [
    
    {
        method: 'get',
        path: '/v1/user/',
        handler: controller.getAll
    },

    {
        method: 'get',
        path: '/v1/user/:query',
        handler: controller.getByQuery
    },
    
    {
        method: 'post',
        path: '/v1/user/',
        handler: controller.create
    },
    
    {
        method: 'put',
        path: '/v1/user/:query',
        handler: controller.updateByQuery
    },

    {
        method: 'delete',
        path: '/v1/user/:query',
        handler: controller.deleteByQuery
    }
]

module.exports = routes