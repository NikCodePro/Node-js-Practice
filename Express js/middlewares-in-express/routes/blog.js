import Router from 'express'
import fs from 'fs'

const router = Router()

router.use((req, res, next) => {
    console.log('m1 for blog router')
    fs.appendFileSync('nikk.txt', `Blog Login \n${Date.now()} is a ${req.method}\n`)
    next()
})

router.get('/', (req, res) => {
    res.send("this is Blog Page")
})


export const blog = router