import express from 'express'
import request from 'request'
const port = process.env.PORT || 7660;
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')


app.get('/weather', (req, res) => {
    let city = req.query.city ? req.query.city : 'Mumbai'
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

    //calling api
    request(url, (err, response) => {
        if (err) throw err
        const output = JSON.parse(response.body)
        res.render('index', { title: 'Weather app', result: output })
        //res.send(response.body)
    })
})

app.listen(port, (err) => {
    if (err) throw err
    console.log(`Server is running on port ${port}`)
})