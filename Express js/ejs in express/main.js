const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "Adidas"
    let Product = "Shoes"
    let Search = "Search Here"
    let title = "this is EJS site"
    let arr = ['Hey', 45, 33, 99]
    res.render('D:\\Programs\\Node js Practice\\Express js\\ejs in express\\views\\index.ejs', { title, sitename: sitename, product: Product, Search: Search, arr })
})

app.get('/blog/slug:', (req, res) => {
    let pageTitle = "adidas is the best company of shoes"
    let pageContent = "we can makes the best shoes in the world"
    res.render('D:\\Programs\\Node js Practice\\Express js\\ejs in express\\views\\index.ejs', { pageTitle: pageTitle, pageContent: pageContent, slug: req.params.slug })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})