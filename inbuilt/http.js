let http = require('http');

//req > What we send to server (param, queryParams, body)
//res > What server will respond

let server = http.createServer(function (req, res) {
    res.write('<h1>Hi from NodeJs Server</h1>')
    res.end()
});

server.listen(6651)
