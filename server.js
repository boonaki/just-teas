const express = require('express')
const app = express()
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

require('dotenv').config()
const PORT = 8000

app.use(express.static('public'))
app.set('view engine', 'ejs')
// app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    // res.sendFile(__dirname + '/index.html')
    const url = 'https://tea-api-boonaki.herokuapp.com/api/teas'
    fetch(url)
        .then(res => res.json()) //parse response as json
        .then(data => {
            res.render('index.ejs', { teainfo : data })
        })
        .catch(err => {
            console.error(err)
        })
})

app.listen(PORT, () => {
    console.log('server is running')
})