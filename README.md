AI Help Chrome Extension
This Chrome extension is designed to provide AI assistance for solving coding problems directly within the browser. It uses the Google Gemini AI model to offer guidance, solutions, and code examples. The extension integrates with a website hosting coding problems, allowing users to easily get help via a chatbot interface.

Features
AI Help Button: The extension adds an "AI Help" button to the coding problem pages. This button opens a chatbot that assists with solving problems, providing hints, and answering related queries.

Custom API Key: Users are required to enter their API key for the AI model via the extension's popup interface. Once entered, the chatbot can fetch AI responses using this key.

User-friendly UI: The popup and chatbot UI have been designed to be sleek, modern, and easy to use, with responsive layouts and pleasant user interactions.

Message History: Chat history is saved and used to provide contextual information to the AI model.

Input/Output Formatting: The extension collects information from the page, including the problem description, hints, input/output formats, and constraints, and sends it to the AI for processing.

Installation
Prerequisites
Chrome Browser: The extension is built for Chrome, so you will need the Chrome browser installed.
API Key: To use the AI model, you will need an API key. You can obtain it from the Google Gemini API.
Steps to Install
Clone the repository or download the source files.

Open Chrome and navigate to chrome://extensions/.

Enable "Developer Mode" in the top-right corner.

Click on "Load unpacked" and select the folder containing the extension files.

The extension should now appear in your browser's extension bar.

Usage
Set the API Key:

After installing the extension, click on the extension icon in your browser.
Enter your API key in the popup to enable the AI model.
Once the key is entered, the extension will automatically close and the chatbot will be ready for use.
Open AI Help:

When viewing a coding problem page, an AI Help button will appear on the page.
Click this button to open the chatbot, which will assist you with the problem by providing hints, explanations, or code suggestions.
Interacting with the Chatbot:

Ask specific questions or provide input related to the problem. The AI will respond accordingly.
The AI is capable of answering both general and problem-specific queries.
Features and Flow

1. AI Help Button
   The extension adds an AI Help button to the page. When clicked, it opens a chatbot that can assist with problem-solving.
   If no API key is set, the popup will appear asking the user to input the key before the chatbot can be opened.
2. Popup (API Key Entry)
   The extension will prompt you to enter an API key if one hasn't been set yet.
   The API key is saved to chrome.storage.local for future use.
   Once the key is entered, the chatbot will be automatically available to answer coding-related queries.
3. Popup UI
   The popup UI for entering the API key is modern, responsive, and designed for ease of use.
   After entering the key, the popup automatically closes.
4. Message Passing
   The extension uses message passing between the background script (background.js), content script (content.js), and popup to handle the user input and response flow.
   Code Structure
5. background.js
   Manages background tasks, including listening for messages and handling the chatbot interaction.
   Sends messages to the content script to open the chatbot.
6. content.js
   Handles the actual chatbot functionality on the webpage.
   Receives messages from the background script to open the chatbot and interact with the user.
7. popup.html
   The interface for entering the API key.
   Displays a form where users can enter their API key, which is stored in chrome.storage.local.
8. popup.js
   Manages the logic for saving the API key, interacting with chrome.storage.local, and closing the popup.
   Technical Details
   Permissions
   The extension requires the following permissions:

storage: To store the API key in Chrome's local storage.
activeTab: To interact with the content of the active tab where the coding problem is displayed.
Message Passing
The extension uses message passing to communicate between the different scripts:

The popup sends the API key to chrome.storage.local and informs the background script to open the chatbot.
The background script sends a message to the content script, instructing it to open the chatbot UI.
API Integration
The extension communicates with the AI model using an API key provided by the user. The AI responses are fetched and displayed in the chatbot UI.

Future Improvements
Multiple AI Model Support: Allow users to choose between different AI models.
Better Error Handling: Improve the error handling in case the AI model or API key is not available.
Enhanced UI: Further enhance the chatbot and popup UI for a more interactive and engaging experience.
Contributing
Feel free to fork the repository and contribute to its development! If you find any bugs or have feature suggestions, please create an issue or submit a pull request.
