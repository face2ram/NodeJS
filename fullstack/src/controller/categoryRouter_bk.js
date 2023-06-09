const express = require('express');
const categoryRouter = express.Router();
let mongodb = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017";

function router(menu) {

    categoryRouter.route('/')
        .get((req, res) => {
            mongodb.connect(url, function (err, dc) {
                if (err) {
                    res.status(500).send('Error While Connecting')
                } else {
                    let dbObj = dc.db('maymrng23')
                    dbObj.collection('catgeory').find().toArray(function (err, data) {
                        if (err) {
                            res.status(203).send('Error While Fetching')
                        } else {
                            res.render('category', { title: 'Category Page', data, menu })
                        }
                    })
                }
            })

        })

    categoryRouter.route('/details')
        .get((req, res) => {
            res.send('This is Category Details route')
        })

    return categoryRouter;
}
module.exports = router;