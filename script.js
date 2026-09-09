const verityButton = document.getElementById("verityButton");
const verityChat = document.getElementById("verityChat");
const closeChat = document.getElementById("closeChat");

const sendButton = document.getElementById("sendButton");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");


// Open Verity
verityButton.addEventListener("click", () => {
    verityChat.classList.add("open");
    messageInput.focus();
});


// Close Verity
closeChat.addEventListener("click", () => {
    verityChat.classList.remove("open");
});


// Send message
function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") {
        return;
    }

    // Add your message
    addMessage(text, "user");

    // Clear input
    messageInput.value = "";

    // Demo response
  setTimeout(() => {

    const calculation = calculate(text);

 if (calculation !== null) {

    addMessage(
        "The answer is " + calculation,
        "verity"
    );

} else {

    addMessage(
        "I'm Verity. I don't know how to answer that yet.",
        "verity"
    );

}

}, 700);
}


// Send with button
sendButton.addEventListener("click", sendMessage);


// Send with Enter
messageInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Add message to chat
function addMessage(text, sender) {

    const message = document.createElement("div");

    message.classList.add("message");

    if (sender === "user") {

        message.classList.add("user-message");

    } else {

        message.classList.add("verity-message");

    }

    message.textContent = text;

    messages.appendChild(message);

    // Automatically scroll down
    messages.scrollTop = messages.scrollHeight;
}
