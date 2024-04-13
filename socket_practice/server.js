const express = require("express");
const http = require("http");
const app = express();
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server);
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("client");
});

io.on("connection", (socket) => {
  socket.on("new_message", (message) => {
    console.log(`${message}`);
    io.emit("message_render", message);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
