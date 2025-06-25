const express = require('express')
const app = express()
const {greeting} = require('./user')

app.get('/', (req,res) => res.send('This App Continuous Deployment is running properly!'))
app.get('/ping', (req,res) => res.send('Pong!'))
app.get('/youtube', (req,res) => res.send('Hello, youtube Ikhsan!'))
app.get('/hello/:name', (req,res) => {
    res.json({message:greeting(req.params.name)})
})
module.exports = app
