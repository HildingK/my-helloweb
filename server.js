import http from "http";
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello from GitHub → Azure!\n");
});
server.listen(port, () => console.log(`Listening on ${port}`));