import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

// variables

const PORT = 4000;
const app = express();

// app setting and middlewares

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));

// app routing

app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

// server init

const handleListening = () =>
  console.log(`Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

// socket init

const io = socketIO.listen(server);
io.on("connection", (socket) => socketController(socket));
