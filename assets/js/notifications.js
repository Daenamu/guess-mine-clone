const notifications = document.getElementById("jsNotifications");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  notifications.appendChild(notification);
};

// alert new connected user

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined!`, "rgb(0, 122, 255)");
};

// alert disconnected user

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} just left!`, "rgb(255, 149, 0)");
};
