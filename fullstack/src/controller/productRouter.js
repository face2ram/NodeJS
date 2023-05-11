const express = require('express');
const productRouter = express.Router();
let { getData } = require('./dbController');

function router(menu) {
    productRouter.route('/')
        .get(async (req, res) => {
            let query = {}
            let products = await getData('products', query)
            res.render('product', { title: 'Product Page', products: products, menu })
        })

    productRouter.route('/category/:id')
        .get(async (req, res) => {
            //let id = req.params.id            
            let { id } = req.params;
            let query = { "category_id": Number(id) }
            let products = await getData('products', query)
            res.render('product', { title: 'Product Listing Page', products: products, menu })
        })

    productRouter.route('/details')
        .get((req, res) => {
            res.send('This is Product Details route')
        })

    return productRouter
}


module.exports = router;