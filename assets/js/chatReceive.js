const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

export const handleNewMessage = ({ message, nickname }) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  }:</span> ${message}
    `;
  messages.appendChild(li);
};

export const disableChat = () => (sendMsg.style.display = "none");
export const enableChat = () => (sendMsg.style.display = "flex");
