// // Reading And Writing File System Synchronously

const fs = require('fs');
const http = require('http');
const url = require( 'url');

// const hello = 'Hello World!';
// console.log(hello);
// const textIn = fs.readFileSync('txt/input.txt', 'utf8');
// console.log(textIn);
// const textOut = `This is what we know about avacado : ${textIn}.\nCreated on ${Date.now()}`;
// console.log(textOut);
// fs.writeFileSync('txt/output.txt', textOut)
// console.log('File Write Success !');

// Reading And Writing File System Asynchronously

// fs.readFile('txt/start.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

// console.log('File Read Success !');

// // Callback Hell
// // Callback Function

// fs.readFile('txt/starttt.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log(err);

//     fs.readFile(`txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('File Write Success !');
//             });
//         });
//     });
// });

// console.log('Will Read File !');

// Creating The Server

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    // Overview Page
    if(pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(tempOverview);

    // Product Page
    } else if(pathName === '/product') {
        res.end('Welcome To Product');

    // API Page
    } else if(pathName === '/api') {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(data);
    
    // Page Not Found
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page Not Found !</h1>');
    }
    // res.end('Meesage From Server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening To Requests On Port 8000');
});