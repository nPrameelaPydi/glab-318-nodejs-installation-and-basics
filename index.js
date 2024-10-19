
//console.log('Hello world...');
//console.log(`Hello hello!!`)

//Creating a Server
//-----------------------

//First, we want to use the require keyword to include the http module, which is built into Node (and does not need to be installed separately by npm). This module allows node to transfer data over the Hyper Text Transfer Protocol (HTTP) used by the internet.
const http = require('http');

//Next, we need to define the location and port of the server. For now, we will use a local address; there are better ways to handle this, which we will explore in future lessons.
const hostname = '127.0.0.1';
const port = 3000;

//The createServer method of the http object allows us to define how the server will behave. 
//The variables req and res correspond to the request and response objects of the server communications. Each of these has a variety of properties and methods.

//const server = http.createServer((req, res) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('Hello World!\n');
//});

//const server = http.createServer((req, res) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/html');
//    res.write('<h1 style="color: red">Hello World!</h1>');
//    res.write('<p>I wonder what else we can send...</p>');
//    res.end();
//});

//Finally, we need to tell the server to actually listen for communications. We do this by calling the listen method of the server object we just created, and passing it the port and hostname we previously defined. It also accepts a callback function that we can use to indicate that the server is running.
//server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
//});

//HTTP request routing, create at least two different routes for your application. Have the “default” route continue to render the content above.
//const url = require('url');
const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/random':
            const randomNum = Math.floor(Math.random() * 100) + 1
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(`<h2 style="color: green">Hello hello!!</h2>`);
            res.write(`<p style="color: purple">Generating a random number: ${randomNum}</p>`);
            break;
        case '/greet':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(`<h2 style="color: Blue">Hello, guest!</h2>`);
            res.write('<p>Welcome to the server</p>');
            break;

        default:
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color: red">Hello World!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
    }
    res.end();

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



