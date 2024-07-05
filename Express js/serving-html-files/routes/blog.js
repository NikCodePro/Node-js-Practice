import express from "express";
const router = express.Router()

router.get('/about', (req, res) => {
    console.log("im about")
    res.send("this is about page")
})

router.get('/blogpost/:slug', (req, res) => {
    console.log("im blog")
    res.send(`this is ${req.params.slug} post`)
})

export const blog = router