# AI Help Chrome Extension

A powerful Chrome extension that provides AI-powered assistance for solving coding problems directly in your browser. Leveraging Google Gemini AI, this tool offers intelligent guidance, solutions, and code examples through a seamless chatbot interface.

![AI Help Extension Banner](https://via.placeholder.com/800x200?text=AI+Help+Chrome+Extension)

## ✨ Features

- **🤖 AI-Powered Assistance**: Get intelligent help with coding problems through an intuitive chatbot interface
- **🔑 Custom API Integration**: Securely connect with your own Google Gemini API key
- **📱 Responsive Design**: Enjoy a modern, sleek interface that works across different screen sizes
- **💬 Contextual Conversations**: Benefit from persistent chat history for more relevant assistance
- **🧹 Easy Reset**: Clear your conversation history with one click
- **📋 Smart Context Collection**: Automatically gathers problem descriptions, hints, constraints, and your code to provide targeted help
- **🎨 Dynamic Theming**: Experience a UI that adapts to match the host website's theme for a cohesive look and feel

## 🚀 Installation

### Prerequisites

- Google Chrome browser
- Google Gemini API key ([Get one here](https://ai.google.dev/))

### Quick Install

1. **Download the Extension**
   ```
   git clone https://github.com/yourusername/ai-help-extension.git
   ```
   
2. **Load in Chrome**
   - Navigate to `chrome://extensions/`
   - Enable "Developer Mode" (toggle in top-right)
   - Click "Load unpacked"
   - Select the extension directory

3. **Set Up Your API Key**
   - Click the AI Help icon in your browser toolbar
   - Enter your Google Gemini API key when prompted
   - You're ready to go!

## 🔍 How to Use

### Getting Started

1. **Navigate** to any supported coding problem page
2. **Click** the "AI Help" button that appears on the page
3. **Start chatting** with the AI assistant about your coding problem

### Effective Interactions

- Ask specific questions about the problem
- Request explanations for complex concepts
- Get hints without full solutions
- Ask for optimization tips for your existing code

### Managing Your Experience

- **Theme Adaptation**: The chatbot automatically matches the website's theme
- **Clear History**: Use the button in the chatbot header to reset your conversation
- **Update API Key**: Click the extension icon in your toolbar to change your API key

## 🔧 Technical Architecture

### Component Overview

```
├── manifest.json         # Extension configuration
├── background.js         # Background processes and message handling
├── content.js            # Page integration and chatbot UI
├── popup.html            # API key entry interface
├── popup.js              # Popup logic and storage management
└── styles/               # CSS for extension components
```

### Core Functionality

- **Message Passing System**: Enables communication between extension components
- **Context Collection**: Gathers relevant problem information from the page
- **Theme Detection**: Monitors and adapts to website theme changes
- **Secure Storage**: Safely stores API key in Chrome's local storage

## 🔐 Privacy & Security

- Your API key is stored locally on your device
- Code and problem data never leave your browser except when sent directly to the Google Gemini API
- No tracking or analytics are implemented in this extension

## 🛠️ Development Roadmap

- [ ] Support for additional AI models beyond Google Gemini
- [ ] Code execution and testing capabilities
- [ ] Customizable AI behavior and persona
- [ ] Offline mode with cached responses for common questions
- [ ] Advanced syntax highlighting in code snippets

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact and Support

For questions, support requests, or collaboration opportunities, please reach out through:

- [GitHub Issues](https://github.com/Akshay-1314/whiteboard-stack/issues) for bug reports and feature requests
- Contact [Akshay Kumar Malathkar](https://github.com/Akshay-1314) for direct communication

---

Made with ❤️ by Akshay Kumar Malathkar
