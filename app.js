const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Docker 🚀');
});

server.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
