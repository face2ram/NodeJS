const express = require('express');
const app = express();
const port = 8811;

//routes
app.get('/', (req, res) => {
    res.send('Hi From express Default route');
})

app.get('/category', (req, res) => {
    res.send('This is Category route');
})

app.get('/details', (req, res) => {
    res.send('This is Category Details route');
})

app.get('/products', (req, res) => {
    res.send('This is Product route');
})

app.get('/details', (req, res) => {
    res.send('This is Products Details route');
})

//create server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${port}`);
})
