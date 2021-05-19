const express = require('express')
const consign = require('consign')

module.exports = ap => {

const app = express()

    consign()
    .include('controllers')
    .into(app)
    return app
} 