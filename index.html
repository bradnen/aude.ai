```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aude.ai - AI Assistant</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* (CSS from the previous response - keep it here) */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-bg: #0a0a0a;
            --secondary-bg: #1a1a1a;
            --card-bg: #252525;
            --border-color: #333;
            --text-primary: #ffffff;
            --text-secondary: #b0b0b0;
            --text-muted: #666;
            --accent-color: #6366f1;
            --accent-hover: #5855eb;
            --success-color: #10b981;
            --error-color: #ef4444;
            --warning-color: #f59e0b;
            --gradient-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --glass-bg: rgba(255, 255, 255, 0.05);
            --glass-border: rgba(255, 255, 255, 0.1);
            --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --sidebar-width: 280px;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--primary-bg);
            color: var(--text-primary);
            line-height: 1.6;
            overflow: hidden;
        }

        body.light-theme {
            --primary-bg: #f8fafc;
            --secondary-bg: #ffffff;
            --card-bg: #ffffff;
            --border-color: #e2e8f0;
            --text-primary: #1e293b;
            --text-secondary: #475569;
            --text-muted: #94a3b8;
            --glass-bg: rgba(255, 255, 255, 0.8);
            --glass-border: rgba(0, 0, 0, 0.1);
        }

        .app-container {
            display: flex;
            height: 100vh;
            background: var(--primary-bg);
        }

        /* Sidebar */
        .sidebar {
            width: var(--sidebar-width);
            background: var(--secondary-bg);
            border-right: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease;
            position: relative;
            z-index: 1000;
        }

        .sidebar-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-primary);
        }

        .logo svg {
            color: var(--accent-color);
            filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.3));
        }

        .new-chat-btn {
            margin: 1rem;
            padding: 0.75rem 1rem;
            background: var(--accent-color);
            color: white;
            border: none;
            border-radius: 0.75rem;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .new-chat-btn:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }

        .new-chat-btn:hover:before {
            left: 100%;
        }

        .new-chat-btn:hover {
            background: var(--accent-hover);
            transform: translateY(-1px);
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .chat-history {
            flex: 1;
            overflow-y: auto;
            padding: 0.5rem;
        }

        .chat-item {
            padding: 0.75rem;
            margin-bottom: 0.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid transparent;
            position: relative;
            overflow: hidden;
        }

        .chat-item:hover {
            background: var(--glass-bg);
            border-color: var(--glass-border);
            transform: translateX(4px);
        }

        .chat-item.active {
            background: var(--accent-color);
            color: white;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .chat-item-title {
            font-weight: 500;
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chat-item-date {
            font-size: 0.75rem;
            opacity: 0.7;
        }

        .sidebar-footer {
            padding: 1rem;
            border-top: 1px solid var(--border-color);
            display: flex;
            gap: 0.5rem;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
        }

        .sidebar-btn {
            flex: 1;
            padding: 0.75rem;
            background: transparent;
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sidebar-btn:hover {
            background: var(--glass-bg);
            border-color: var(--accent-color);
            color: var(--accent-color);
            transform: translateY(-1px);
        }

        /* Main Content */
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: var(--primary-bg);
            position: relative;
        }

        .main-header {
            padding: 1rem 1.5rem;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
        }

        .chat-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: var(--text-primary);
            cursor: pointer;
            padding: 0.5rem;
            margin-right: 1rem;
        }

        .header-actions {
            display: flex;
            gap: 0.5rem;
        }

        .header-btn {
            padding: 0.5rem 1rem;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
        }

        .header-btn:hover {
            background: var(--glass-bg);
            border-color: var(--accent-color);
            color: var(--accent-color);
            transform: translateY(-1px);
        }

        .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 1rem;
            background: var(--primary-bg);
        }

        .welcome-screen {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .welcome-logo {
            width: 80px;
            height: 80px;
            background: var(--gradient-bg);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .welcome-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: var(--gradient-bg);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .welcome-subtitle {
            font-size: 1.125rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            max-width: 500px;
        }

        .welcome-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            width: 100%;
        }

        .feature-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .feature-card:hover:before {
            left: 100%;
        }

        .feature-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
            border-color: var(--accent-color);
        }

        .feature-icon {
            width: 48px;
            height: 48px;
            background: var(--accent-color);
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            color: white;
        }

        .feature-title {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }

        .feature-description {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .message {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .message-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .message-user .message-avatar {
            background: var(--accent-color);
            color: white;
        }

        .message-assistant .message-avatar {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
        }

        .message-content {
            flex: 1;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            padding: 1rem;
            position: relative;
        }

        .message-user .message-content {
            background: var(--accent-color);
            color: white;
            border-color: var(--accent-color);
        }

        .message-content pre {
            background: var(--glass-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            padding: 1rem;
            overflow-x: auto;
            margin: 0.5rem 0;
        }

        .message-content code {
            background: var(--glass-bg);
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
        }

        .typing-indicator {
            display: flex;
            align-items: center;
            padding: 1rem;
        }

        .typing-dots {
            display: flex;
            gap: 0.25rem;
        }

        .typing-dot {
            width: 8px;
            height: 8px;
            background: var(--accent-color);
            border-radius: 50%;
            animation: typing 1.4s ease-in-out infinite;
        }

        .typing-dot:nth-child(1) { animation-delay: 0s; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing {
            0%, 60%, 100% { transform: scale(1); opacity: 0.5; }
            30% { transform: scale(1.2); opacity: 1; }
        }

        .input-container {
            padding: 1rem;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-top: 1px solid var(--border-color);
        }

        .input-wrapper {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            padding: 1rem;
            display: flex;
            gap: 1rem;
            align-items: end;
            transition: all 0.3s ease;
        }

        .input-wrapper:focus-within {
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .message-input {
            flex: 1;
            background: none;
            border: none;
            outline: none;
            color: var(--text-primary);
            font-size: 1rem;
            line-height: 1.5;
            resize: none;
            min-height: 24px;
            max-height: 120px;
            font-family: inherit;
        }

        .message-input::placeholder {
            color: var(--text-muted);
        }

        .send-btn {
            background: var(--accent-color);
            border: none;
            border-radius: 0.5rem;
            color: white;
            cursor: pointer;
            padding: 0.75rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .send-btn:hover {
            background: var(--accent-hover);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .send-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
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
            backdrop-filter: blur(5px);
            z-index: 2000;
            align-items: center;
            justify-content: center;
        }

        .modal.show {
            display: flex;
        }

        .modal-content {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
            border-radius: 1rem;
            padding: 2rem;
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            animation: modalIn 0.3s ease-out;
        }

        @keyframes modalIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }

        .modal-content h2 {
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--text-primary);
        }

        .form-group input,
        .form-group select {
            width: 100%;
            padding: 0.75rem;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            color: var(--text-primary);
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .slider-group {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .slider-group input[type="range"] {
            flex: 1;
            padding: 0;
        }

        .slider-value {
            font-weight: 500;
            color: var(--accent-color);
            min-width: 50px;
            text-align: center;
        }

        .modal-actions {
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            margin-top: 2rem;
        }

        .btn {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .btn-primary {
            background: var(--accent-color);
            color: white;
        }

        .btn-primary:hover {
            background: var(--accent-hover);
            transform: translateY(-1px);
        }

        .btn-secondary {
            background: var(--card-bg);
            color: var(--text-primary);
            border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
            background: var(--glass-bg);
            border-color: var(--accent-color);
        }

        /* Status Indicator */
        .status-indicator {
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            backdrop-filter: blur(10px);
            z-index: 1000;
            animation: statusIn 0.3s ease-out;
        }

        @keyframes statusIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .status-ready {
            background: rgba(16, 185, 129, 0.1);
            color: var(--success-color);
            border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-processing {
            background: rgba(245, 158, 11, 0.1);
            color: var(--warning-color);
            border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .status-error {
            background: rgba(239, 68, 68, 0.1);
            color: var(--error-color);
            border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .status-processing svg {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .sidebar {
                position: fixed;
                left: 0;
                top: 0;
                height: 100vh;
                transform: translateX(-100%);
                z-index: 1500;
            }

            .sidebar.show {
                transform: translateX(0);
            }

            .mobile-menu-btn {
                display: block;
            }

            .welcome-title {
                font-size: 2rem;
            }

            .welcome-features {
                grid-template-columns: 1fr;
            }
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background: var(--primary-bg);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--border-color);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--accent-color);
        }
    </style>
</head>
<body>
    <div class="app-container">
        <!-- Sidebar -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span>Aude.ai</span>
                </div>
            </div>

            <button class="new-chat-btn" onclick="newChat()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 4v16m8-8H4"/>
                </svg>
                New Conversation
            </button>

            <div class="chat-history" id="chatHistory"></div>

            <div class="sidebar-footer">
                <button class="sidebar-btn" onclick="showSettings()" title="Settings">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
                    </svg>
                </button>
                <button class="sidebar-btn" onclick="toggleTheme()" title="Toggle Theme">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </button>
                <button class="sidebar-btn" onclick="clearAllChats()" title="Clear History">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="main-header">
                <div style="display: flex; align-items: center;">
                    <button class="mobile-menu-btn" onclick="toggleSidebar()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                    <h1 class="chat-title" id="chatTitle">New Conversation</h1>
                </div>
                <div class="header-actions">
                    <button class="header-btn" onclick="exportChat()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                        </svg>
                        Export
                    </button>
                    <button class="header-btn" onclick="shareChat()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                        </svg>
                        Share
                    </button>
                </div>
            </header>

            <div class="chat-messages" id="chatMessages">
                <div class="welcome-screen">
                    <div class="welcome-logo">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12>
                                2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h2 class="welcome-title">Welcome to Aude.ai</h2>
                    <p class="welcome-subtitle">Your intelligent AI assistant for seamless conversations and productivity</p>
                    <div class="welcome-features">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 12l2-2 4 4 8-8 2 2-10 10z"/>
                                </svg>
                            </div>
                            <h3 class="feature-title">Smart Replies</h3>
                            <p class="feature-description">Get accurate and contextual responses powered by advanced AI models.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9 5l7 7-7 7"/>
                                </svg>
                            </div>
                            <h3 class="feature-title">Seamless Chat</h3>
                            <p class="feature-description">Enjoy smooth and real-time conversations with a beautiful interface.</p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06"/>
                                </svg>
                            </div>
                            <h3 class="feature-title">Export & Share</h3>
                            <p class="feature-description">Easily export or share your chats with friends and colleagues.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="input-container">
                <form id="chatForm" onsubmit="sendMessage(event)">
                    <div class="input-wrapper">
                        <textarea
                            class="message-input"
                            id="messageInput"
                            rows="1"
                            placeholder="Type your message..."
                            required
                        ></textarea>
                        <button class="send-btn" type="submit" title="Send">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 2L11 13"/>
                                <path d="M22 2l-6 20-5-9-9-5 20-6z"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </div>

    <!-- Status Indicator -->
    <div class="status-indicator" id="statusIndicator">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 13l4 4L19 7"/>
        </svg>
        <span>Ready</span>
    </div>

    <!-- Modal (for settings or others) -->
    <div class="modal" id="settingsModal">
        <div class="modal-content">
            <h2>Settings</h2>
            <div class="form-group">
                <label for="languageSelect">Language</label>
                <select id="languageSelect">
                    <option value="en">English</option>
                    <option value="th">ไทย</option>
                    <!-- Add more languages here -->
                </select>
            </div>

            <div class="form-group slider-group">
                <label for="responseSpeed">Response Speed</label>
                <input type="range" id="responseSpeed" min="1" max="5" value="3">
                <div class="slider-value" id="speedValue">3</div>
            </div>

            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeSettings()">Cancel</button>
                <button class="btn btn-primary" onclick="saveSettings()">Save</button>
            </div>
        </div>
    </div>

    <script>
        const CHAT_STORAGE_KEY = 'audeai_chat_history';
        const THEME_STORAGE_KEY = 'audeai_theme';
        const SPEED_STORAGE_KEY = 'audeai_response_speed';

        function toggleSidebar() {
            document.getElementById("sidebar").classList.toggle("show");
        }

        function toggleTheme() {
            document.body.classList.toggle("light-theme");
            const isLightTheme = document.body.classList.contains("light-theme");
            localStorage.setItem(THEME_STORAGE_KEY, isLightTheme ? 'light' : 'dark');
        }

        function loadThemeFromLocalStorage() {
            const theme = localStorage.getItem(THEME_STORAGE_KEY);
            if (theme === 'light') {
                document.body.classList.add("light-theme");
            }
        }

        function newChat() {
            clearChatHistory();
            document.getElementById("chatMessages").innerHTML = "";
            document.getElementById("chatTitle").textContent = "New Conversation";
        }

        function showSettings() {
            document.getElementById("settingsModal").classList.add("show");
        }

        function closeSettings() {
            document.getElementById("settingsModal").classList.remove("show");
        }

        function saveSettings() {
            const speed = document.getElementById("responseSpeed").value;
            document.getElementById("speedValue").textContent = speed;
            localStorage.setItem(SPEED_STORAGE_KEY, speed);
            closeSettings();
        }

        function loadSettingsFromLocalStorage() {
            const speed = localStorage.getItem(SPEED_STORAGE_KEY);
            if (speed) {
                document.getElementById("responseSpeed").value = speed;
                document.getElementById("speedValue").textContent = speed;
            }
        }

        async function sendMessage(event) {
            event.preventDefault();
            const input = document.getElementById("messageInput");
            const message = input.value.trim();
            if (message === "") return;

            const messages = document.getElementById("chatMessages");
            const userMessage = createUserMessage(message); // Helper function to create user message element
            messages.appendChild(userMessage);
            input.value = "";
            input.style.height = "auto";
            input.focus();

            setStatus("processing", "Processing...");

            try {
                const response = await fetch('/api/ai-response', { // Replace with your API endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: message })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const assistantReply = data.response; // Assuming the API returns a JSON object with a 'response' field

                const assistantMessage = createAssistantMessage(assistantReply); // Helper function to create assistant message element
                messages.appendChild(assistantMessage);
            } catch (error) {
                console.error("Error fetching AI response:", error);
                setStatus("error", "Error getting response.");
                const errorMessage = createAssistantMessage("Sorry, I encountered an error. Please try again.");
                messages.appendChild(errorMessage);
            } finally {
                setStatus("ready", "Ready");
                messages.scrollTop = messages.scrollHeight;
                saveChatToLocalStorage(); // Save the chat after each message
            }
        }

        function createUserMessage(message) {
            const userMessage = document.createElement("div");
            userMessage.className = "message message-user";
            userMessage.innerHTML = `
                <div class="message-avatar">🧑</div>
                <div class="message-content">${message}</div>
            `;
            return userMessage;
        }

        function createAssistantMessage(message) {
            const assistantMessage = document.createElement("div");
            assistantMessage.className = "message message-assistant";
            assistantMessage.innerHTML = `
                <div class="message-avatar">🤖</div>
                <div class="message-content">${message}</div>
            `;
            return assistantMessage;
        }

        function setStatus(status, message) {
            const statusIndicator = document.getElementById("statusIndicator");
            statusIndicator.className = `status-indicator status-${status}`;
            let icon = '';
            if (status === "ready") {
                icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>';
            } else if (status === "processing") {
                icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
            } else if (status === "error") {
                icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            }
            statusIndicator.innerHTML = `${icon}<span>${message}</span>`;
        }

        function saveChatToLocalStorage() {
            const chatMessages = document.getElementById("chatMessages").innerHTML;
            localStorage.setItem(CHAT_STORAGE_KEY, chatMessages);
        }

        function loadChatFromLocalStorage() {
            const chatMessages = localStorage.getItem(CHAT_STORAGE_KEY);
            if (chatMessages) {
                document.getElementById("chatMessages").innerHTML = chatMessages;
                // Scroll to the bottom after loading
                const chatMessagesElement = document.getElementById("chatMessages");
                chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
            }
        }

        function clearChatHistory() {
            localStorage.removeItem(CHAT_STORAGE_KEY);
            document.getElementById("chatMessages").innerHTML = "";
        }

        function exportChat() {
            alert("Export feature coming soon!");
        }

        function shareChat() {
            alert("Share feature coming soon!");
        }

        function clearAllChats() {
            if (confirm("Are you sure you want to delete all chats?")) {
                clearChatHistory(); // Clear the chat history from local storage
                document.getElementById("chatHistory").innerHTML = "";
                newChat();
            }
        }

        // Update response speed value
        document.getElementById("responseSpeed").addEventListener("input", function () {
            document.getElementById("speedValue").textContent = this.value;
        });

        // Call these functions when the page loads
        window.addEventListener('load', () => {
            loadThemeFromLocalStorage();
            loadSettingsFromLocalStorage();
            loadChatFromLocalStorage();
            setStatus("ready", "Ready");
        });
    </script>
</body>
</html>
                        
