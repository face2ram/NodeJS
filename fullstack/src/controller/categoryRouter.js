const express = require('express');
const categoryRouter = express.Router();

categoryRouter.route('/')
    .get((req, res) => {
        res.send('This is Category route');
    })

categoryRouter.route('/details')
    .get((req, res) => {
        res.send('This is Category Details route');
    })

module.exports = categoryRouter;