import express from 'express'
import fs from 'fs'
import { blog } from './routes/blog.js'

const app = express()
const port = 3000

// app.use(express.static('public'))

app.use('/blog', blog)

app.use((req, res, next) => {
  console.log('m1')
  console.log(req.headers)
  req.harry = "I'm Nikhil Bhai"
  fs.appendFileSync('nikk.txt', `${Date.now()} is a ${req.method}\n`)
  // res.send("this page is hacked")
  next()
})

app.use((req, res, next) => {
  console.log('m2')
  next()
})

app.use((req, res, next) => {
  console.log('m3')
  next()
})


app.get('/', (req, res) => {
  res.sendFile('D:\\Programs\\Node js Practice\\Express js\\middlewares-in-express\\public\\index.html')
})

app.get('/about', (req, res) => {
  res.send('About ' + req.harry)
})

app.get('/contact', (req, res) => {
  res.send('contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})