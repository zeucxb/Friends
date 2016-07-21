'use strict'

let configuration = {
    server: {
        host: process.env.API_HOST || 'localhost',
        port: process.env.API_PORT || 8080,
        info: {
            name: process.env.API_NAME || 'friends-api',
            version: process.env.API_VERSION || '1.0.0'
        }
    },
    enviroment: {
        stage: process.env.API_STAGE || 'development'
    }
}

module.exports = configuration