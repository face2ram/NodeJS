const express = require('express')
const axios = require('axios')
const redis = require('redis')
const port = process.env.PORT || 7822
const app = express()

const client = redis.createClient({
    host: 'localhost',
    port: 6379
})
//http://localhost:7822/data?country=Germany
app.get('/data', (req, res) => {
    let userInput = req.query.country.trim()
    userInput = userInput ? userInput : 'India'
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userInput}`
    //Check data in redis
    return client.get(userInput, (err, result) => {
        //if data is in redis, return
        if (result) {
            const output = JSON.parse(result)
            res.send(output)
        } else {
            //as data is not part of redis call api
            //get the data save in db for next time
            axios.get(url)
                .then((response) => {
                    //save the response in the redis for next time
                    const output = response.data
                    client.setex(userInput, 3600, JSON.stringify({ source: 'Redis Cache', output }))
                    //for first time return the data
                    res.send({ source: 'API Response', output })
                })
        }
    })
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
