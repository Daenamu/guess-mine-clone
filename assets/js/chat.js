import { getSocket } from "./socket";

// chat util

const messages = document.getElementById("jsMessages");

const appendMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  }:</span> ${text}
    `;
  messages.appendChild(li);
};

// send chat

const sendMsg = document.getElementById("jsSendMsg");

const handleSendMsg = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}

// receive chat

export const handleNewMessage = ({ message, nickname }) => {
  appendMsg(message, nickname);
};
