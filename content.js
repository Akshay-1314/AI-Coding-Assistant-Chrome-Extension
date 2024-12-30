window.addEventListener("load", addBookmarkButton);
let data;
let currentPathName = window.location.pathname;
const observer = new MutationObserver(() => {
    addBookmarkButton();
    const newPathName = window.location.pathname;
    if (currentPathName !== newPathName) {
        currentPathName = newPathName;
        closeBtnHandler();
        addInjectScript();
    }
})

observer.observe(document.body, { childList: true, subtree: true });

addBookmarkButton();
addInjectScript();

function onProblemsPage() {
    return window.location.pathname.startsWith("/problems/") && window.location.pathname.length > "/problems/".length;
}

// NORMAL CHATBOT HANDLER

function addBookmarkButton() {
    // Ensure we are on the correct page and button doesn't already exist
    if (!onProblemsPage() || document.getElementById("ai-bot-btn")) return;

    // Create the button element
    const askDoubtBtn = document.createElement("button");

    // Set the button's text and ID
    askDoubtBtn.textContent = "AI Help";
    askDoubtBtn.id = "ai-bot-btn";

    // Style the button
    askDoubtBtn.style.backgroundColor = "#3f6fc1";
    askDoubtBtn.style.color = "white";
    askDoubtBtn.style.border = "none";
    askDoubtBtn.style.borderRadius = "5px";
    askDoubtBtn.style.padding = "10px 15px";
    askDoubtBtn.style.cursor = "pointer";
    askDoubtBtn.style.fontSize = "16px";
    askDoubtBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    askDoubtBtn.style.margin = "10px";

    // Add hover effect
    askDoubtBtn.addEventListener("mouseover", () => {
        askDoubtBtn.style.backgroundColor = "#2d4f91"; // Darker shade on hover
    });
    askDoubtBtn.addEventListener("mouseout", () => {
        askDoubtBtn.style.backgroundColor = "#3f6fc1"; // Reset color
    });

    // Find the container where the button will be added
    const btnContainer = document.querySelector(".coding_desc_container__gdB9M");
    if (btnContainer) {
        btnContainer.insertAdjacentElement("beforeend", askDoubtBtn);

        // Add event listener for button click
        askDoubtBtn.addEventListener("click", openChatBotHandler);
    } else {
        console.error("Button container not found. Unable to add the bookmark button.");
    }
}

// CHATBOT HANDLER AS A POPUP

function openChatBotHandler() {
    if (document.getElementById("chatbot-container")) return;
    createChatBotPopup();
}

function createChatBotPopup() {
    // Check if the chatbot already exists
    if (document.getElementById("chatbot-container")) return;

    // Create the chatbot container as a popup
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbot-container";
    chatbotContainer.style.position = "fixed";
    chatbotContainer.style.bottom = "20px";
    chatbotContainer.style.right = "20px";
    chatbotContainer.style.width = "400px";
    chatbotContainer.style.height = "500px";
    chatbotContainer.style.backgroundColor = "#ffffff";
    chatbotContainer.style.borderRadius = "16px";
    chatbotContainer.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
    chatbotContainer.style.overflow = "hidden";
    chatbotContainer.style.display = "flex";
    chatbotContainer.style.flexDirection = "column";
    chatbotContainer.style.zIndex = "1001";
    chatbotContainer.style.transition = "transform 0.3s ease";
    chatbotContainer.style.transform = "translateY(0)"; // Initially visible

    // Create the chatbot header
    const chatbotHeader = document.createElement("div");
    chatbotHeader.textContent = "Chat with AI";
    chatbotHeader.style.background = "linear-gradient(135deg, #3f6fc1, #65aefc)";
    chatbotHeader.style.color = "white";
    chatbotHeader.style.padding = "15px";
    chatbotHeader.style.textAlign = "center";
    chatbotHeader.style.fontSize = "20px";
    chatbotHeader.style.fontWeight = "bold";
    chatbotHeader.style.borderTopLeftRadius = "16px";
    chatbotHeader.style.borderTopRightRadius = "16px";
    chatbotHeader.style.position = "relative";

    // Add a close button to the header
    const closeButton = document.createElement("span");
    closeButton.textContent = "×";
    closeButton.style.fontSize = "25px";
    closeButton.style.cursor = "pointer";
    closeButton.style.position = "absolute";
    closeButton.style.top = "12px";
    closeButton.style.right = "15px";
    closeButton.style.color = "white";
    closeButton.style.transition = "color 0.3s ease";
    closeButton.addEventListener("click", closeBtnHandler);
    closeButton.addEventListener("mouseenter", () => {
        closeButton.style.color = "#ff1744";
    });
    closeButton.addEventListener("mouseleave", () => {
        closeButton.style.color = "white";
    });
    chatbotHeader.appendChild(closeButton);

    // Create the chatbot message area
    const chatbotMessages = document.createElement("div");
    chatbotMessages.id = "chatbot-messages";
    chatbotMessages.style.flex = "1";
    chatbotMessages.style.padding = "15px";
    chatbotMessages.style.overflowY = "auto";
    chatbotMessages.style.backgroundColor = "#f3f4f6";
    chatbotMessages.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    chatbotMessages.style.fontSize = "14px";
    chatbotMessages.style.lineHeight = "1.6";

    // Create the chatbot input area
    const chatbotInputArea = document.createElement("div");
    chatbotInputArea.style.display = "flex";
    chatbotInputArea.style.padding = "15px";
    chatbotInputArea.style.backgroundColor = "#fafafa";
    chatbotInputArea.style.borderBottom = "1px solid #ddd";
    chatbotInputArea.style.borderRadius = "0 0 16px 16px";
    chatbotInputArea.style.justifyContent = "space-between";

    const chatbotInput = document.createElement("input");
    chatbotInput.type = "text";
    chatbotInput.placeholder = "Type your message...";
    chatbotInput.style.flex = "1";
    chatbotInput.style.padding = "12px";
    chatbotInput.style.border = "2px solid #ddd";
    chatbotInput.style.borderRadius = "8px";
    chatbotInput.style.fontSize = "14px";
    chatbotInput.style.outline = "none";
    chatbotInput.style.transition = "border-color 0.3s ease";
    chatbotInput.addEventListener("focus", () => {
        chatbotInput.style.borderColor = "#3f6fc1"; // Blue border on focus
    });
    chatbotInput.addEventListener("blur", () => {
        chatbotInput.style.borderColor = "#ddd"; // Reset border color when out of focus
    });

    const chatbotSendButton = document.createElement("button");
    chatbotSendButton.textContent = "Send";
    chatbotSendButton.style.marginLeft = "15px";
    chatbotSendButton.style.padding = "12px 20px";
    chatbotSendButton.style.backgroundColor = "#3f6fc1";
    chatbotSendButton.style.color = "white";
    chatbotSendButton.style.border = "none";
    chatbotSendButton.style.borderRadius = "8px";
    chatbotSendButton.style.fontSize = "14px";
    chatbotSendButton.style.cursor = "pointer";
    chatbotSendButton.style.transition = "background-color 0.3s ease";
    chatbotSendButton.addEventListener("click", () => sendBtnHandler(chatbotInput, chatbotMessages));

    chatbotSendButton.addEventListener("mouseenter", () => {
        chatbotSendButton.style.backgroundColor = "#2d4f91"; // Darker shade on hover
    });

    chatbotSendButton.addEventListener("mouseleave", () => {
        chatbotSendButton.style.backgroundColor = "#3f6fc1"; // Reset color
    });

    chatbotInputArea.appendChild(chatbotInput);
    chatbotInputArea.appendChild(chatbotSendButton);

    // Append all parts to the chatbot container
    chatbotContainer.appendChild(chatbotHeader);
    chatbotContainer.appendChild(chatbotMessages);
    chatbotContainer.appendChild(chatbotInputArea);
    loadChatHistory(chatbotMessages);
    document.body.appendChild(chatbotContainer);
}

// Close button handler
function closeBtnHandler() {
    const chatbotContainer = document.getElementById("chatbot-container");
    if (chatbotContainer) {
        chatbotContainer.style.transform = "translateY(100%)"; // Slide out effect
        setTimeout(() => {
            chatbotContainer.remove();
        }, 300); // Remove after the slide-out transition
    }
}

async function sendBtnHandler(chatbotInput, chatbotMessages) {
    const message = chatbotInput.value.trim();
    const uniqueId = extractUniqueId(window.location.href);
    if (message) {
        // Add user message
        addMessageToChat(chatbotMessages, message, "user");

        // Retrieve existing messages, append new one, and save
        getMessagesFromLocalStorage(uniqueId, (messages) => {
            messages.push({ text: message, sender: "user" });
            saveMessagesToLocalStorage(uniqueId, messages);
        });

        // Clear input after sending
        chatbotInput.value = "";

        try {
            // Fetch AI response
            const response = await fetchAIResponse(message);

            // Add AI response
            if (response) {
                addMessageToChat(chatbotMessages, response, "ai");
                getMessagesFromLocalStorage(uniqueId, (messages) => {
                    messages.push({ text: response, sender: "ai" });
                    saveMessagesToLocalStorage(uniqueId, messages);
                });
            } else {
                const errorMsg = "Sorry, I couldn't fetch a response.";
                addMessageToChat(chatbotMessages, errorMsg, "ai");
                getMessagesFromLocalStorage(uniqueId, (messages) => {
                    messages.push({ text: errorMsg, sender: "ai" });
                    saveMessagesToLocalStorage(uniqueId, messages);
                });
            }
        } catch (error) {
            console.error("Error fetching AI response:", error);
            const errorMsg = "An error occurred. Please try again later.";
            addMessageToChat(chatbotMessages, errorMsg, "ai");
            getMessagesFromLocalStorage(uniqueId, (messages) => {
                messages.push({ text: errorMsg, sender: "ai" });
                saveMessagesToLocalStorage(uniqueId, messages);
            });
        }
    }
}

function extractUniqueId(url) {
    const match = url.match(/-(\d+)(?=\?|$)/); // Matches a hyphen followed by digits, ensuring it's before "?" or end of string
    const id = match ? match[1] : null;
    return id;
}

function getMessagesFromLocalStorage(uniqueId, callback) {
    chrome.storage.local.get([uniqueId], (result) => {
        callback(result[uniqueId] || []);
    });
}

function saveMessagesToLocalStorage(uniqueId, messages) {
    chrome.storage.local.set({ [uniqueId]: messages }, () => {
        console.log("Chat history saved for:", uniqueId);
    });
}

function loadChatHistory(chatbotMessages) {
    const uniqueId = extractUniqueId(window.location.href);

    getMessagesFromLocalStorage(uniqueId, (messages) => {
        messages.forEach(({ text, sender }) => {
            addMessageToChat(chatbotMessages, text, sender);
        });
    });
}

// Helper function to add messages to the chat
function addMessageToChat(chatbotMessages, text, sender) {
    const messageElement = document.createElement("div");
    messageElement.textContent = text;
    messageElement.style.margin = "5px 0";
    messageElement.style.padding = "8px";
    messageElement.style.borderRadius = "5px";

    if (sender === "user") {
        messageElement.style.backgroundColor = "#e0f7fa";
        messageElement.style.alignSelf = "flex-end";
    } else if (sender === "ai") {
        messageElement.style.backgroundColor = "#f1f1f1";
        messageElement.style.alignSelf = "flex-start";
    }

    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

async function fetchAIResponse(message) {
    const apiKey = "AIzaSyAsRwBL0qaVZckLnkKZeXDzWT9ki7NAyqg";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [
            {
                parts: [
                    { text: message }
                ]
            }
        ]
    };

    try {
        // Make the POST request
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        // Parse the JSON response
        const responseData = await response.json();

        // Extract the "text" field from the JSON
        const text = responseData?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
            console.log("AI Response:", text);
            return text;
        } else {
            console.error("Response does not contain the expected text field.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return null;
    }
}

function addInjectScript() {
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("inject.js");
    script.onload = function () {
        this.remove(); // Remove script after execution
    };
    document.documentElement.appendChild(script);
}

document.addEventListener("xhrIntercept", (event) => {
    data = event.detail; // Contains the intercepted request details
    console.log("Intercepted XHR:", data);
});