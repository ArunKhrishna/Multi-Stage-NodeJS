const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer(async (req, res) => {
  const chalk = await import('chalk');

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(chalk.default.green("🚀 Hello from your Dockerized Node.js App!\n"));
});

server.listen(port, hostname, () => {
  import('chalk').then(chalk =>
    console.log(chalk.default.blue(`✅ Server running at http://${hostname}:${port}/`))
  );
});
