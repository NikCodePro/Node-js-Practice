import express from "express";
import path from "path";

const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(__dirname)
  res.sendFile("./public/main.html", )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})