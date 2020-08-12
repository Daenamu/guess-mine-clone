import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMessage } from "./chatReceive";

// socket util

let socket = null;

export const getSocket = () => {
  return socket;
};

// socket init and listening events

export const initSockets = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnected, handleDisconnected);
  socket.on(events.newMsg, handleNewMessage);
};
