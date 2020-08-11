import { join } from "path";
import express from "express";
import socketIO from "socket.io";

// variables

const PORT = 4000;
const app = express();

// app setting and middlewares

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));

// app routing

app.get("/", (req, res) => res.render("home"));

// init
const handleListening = () =>
  console.log(`Server running: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
