import events from "./events";

const socketController = (socket) => {
  // set nickname

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
  });
};

export default socketController;
