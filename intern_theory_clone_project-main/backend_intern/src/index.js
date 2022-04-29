const express = require('express')

const app = express()
const classroomRoute = require('./Router/classroom_router')

const onlineRoute = require('./Router/online_router')
app.use(express.json())

app.use('/classroom', classroomRoute)

app.use('/online', onlineRoute)

module.exports = app
