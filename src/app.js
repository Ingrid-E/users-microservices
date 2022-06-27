require('dotenv').config()
const express = require("express")
const app = express()
const pkg = require("../package.json")

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        name: pkg.name,
        author: pkg.author,
        description: pkg.description,
        version: pkg.version
    })
})

//Routes
const productRoute = require('./routes/Products')
app.use('/product',productRoute)
const categoryRoute = require('./routes/Categories')
app.use('/category',categoryRoute)
const imageRoute = require('./routes/Images')
app.use('/image',imageRoute)
const discountRoute = require('./routes/Discounts')
app.use('/discount',discountRoute)
const product_discount = require('./routes/ProductDiscount')
app.use('/product_discount',product_discount)



module.exports = app