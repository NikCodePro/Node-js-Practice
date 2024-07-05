const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) =>{
    res.send('Hello About')
})

app.get('/service', (req, res) =>{
    res.send('Hello Service')
})

app.get('/contact', (req, res) =>{
    res.send('Hello Contact')
})

app.get('/querry', (req, res) =>{
    res.send('Hello Querry')
})

app.get('/blog', (req, res) =>{
    res.send('Hello blog')
})

app.get('/blog/:slug', (req, res) =>{
    // for URL http://127.0.0.1:3000/blog/py-jhdfjs-sdjfosdjf-sjdfisjdf?mode=dark&region=india
    // it will give the output
    console.log(req.params)  //{ slug: 'py-jhdfjs-sdjfosdjf-sjdfisjdf' }
    console.log(req.query)  //{ mode: 'dark', region: 'india' }
    res.send(`Hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second', (req, res) =>{
    res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})