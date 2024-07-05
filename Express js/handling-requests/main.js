import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("It's a get Request")
    res.send('Hello World! .......get Reqs')
}).post('/', (req, res) => {
    console.log("It's a post Request")
    res.send('Hello World! .......POST Reqs')
}).put('/', (req, res) => {
    console.log("It's a put Request")
    res.send('Hello World! .......put Reqs')
}).delete('/', (req, res) => {
    console.log("It's a delete Request")
    res.send('Hello World! .......delete Reqs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})