import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

// variables

const PORT = 4000;
const app = express();

// app setting and middlewares

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));

// app routing

app.get("/", (req, res) => res.render("home"));

// server init

const handleListening = () =>
  console.log(`Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

// socket

const io = socketIO.listen(server);

io.on("connection", (socket) => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anon",
    });
  });
  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
