import mongoose from "mongoose"
import express from "express"
import { Todo } from './models/todo.js'

const connection = await mongoose.connect('mongodb://localhost:27017/')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: 2, desc: "this page is done by express or mongo db", idDone: false, days: 4 })
    todo.save()
    res.send("Hello Mongo DB")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})