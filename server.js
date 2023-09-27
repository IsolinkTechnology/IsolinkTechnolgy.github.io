const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(302, {
      'Location': '/index.html'
    });
    res.end();
  } else {
    // Serve the requested file
  }
});

server.listen(3000);