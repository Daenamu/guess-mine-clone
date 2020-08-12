import events from "./events";

const socketController = (socket) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  // new User

  socket.on(events.setNickname, ({ nickname }) => {
    broadcast(events.newUser, { nickname });
    socket.nickname = nickname;
  });

  // disconnect

  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });

  // Message

  socket.on(events.sendMsg, ({ message }) => {
    broadcast(events.newMsg, { message, nickname: socket.nickname });
  });

  // canvas

  socket.on(events.beginPath, ({ x, y }) => {
    broadcast(events.beganPath, { x, y });
  });

  socket.on(events.strokePath, ({ x, y }) => {
    broadcast(events.strokedPath, { x, y });
  });

  socket.on(events.changeColor, ({ color }) => {
    broadcast(events.changedColor, { color });
  });

  socket.on(events.changeMode, ({ filling }) => {
    broadcast(events.changedMode, { filling });
  });

  socket.on(events.canvasFill, () => {
    broadcast(events.canvasFilled, {});
  });
};

export default socketController;
