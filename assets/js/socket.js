import { handleNewUser, handleDisconnected } from "./notifications";
import { handleNewMessage } from "./chatReceive";
import {
  handleBeganPath,
  handleStrokedPath,
  handleChangedColor,
  handleChangedMode,
  handleCanvasFill,
} from "./paintReceive";

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
  aSocket.on(events.beganPath, handleBeganPath);
  aSocket.on(events.strokedPath, handleStrokedPath);
  aSocket.on(events.changedColor, handleChangedColor);
  aSocket.on(events.changedMode, handleChangedMode);
  aSocket.on(events.canvasFilled, handleCanvasFill);
};
