const express = require('express')
const mongoose = require('mongoose')
const smallURLs = require('./models/shortURLs')
const app = express()

mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) =>{
    const shortURLs = await smallURLs.find()
    res.render('index')
})

app.post('/shortURLs', async (req, res) =>{
    await smallURLs.create({ big : req.body.fullURL})
    res.redirect('/')
})

app.listen(process.env.PORT || 3000)