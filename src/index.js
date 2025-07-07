const http = require("http");
const chalk = require("chalk");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(chalk.green("🚀 Hello from your Dockerized Node.js App!\n"));
});

server.listen(port, hostname, () => {
  console.log(chalk.blue(`✅ Server running at http://${hostname}:${port}/`));
});
