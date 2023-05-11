const express = require('express');
const categoryRouter = express.Router();
let { getData } = require('./dbController');


function router(menu) {

    categoryRouter.route('/')
        .get(async (req, res) => {
            let query = {}
            let data = await getData('catgeory', query)
            res.render('category', { title: 'Category Page', data, menu })
        })

    categoryRouter.route('/details')
        .get((req, res) => {
            res.send('This is Category Details route')
        })

    return categoryRouter;
}
module.exports = router;