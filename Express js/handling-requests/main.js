import express from 'express'
const app = express()
const port = 5000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(" It's a get Request")
})

app.post('/', (req, res) => {
    res.send('Hello post!')
    console.log(" It's a post Request")
})

app.put('/', (req, res) => {
    res.send('Hello put!')
    console.log(" It's a put Request")
})

app.delete('/', (req, res) => {
    res.send('Hello delete!')
    console.log(" It's a delete Request")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})