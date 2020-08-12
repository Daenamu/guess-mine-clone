const messages = document.getElementById("jsMessages");

export const handleNewMessage = ({ message, nickname }) => {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "You"
  }:</span> ${message}
    `;
  messages.appendChild(li);
};
