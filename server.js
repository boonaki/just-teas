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
    res.sendFile(__dirname + '/index.html')
})

app.get('/black', (req,res) => {
    const urlBlack = 'https://tea-api-boonaki.herokuapp.com/api/teas/black'
    fetch(urlBlack)
        .then(res => res.json()) //parse response as json
        .then(data => {
            // console.log(data)
            res.render('index.ejs', { teainfo : data })
        })
        .catch(err => {
            console.error(err)
        })
})

app.get('/green', (req,res) => {
    const urlGreen = 'https://tea-api-boonaki.herokuapp.com/api/teas/green'
    fetch(urlGreen)
        .then(res => res.json()) //parse response as json
        .then(data => {
            res.render('index.ejs', { teainfo : data })
        })
        .catch(err => {
            console.error(err)
        })
})

app.get('/oolong', (req,res) => {
    const urlOolong = 'https://tea-api-boonaki.herokuapp.com/api/teas/oolong'
    fetch(urlOolong)
        .then(res => res.json()) //parse response as json
        .then(data => {
            res.render('index.ejs', { teainfo : data })
        })
        .catch(err => {
            console.error(err)
        })
})

app.get('/white', (req,res) => {
    const urlWhite = 'https://tea-api-boonaki.herokuapp.com/api/teas/white'
    fetch(urlWhite)
        .then(res => res.json()) //parse response as json
        .then(data => {           
            res.render('index.ejs', { teainfo : data })
        })
        .catch(err => {
            console.error(err)
        })
})

app.get('/blends', (req,res) => {
    const urlBlends = 'https://tea-api-boonaki.herokuapp.com/api/teas/blends'
    fetch(urlBlends)
        .then(res => res.json()) //parse response as json
        .then(data => {
            res.render('index.ejs', { teainfo : data })
        })
        .catch(err => {
            console.error(err)
        })
})

// app.get('/', (req,res) => {
//     // res.sendFile(__dirname + '/index.html')
//     const url = 'https://tea-api-boonaki.herokuapp.com/api/teas'
//     fetch(url)
//         .then(res => res.json()) //parse response as json
//         .then(data => {
//             console.log(data)
//             res.render('index.ejs', { teainfo : data })
//         })
//         .catch(err => {
//             console.error(err)
//         })
// })

app.listen(PORT, () => {
    console.log('server is running')
})