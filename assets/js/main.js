import { handleMessageNotif } from "./chat";

// socket server
// eslint-disable-next-line no-undef
const socket = io("/");

// send functions

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

// listening functions

socket.on("messageNotif", handleMessageNotif);
