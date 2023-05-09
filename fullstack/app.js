const express = require('express');
const app = express();
const port = 8811;
const categoryRouter = require('./src/controller/categoryRouter');
const productRouter = require('./src/controller/productRouter');

//middleware supporting library
//static file path
app.use(express.static(__dirname + '/public'))
//html file path
app.set('views', './src/views')
//view engine name
app.set('view engine', 'ejs')




//routes
app.get('/', (req, res) => {
    //res.send('Hii From Express Default route')
    res.render('index', { title: 'Home Page' })
})

app.use('/category', categoryRouter)
app.use('/products', productRouter)

//create server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on ${port}`);
})
