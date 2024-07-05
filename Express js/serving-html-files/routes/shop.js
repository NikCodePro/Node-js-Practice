import express from "express";
const router = express.Router()

router.get('/shoping', (req, res) => {
    console.log("im shop")
    res.send("this is shop page")
})

router.get('/shopping-cart/:slug', (req, res) => {
    console.log("im shopcart")
    res.send(`this is ${req.params.slug} cart`)
})

export const shop = router