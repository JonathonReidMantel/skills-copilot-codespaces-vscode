// create web server
// create a route for comments
// read the comments from a file
// return the comments as a response
// const http = require('http');
// const fs = require('fs');
// const comments = require('./data/comments.json');

// const server = http.createServer((req, res) => {
//     if (req.url === '/comments' && req.method === 'GET') {
//         fs.readFile('./data/comments.json', (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'application/json' });
//                 res.end(JSON.stringify({ message: 'Internal Server Error' }));
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'application/json' });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: 'Not Found' }));
//     }
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
