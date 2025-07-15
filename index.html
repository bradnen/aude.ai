<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aude.ai - Advanced AI Chat</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-bg: #ffffff;
            --secondary-bg: #f8f9fa;
            --sidebar-bg: #f7f8fc;
            --text-primary: #2d3748;
            --text-secondary: #718096;
            --border-color: #e2e8f0;
            --accent-color: #667eea;
            --accent-hover: #5a67d8;
            --success-color: #48bb78;
            --warning-color: #ed8936;
            --error-color: #f56565;
            --message-user-bg: #667eea;
            --message-ai-bg: #f7fafc;
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .dark-theme {
            --primary-bg: #1a202c;
            --secondary-bg: #2d3748;
            --sidebar-bg: #2d3748;
            --text-primary: #f7fafc;
            --text-secondary: #a0aec0;
            --border-color: #4a5568;
            --message-ai-bg: #2d3748;
            --accent-color: #7c3aed;
            --accent-hover: #6d28d9;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--primary-bg);
            color: var(--text-primary);
            transition: all 0.3s ease;
            height: 100vh;
            overflow: hidden;
        }

        .app-container {
            display: flex;
            height: 100vh;
            position: relative;
        }

        /* Sidebar */
        .sidebar {
            width: 280px;
            background: var(--sidebar-bg);
            border-right: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease;
            z-index: 1000;
        }

        .sidebar.collapsed {
            transform: translateX(-100%);
        }

        .sidebar-header {
            padding: 20px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 18px;
            font-weight: 700;
            color: var(--accent-color);
        }

        .logo i {
            font-size: 24px;
        }

        .new-chat-btn {
            background: var(--accent-color);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            width: 100%;
            margin: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            justify-content: center;
        }

        .new-chat-btn:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
        }

        .chat-history {
            flex: 1;
            overflow-y: auto;
            padding: 0 20px;
        }

        .chat-item {
            padding: 12px 16px;
            margin: 4px 0;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            background: transparent;
        }

        .chat-item:hover {
            background: var(--secondary-bg);
        }

        .chat-item.active {
            background: var(--accent-color);
            color: white;
        }

        .chat-item-title {
            flex: 1;
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .chat-item-date {
            font-size: 12px;
            opacity: 0.7;
        }

        .sidebar-footer {
            padding: 20px;
            border-top: 1px solid var(--border-color);
            display: flex;
            gap: 10px;
        }

        .sidebar-btn {
            flex: 1;
            background: transparent;
            border: 1px solid var(--border-color);
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            color: var(--text-secondary);
        }

        .sidebar-btn:hover {
            background: var(--secondary-bg);
            color: var(--text-primary);
        }

        /* Main Content */
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .main-header {
            padding: 20px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--primary-bg);
            z-index: 100;
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: var(--text-primary);
            margin-right: 15px;
        }

        .chat-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .header-actions {
            display: flex;
            gap: 10px;
        }

        .header-btn {
            background: transparent;
            border: 1px solid var(--border-color);
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .header-btn:hover {
            background: var(--secondary-bg);
            color: var(--text-primary);
        }

        /* Chat Messages */
        .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: var(--primary-bg);
        }

        .message {
            margin-bottom: 24px;
            animation: fadeInUp 0.3s ease;
        }

        .message-user {
            display: flex;
            justify-content: flex-end;
        }

        .message-ai {
            display: flex;
            justify-content: flex-start;
        }

        .message-content {
            max-width: 70%;
            padding: 16px 20px;
            border-radius: 20px;
            font-size: 15px;
            line-height: 1.6;
            position: relative;
            word-wrap: break-word;
        }

        .message-user .message-content {
            background: var(--message-user-bg);
            color: white;
            border-bottom-right-radius: 8px;
        }

        .message-ai .message-content {
            background: var(--message-ai-bg);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
            border-bottom-left-radius: 8px;
        }

        .message-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 12px;
            font-size: 16px;
            flex-shrink: 0;
        }

        .message-user .message-avatar {
            background: var(--accent-color);
            color: white;
        }

        .message-ai .message-avatar {
            background: var(--accent-color);
            color: white;
        }

        .typing-indicator {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
            background: var(--message-ai-bg);
            border-radius: 20px;
            border-bottom-left-radius: 8px;
            max-width: 70%;
            border: 1px solid var(--border-color);
        }

        .typing-dots {
            display: flex;
            gap: 4px;
        }

        .typing-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--text-secondary);
            animation: typingDots 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
            animation-delay: 0.4s;
        }

        /* Input Area */
        .input-container {
            padding: 20px;
            border-top: 1px solid var(--border-color);
            background: var(--primary-bg);
        }

        .input-wrapper {
            position: relative;
            max-width: 900px;
            margin: 0 auto;
        }

        .message-input {
            width: 100%;
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 25px;
            padding: 16px 60px 16px 20px;
            font-size: 15px;
            color: var(--text-primary);
            resize: none;
            outline: none;
            transition: all 0.3s ease;
            font-family: inherit;
            line-height: 1.4;
            max-height: 120px;
        }

        .message-input:focus {
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .send-btn {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            background: var(--accent-color);
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .send-btn:hover:not(:disabled) {
            background: var(--accent-hover);
            transform: translateY(-50%) scale(1.1);
        }

        .send-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
        }

        .modal-content {
            background: var(--primary-bg);
            border-radius: 16px;
            padding: 32px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: var(--shadow-lg);
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }

        .modal.show .modal-content {
            transform: scale(1);
        }

        .modal h2 {
            margin-bottom: 24px;
            color: var(--text-primary);
            font-size: 24px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .form-group input,
        .form-group select {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            background: var(--secondary-bg);
            color: var(--text-primary);
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .slider-group {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .slider-group input[type="range"] {
            flex: 1;
        }

        .slider-value {
            font-weight: 600;
            color: var(--accent-color);
            min-width: 40px;
        }

        .modal-actions {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
            margin-top: 24px;
        }

        .btn {
            padding: 12px 24px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 14px;
        }

        .btn-primary {
            background: var(--accent-color);
            color: white;
        }

        .btn-primary:hover {
            background: var(--accent-hover);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-secondary);
            border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
            background: var(--secondary-bg);
            color: var(--text-primary);
        }

        /* Welcome Screen */
        .welcome-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            padding: 40px;
        }

        .welcome-logo {
            font-size: 48px;
            color: var(--accent-color);
            margin-bottom: 20px;
        }

        .welcome-title {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--text-primary);
        }

        .welcome-subtitle {
            font-size: 18px;
            color: var(--text-secondary);
            margin-bottom: 40px;
        }

        .welcome-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
            max-width: 800px;
            width: 100%;
        }

        .feature-card {
            background: var(--secondary-bg);
            padding: 24px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
        }

        .feature-icon {
            font-size: 24px;
            color: var(--accent-color);
            margin-bottom: 12px;
        }

        .feature-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-primary);
        }

        .feature-description {
            color: var(--text-secondary);
            font-size: 14px;
            line-height: 1.5;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes typingDots {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.4;
            }
            30% {
                transform: translateY(-10px);
                opacity: 1;
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .sidebar {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                z-index: 1000;
            }

            .mobile-menu-btn {
                display: block;
            }

            .message-content {
                max-width: 85%;
            }

            .welcome-features {
                grid-template-columns: 1fr;
            }

            .modal-content {
                padding: 24px;
            }
        }

        /* Status indicator */
        .status-indicator {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .status-ready {
            background: var(--success-color);
            color: white;
        }

        .status-processing {
            background: var(--warning-color);
            color: white;
        }

        .status-error {
            background: var(--error-color);
            color: white;
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: var(--secondary-bg);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--border-color);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--text-secondary);
        }
    </style>
</head>
<body>
    <div class="app-container">
        <!-- Sidebar -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <i class="fas fa-robot"></i>
                    <span>Aude.ai</span>
                </div>
            </div>
            
            <button class="new-chat-btn" onclick="newChat()">
                <i class="fas fa-plus"></i>
                New Chat
            </button>
            
            <div class="chat-history" id="chatHistory">
                <!-- Chat history will be populated here -->
            </div>
            
            <div class="sidebar-footer">
                <button class="sidebar-btn" onclick="showSettings()" title="Settings">
                    <i class="fas fa-cog"></i>
                </button>
                <button class="sidebar-btn" onclick="toggleTheme()" title="Toggle Theme">
                    <i class="fas fa-moon"></i>
                </button>
                <button class="sidebar-btn" onclick="clearAllChats()" title="Clear History">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="main-header">
                <div style="display: flex; align-items: center;">
                    <button class="mobile-menu-btn" onclick="toggleSidebar()">
                        <i class="fas fa-bars"></i>
                    </button>
                    <h1 class="chat-title" id="chatTitle">New Chat</h1>
                </div>
                <div class="header-actions">
                    <button class="header-btn" onclick="exportChat()">
                        <i class="fas fa-download"></i>
                        Export
                    </button>
                    <button class="header-btn" onclick="shareChat()">
                        <i class="fas fa-share"></i>
                        Share
                    </button>
                </div>
            </header>

            <div class="chat-messages" id="chatMessages">
                <div class="welcome-screen">
                    <div class="welcome-logo">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h2 class="welcome-title">Welcome to Aude.ai</h2>
                    <p class="welcome-subtitle">Your advanced AI assistant for intelligent conversations</p>
                    
                    <div class="welcome-features">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-brain"></i>
                            </div>
                            <h3 class="feature-title">Intelligent Responses</h3>
                            <p class="feature-description">Get contextual, accurate answers powered by advanced AI models</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-comments"></i>
                            </div>
                            <h3 class="feature-title">Natural Conversations</h3>
                            <p class="feature-description">Engage in flowing, natural dialogue with memory of your conversation</p>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <h3 class="feature-title">Privacy First</h3>
                            <p class="feature-description">Your conversations are private and secure with local storage</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="input-container">
                <div class="input-wrapper">
                    <textarea 
                        id="messageInput" 
                        class="message-input" 
                        placeholder="Type your message here..."
                        rows="1"
                        oninput="adjustTextarea(this)"
                        onkeypress="handleKeyPress(event)"
                    ></textarea>
                    <button class="send-btn" id="sendBtn" onclick="sendMessage()">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </main>
    </div>

    <!-- Settings Modal -->
    <div id="settingsModal" class="modal">
        <div class="modal-content">
            <h2><i class="fas fa-cog"></i> Settings</h2>
            
            <div class="form-group">
                <label for="apiKey">OpenAI API Key</label>
                <input type="password" id="apiKey" placeholder="sk-..." />
            </div>
            
            <div class="form-group">
                <label for="modelSelector">AI Model</label>
                <select id="modelSelector">
                    <option value="gpt-4">GPT-4</option>
                    <option value="gpt-4o-mini">GPT-4o Mini</option>
                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    <option value="local">Local (Simulated)</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="temperatureSlider">Temperature</label>
                <div class="slider-group">
                    <input type="range" id="temperatureSlider" min="0" max="1" step="0.05" value="0.7" oninput="updateTemperatureDisplay(this.value)" />
                    <span class="slider-value" id="temperatureValue">0.7</span>
                </div>
            </div>
            
            <div class="form-group">
                <label for="maxTokensSlider">Max Tokens</label>
                <div class="slider-group">
                    <input type="range" id="maxTokensSlider" min="100" max="4000" step="100" value="2000" oninput="updateMaxTokensDisplay(this.value)" />
                    <span class="slider-value" id="maxTokensValue">2000</span>
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal('settingsModal')">Cancel</button>
                <button class="btn btn-primary" onclick="saveSettings()">Save Settings</button>
            </div>
        </div>
    </div>

    <!-- Status Indicator -->
    <div id="statusIndicator" class="status-indicator status-ready">
        <i class="fas fa-circle"></i> Ready
    </div>

    <script>
        // Global variables
        let currentChatId = null;
        let chats = {};
        let isTyping = false;
        let settings = {
            apiKey: '',
            model: 'gpt-4',
            temperature: 0.7,
            maxTokens: 2000
        };

        const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            loadSettings();
            loadTheme();
            loadChats();
            
            if (Object.keys(chats).length === 0) {
                newChat();
            } else {
                const lastChatId = Object.keys(chats)[Object.keys(chats).length - 1];
                loadChat(lastChatId);
            }
            
            renderChatHistory();
        });

        // Chat functionality
        async function sendMessage() {
            if (isTyping) return;
            
            const input = document.getElementById('messageInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            input.value = '';
            adjustTextarea(input);
            
            if (!currentChatId) {
                newChat();
            }
            
            // Add user message
            chats[currentChatId].messages.push({
                role: 'user',
                content: message,
                timestamp: new Date().toISOString()
            });
            
            // Update chat title if it's the first message
            if (chats[currentChatId].messages.length === 1) {
                chats[currentChatId].title = message.substring(0, 50) + (message.length > 50 ? '...' : '');
                updateChatTitle();
            }
            
            saveChats();
            renderMessages();
            showTypingIndicator();
            
            // Generate AI response
            isTyping = true;
            updateStatus('processing');
            
            try {
                const response = await generateAIResponse(message, chats[currentChatId].messages.slice(-10));
                
                chats[currentChatId].messages.push({
                    role: 'assistant',
                    content: response,
                    timestamp: new Date().toISOString()
                });
                
                saveChats();
                renderMessages();
                updateStatus('ready');
            } catch (error) {
                console.error('Error generating response:', error);
                updateStatus('error');
            } finally {
                isTyping = false;
                hideTypingIndicator();
            }
        }

        async function generateAIResponse(message, context = []) {
            const { model, apiKey, temperature, maxTokens } = settings;
            
            if (model === 'local') {
                await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
                return generateLocalResponse(message);
            }
            
            if (!apiKey) {
                throw new Error('Please configure your OpenAI API key in settings');
            }
            
            const messages = context.filter(msg => msg.role && msg.content).map(msg => ({
                role: msg.role,
                content: msg.content
            }));
            
            const response = await fetch(OPENAI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model,
                    messages,
                    temperature,
                    max_tokens: maxTokens
                })
            });
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error?.message || 'API request failed');
            }
            
            const data = await response.json();
            return data.choices[0].message.content.trim();
        }

        function generateLocalResponse(message) {
            const responses = [
                "I'm a simulated AI response. Configure your OpenAI API key for real conversations!",
                "This is a demo response. Add your API key in settings to unlock full functionality.",
                "I understand you're asking about: " + message.substring(0, 50) + "... Please add your API key for detailed responses.",
                "Hello! I'm running in demo mode. Set up your OpenAI API key to experience the full power of Aude.ai!"
            ];
            
            if (message.toLowerCase().includes('hello')) {
                return "Hello! I'm Aude.ai, your intelligent AI assistant. How can I help you today?";
            }
            
            return responses[Math.floor(Math.random() * responses.length)];
        }

        // Chat management
        function newChat() {
            const id = Date.now().toString();
            chats[id] = {
                id,
                title: 'New Chat',
                messages: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            currentChatId = id;
