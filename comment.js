// create web server
// create a simple web server using node.js
// 1. load http module
var http = require('http');
var url = require('url');
var fs = require('fs');

// 2. create server
http.createServer(function (req, res) {
    // parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    // print the name of the file for which request is made
    console.log("Request for " + pathname + " received.");
    // read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // Write the content of the file to response body
            res.write(data.toString());
        }
        // Send the response body
        res.end();
    });
}).listen(8081);

// Console will print the message
console.log('Server running at http://')

