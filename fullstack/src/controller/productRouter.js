const express = require('express');
const productRouter = express.Router();

productRouter.route('/')
    .get((req, res) => {
        res.send('This is Product route');
    })

productRouter.route('/details')
    .get((req, res) => {
        res.send('This is Product Details route');
    })

module.exports = productRouter;