const verityButton = document.getElementById("verityButton");
const verityChat = document.getElementById("verityChat");
const closeChat = document.getElementById("closeChat");

const sendButton = document.getElementById("sendButton");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");


// ===============================
// Open Verity
// ===============================

verityButton.addEventListener("click", () => {
    verityChat.classList.add("open");
    messageInput.focus();
});


// ===============================
// Close Verity
// ===============================

closeChat.addEventListener("click", () => {
    verityChat.classList.remove("open");
});


// ===============================
// Verity's brain
// ===============================

function verityThink(text) {

    const message = text.toLowerCase().trim();


    // Greetings
    if (
        message === "hello" ||
        message === "hi" ||
        message === "hey" ||
        message.includes("hello verity") ||
        message.includes("hi verity")
    ) {
        return "Hello! 👋 I'm Verity. It's nice to talk to you!";
    }


    // Name
    if (
        message.includes("what is your name") ||
        message.includes("what's your name") ||
        message.includes("who are you")
    ) {
        return "I'm Verity. 🤖 I'm your little AI assistant.";
    }


    // How are you?
    if (
        message.includes("how are you") ||
        message.includes("how are u")
    ) {
        return "I'm doing great! Thanks for asking. 😄";
    }


    // What can you do?
    if (
        message.includes("what can you do") ||
        message.includes("what do you do")
    ) {
        return "I can chat with you, answer simple questions, and do calculations. 🧮🤖 I'm still learning!";
    }


    // Creator
    if (
        message.includes("who made you") ||
        message.includes("who created you")
    ) {
        return "You did! You're the one bringing me to life. 😎";
    }


    // Thanks
    if (
        message.includes("thank you") ||
        message.includes("thanks")
    ) {
        return "You're welcome! 😊";
    }


    // Goodbye
    if (
        message === "bye" ||
        message === "goodbye" ||
        message.includes("see you")
    ) {
        return "Goodbye! 👋 I'll be right here when you come back.";
    }


    // AI question
    if (
        message.includes("are you an ai") ||
        message.includes("are you ai")
    ) {
        return "I'm an AI-style assistant running in your website. Right now, my brain is made with JavaScript!";
    }


    // Calculator
    const calculation = calculate(text);

    if (calculation !== null) {
        return "The answer is " + calculation;
    }


    // Unknown message
    return "Hmm... 🤔 I don't know how to answer that yet. I'm still learning!";
}


// ===============================
// Typing indicator
// ===============================

function showTyping() {

    const typing = document.createElement("div");

    typing.classList.add("typing");
    typing.id = "verityTyping";

    typing.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;
}


// ===============================
// Remove typing indicator
// ===============================

function hideTyping() {

    const typing = document.getElementById("verityTyping");

    if (typing) {
        typing.remove();
    }
}


// ===============================
// Send message
// ===============================

function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") {
        return;
    }


    // Add user's message
    addMessage(text, "user");


    // Clear input
    messageInput.value = "";


    // Show Verity thinking
    showTyping();


    // Verity thinks
    setTimeout(() => {

        hideTyping();

        const response = verityThink(text);

        addMessage(response, "verity");

    }, 700);
}


// ===============================
// Send with button
// ===============================

sendButton.addEventListener("click", sendMessage);


// ===============================
// Send with Enter
// ===============================

messageInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// ===============================
// Add message to chat
// ===============================

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


    // Scroll to newest message
    messages.scrollTop = messages.scrollHeight;
}
