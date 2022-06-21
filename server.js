const express = require('express')
const app = express()
const PORT = 8000
// const fetch = require('node-fetch')
require('dotenv').config()

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log('server is running')
})