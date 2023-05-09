const express = require('express');
const app = express();
const port = 8811;
const categoryRouter = require('./src/controller/categoryRouter');
const productRouter = require('./src/controller/productRouter');

//routes
app.get('/', (req, res) => {
    res.send('Hi From express Default route');
})

app.use('/category', categoryRouter)
app.use('/products', productRouter)

//create server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${port}`);
})
