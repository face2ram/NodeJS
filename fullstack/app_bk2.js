const express = require('express');
const app = express();
const port = 8811;
let categoryRouter = express.Router();
let productRouter = express.Router();

//routes
app.get('/', (req, res) => {
    res.send('Hi From express Default route');
})

//Category routes
categoryRouter.route('/')
    .get((req, res) => {
        res.send('This is Category route');
    })

categoryRouter.route('/details')
    .get((req, res) => {
        res.send('This is Category Details route');
    })

//Product routes
productRouter.route('/')
    .get((req, res) => {
        res.send('This is Product route');
    })

productRouter.route('/details')
    .get((req, res) => {
        res.send('This is Product Details route');
    })

app.use('/category', categoryRouter)
app.use('/products', productRouter)

//create server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${port}`);
})
