document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("messageForm");
  const list = document.getElementById("messageList");

  // ambil pesan dari localStorage
  const savedMessages = JSON.parse(localStorage.getItem("friendMessages")) || [];
  savedMessages.forEach(addMessageToPage);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
      const newMsg = { name, message };
      addMessageToPage(newMsg);
      savedMessages.unshift(newMsg);
      localStorage.setItem("friendMessages", JSON.stringify(savedMessages));
      form.reset();
    }
  });

  function addMessageToPage(msg) {
    const div = document.createElement("div");
    div.className = "message";
    div.innerHTML = `<strong>${msg.name}</strong><p>"${msg.message}"</p>`;
    list.prepend(div);
  }
});