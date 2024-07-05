import express from "express";
import {blog} from "./routes/blog.js"
import {shop} from "./routes/shop.js"

const app = express()
const port = 3000

app.use(express.static("public"))
app.use("/blog", blog)
app.use("/shop", shop)

app.get('/', (req, res) => {
  console.log("im home")
  res.send("helllo Home")
})

app.get('/index', (req, res) => {
  console.log("im index")
  res.sendFile('D:\\Programs\\Node js Practice\\Express js\\serving-html-files\\templates\\main.html')
})

app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})