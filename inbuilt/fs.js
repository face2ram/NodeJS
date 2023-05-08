let fs = require('fs');

//Write File
// fs.writeFile('mytext.txt', 'My Code File', function () {
//     console.log('File Created and Write Content done')
// })

//append File
fs.appendFile('mytext.txt', '\nCode File 1', function () {
    console.log('File Content append done')
})

//read file
//txt file
fs.readFile('mytext.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data)
})
//json file
// fs.readFile('db.json', 'utf-8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// })

//rename file
// fs.rename('mycode.pdf', 'mydata.pdf', function (err) {
//     if (err) throw err;
//     console.log('rename file')
// })

//delete file
// fs.unlink('code.txt', function (err) {
//     if (err) throw err;
//     console.log('file deleted')
// })

let data = fs.readFileSync('db.json', 'utf-8')
console.log(data)