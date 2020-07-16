const http = require('http');

const hostname = '0.0.0.0';
const port = 80;
const exec = require('child_process').exec, child;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  exec("echo \"Hello from EC2 Instance1  server IP:\" && hostname -I", (error, stdout, stderr) => {

    res.end(` ${stdout}`);
 });

//      res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
