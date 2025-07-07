const http = require("http");
const kleur = require("kleur");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(kleur.green("🚀 Hello from your Dockerized Node.js App!\n"));
});

server.listen(port, hostname, () => {
  console.log(kleur.blue(`✅ Server running at http://${hostname}:${port}/`));
});
