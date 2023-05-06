let fs = require('fs');

//Write File
fs.writeFile('mytext.txt', 'My Code File', function () {
    console.log('File Created and Write Content done')
})

//append File
fs.appendFile('mytext.txt', '\nCode File 1', function () {
    console.log('File Content append done')
})