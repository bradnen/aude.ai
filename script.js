html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Aude.ai Chat</title>
<style>
  /* Reset and base */
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0; padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f2f5;
    color: #111;
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  /* Dark theme */
  body.dark-theme {
    background: #121212;
    color: #ddd;
  }
  /* Sidebar */
  #chatHistory {
    width: 260px;
    background: #fff;
    border-right: 1px solid #ddd;
    overflow-y: auto;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
  }
  body.dark-theme #chatHistory {
    background: #1e1e1e;
    border-color: #444;
  }
  .chat-item {
    padding: 10px 15px;
    margin: 5px 8px;
    border-radius: 8px;
    cursor: pointer;
    background: #e4e6eb;
    user-select: none;
    position: relative;
    transition: background-color 0.3s;
  }
  body.dark-theme .chat-item {
    background: #2a2a2a;
  }
  .chat-item.active {
    background: #4ade80;
    color: #000;
    font-weight: 600;
  }
  .chat-item:hover:not(.active) {
    background: #a5f3fc;
  }
  body.dark-theme .chat-item.active {
    background: #22c55e;
    color: #fff;
  }
  .chat-item-title {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chat-item-time {
    font-size: 10px;
    color: #555;
  }
  body.dark-theme .chat-item-time {
    color: #999;
  }
  .delete-chat {
    position: absolute;
    top: 6px;
    right: 8px;
    border: none;
    background: transparent;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    color: #888;
  }
  .delete-chat:hover {
    color: #f87171;
  }
  /* Main chat container */
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #fff;
  }
  body.dark-theme main {
    background: #222;
  }
  header {
    padding: 10px 20px;
    background: #4ade80;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
  }
  body.dark-theme header {
    background: #22c55e;
    color: #fff;
  }
  header h1 {
    margin: 0;
    font-weight: 700;
    font-size: 1.2rem;
    user-select: text;
  }
  header button {
    margin-left: 10px;
    background: transparent;
    border: none;
    padding: 6px 10px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  header button:hover {
    background: #d1fae5;
  }
  body.dark-theme header button:hover {
    background: #166534;
    color: #a7f3d0;
  }
  #chatMessages {
    flex: 1;
    overflow-y: auto;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #f9fafb;
  }
  body.dark-theme #chatMessages {
    background: #181818;
  }
  .message {
    max-width: 70%;
    padding: 10px 14px;
    border-radius: 15px;
    line-height: 1.3;
    word-break: break-word;
    display: inline-block;
  }
  .message.user {
    align-self: flex-end;
    background: #22c55e;
    color: white;
    border-bottom-right-radius: 4px;
  }
  .message.ai {
    align-self: flex-start;
    background: #e5e7eb;
    color: #111;
    border-bottom-left-radius: 4px;
  }
  body.dark-theme .message.ai {
    background: #2a2a2a;
    color: #ddd;
  }
  .message-avatar {
    font-weight: 700;
    font-size: 0.75rem;
    margin-bottom: 2px;
    user-select: none;
    opacity: 0.6;
  }
  footer {
    padding: 10px 20px;
    background: #e5e7eb;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  body.dark-theme footer {
    background: #1e1e1e;
  }
  textarea#messageInput {
    flex: 1;
    resize: none;
    font-size: 1rem;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #bbb;
    font-family: inherit;
    min-height: 40px;
    max-height: 150px;
    transition: border-color 0.2s;
  }
  textarea#messageInput:focus {
    outline: none;
    border-color: #4ade80;
    background: #fff;
  }
  body.dark-theme textarea#messageInput {
    background: #222;
    border-color: #444;
    color: #eee;
  }
  body.dark-theme textarea#messageInput:focus {
    background: #2a2a2a;
    border-color: #22c55e;
  }
  button#sendBtn {
    padding: 10px 16px;
    background: #4ade80;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    color: #000;
    user-select: none;
    transition: background-color 0.2s;
  }
  button#sendBtn:hover:not(:disabled) {
    background: #22c55e;
    color: #fff;
  }
  button#sendBtn:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* Modal styles */
  .modal {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  .modal.show {
    display: flex;
  }
  .modal-content {
    background: #fff;
    padding: 20px 25px;
    border-radius: 12px;
    width: 320px;
    max-width: 95%;
  }
  body.dark-theme .modal-content {
    background: #222;
    color: #ddd;
  }
  .modal-content h2 {
    margin-top: 0;
    font-weight: 700;
  }
  .modal-content label {
    display: block;
    margin-top: 10px;
    font-weight: 600;
  }
  .modal-content input[type=text],
  .modal-content input[type=number],
  .modal-content select {
    width: 100%;
    padding: 8px 10px;
    margin-top: 5px;
    border-radius: 6px;
    border: 1px solid #bbb;
    font-size: 1rem;
    font-family: inherit;
  }
  body.dark-theme .modal-content input[type=text],
  body.dark-theme .modal-content input[type=number],
  body.dark-theme .modal-content select {
    background: #333;
    border-color: #555;
    color: #ddd;
  }
  .modal-buttons {
    margin-top: 20px;
    text-align: right;
  }
  .modal-buttons button {
    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 700;
    margin-left: 10px;
  }
  .btn-save {
    background: #4ade80;
    color: #000;
  }
  .btn-save:hover {
    background: #22c55e;
    color: #fff;
  }
  .btn-cancel {
    background: #e5e7eb;
    color: #111;
  }
  body.dark-theme .btn-cancel {
    background: #444;
    color: #ddd;
  }
  .btn-cancel:hover {
    background: #999;
    color: #222;
  }

  /* Welcome message */
  .welcome-message {
    margin: auto;
    text-align: center;
    color: #666;
    user-select: none;
  }
  body.dark-theme .welcome-message {
    color: #999;
  }

  /* Scrollbar style */
  #chatHistory::-webkit-scrollbar,
  #chatMessages::-webkit-scrollbar {
    width: 8px;
  }
  #chatHistory::-webkit-scrollbar-thumb,
  #chatMessages::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 4px;
  }
  body.dark-theme #chatHistory::-webkit-scrollbar-thumb,
  body.dark-theme #chatMessages::-webkit-scrollbar-thumb {
    background-color: #555;
  }

  /* API status */
  #apiStatusContainer {
    font-size: 0.9rem;
    padding: 6px 10px;
    background: #e5e7eb;
    color: #111;
    user-select: none;
    text-align: center;
  }
  body.dark-theme #apiStatusContainer {
    background: #1e1e1e;
    color: #ddd;
  }
</style>
</head>
<body>
  <aside id="chatHistory"></aside>

  <main>
    <header>
      <h1 id="chatTitle">New Chat</h1>
      <div>
        <button type="button" onclick="toggleTheme()" title="Toggle Light/Dark Theme">🌗</button>
        <button type="button" onclick="showSettings()" title="Settings">⚙️</button>
        <button type="button" onclick="newChatButton()" title="New Chat">➕ New Chat</button>
      </div>
    </header>

    <section id="chatMessages">
      <div class="welcome-message">
        <h2>Welcome to Aude.ai</h2>
        <p>Start chatting by typing your message below.</p>
      </div>
    </section>

    <div id="apiStatusContainer">
      Status: <span id="apiStatusText">Ready</span>
    </div>

    <footer>
      <textarea id="messageInput" rows="1" placeholder="Type your message..." oninput="adjustTextarea(this)" onkeypress="handleKeyPress(event)"></textarea>
      <button id="sendBtn" type="button" onclick="sendMessage()">Send</button>
    </footer>
  </main>

  <!-- Settings Modal -->
  <div id="settingsModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="settingsTitle">
    <div class="modal-content">
      <h2 id="settingsTitle">Settings</h2>
      <label for="apiKey">OpenAI API Key</label>
      <input type="text" id="apiKey" placeholder="sk-..." autocomplete="off" spellcheck="false" />

      <label for="modelSelector">Model</label>
      <select id="modelSelector">
        <option value="gpt-4">gpt-4</option>
        <option value="gpt-4o-mini">gpt-4o-mini</option>
        <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
        <option value="local">Local (Simulated)</option>
      </select>

      <label for="maxTokens">Max Tokens</label>
      <input type="number" id="maxTokens" min="100" max="4000" step="100" />

      <label for="temperatureSlider">Temperature <span id="tempValue">0.7</span></label>
      <input type="range" id="temperatureSlider" min="0" max="1" step="0.05" />

      <div class="modal-buttons">
        <button class="btn-cancel" onclick="closeModal('settingsModal')">Cancel</button>
        <button class="btn-save" onclick="saveSettings()">Save</button>
      </div>
    </div>
  </div>

<script>
  // Your current variables
  let currentChatId = null;
  let chats = {};
  let isTyping = false;
  let selectedModel = 'gpt-4';
  let temperature = 0.7;
  let maxTokens = 2000;
  let apiKey = '';

  // OpenAI API endpoint and helper function
  const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

  async function generateAIResponse(message, context = []) {
      if (!apiKey && selectedModel !== 'local') {
          return "⚠️ Please enter your OpenAI API key in settings to use this model.";
      }

      const model = selectedModel;

      if (model === 'local') {
          return generateLocalResponse(message);
      }

      try {
          updateApiStatus('processing');

          // Prepare messages for chat completion
          // Context is an array of past messages like [{role:'user'|'assistant', content: '...'}]
          const messages = [
              ...context,
              { role: 'user', content: message }
          ];

          const body = {
              model: model,
              messages: messages,
              temperature: temperature,
              max_tokens: maxTokens
          };

          const response = await fetch(OPENAI_API_URL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${apiKey}`
              },
              body: JSON.stringify(body)
          });

          if (!response.ok) {
              const error = await response.json();
              throw new Error(error.error?.message || 'API error');
          }

          const data = await response.json();

          updateApiStatus('ready');

          // Return the assistant's reply
          return data.choices[0].message.content.trim();
      } catch (error) {
          updateApiStatus('error');
          console.error('AI API Error:', error);
          return `⚠️ Error: ${error.message}`;
      }
  }

  // Local fallback response generator (simple echo or canned replies)
  function generateLocalResponse(message) {
      const lowerMessage = message.toLowerCase();

      if (lowerMessage.includes('hello')) {
          return "Hello! I'm Aude.ai, your AI assistant.";
      }
      if (lowerMessage.includes('help')) {
          return "How can I assist you today? I'm a simulated AI response.";
      }
      return "Sorry, I can only simulate responses locally. Try setting your API key for full AI power!";
  }

  // --- UI and chat management ---

  function loadSettings() {
      apiKey = localStorage.getItem('apiKey') || '';
      maxTokens = parseInt(localStorage.getItem('maxTokens')) || 2000;
      temperature = parseFloat(localStorage.getItem('temperature')) || 0.7;
      selectedModel = localStorage.getItem('selectedModel') || 'gpt-4';

      document.getElementById('apiKey').value = apiKey;
      document.getElementById('maxTokens').value = maxTokens;
      document.getElementById('temperatureSlider').value = temperature;
      document.getElementById('tempValue').textContent = temperature;
      document.getElementById('modelSelector').value = selectedModel;
  }

  function saveSettings() {
      apiKey = document.getElementById('apiKey').value.trim();
      maxTokens = parseInt(document.getElementById('maxTokens').value);
      temperature = parseFloat(document.getElementById('temperatureSlider').value);
      selectedModel = document.getElementById('modelSelector').value;

      localStorage.setItem('apiKey', apiKey);
      localStorage.setItem('maxTokens', maxTokens);
      localStorage.setItem('temperature', temperature);
      localStorage.setItem('selectedModel', selectedModel);

      alert('Settings saved!');
      closeModal('settingsModal');
      updateApiStatus();
  }

  function updateApiStatus(status = 'ready') {
      const statusText = document.getElementById('apiStatusText');

      if (status === 'ready') {
          statusText.style.color = '#4ade80'; // green
          statusText.textContent = 'Ready';
          document.getElementById('sendBtn').disabled = false;
      } else if (status === 'processing') {
          statusText.style.color = '#facc15'; // yellow
          statusText.textContent = 'Processing...';
          document.getElementById('sendBtn').disabled = true;
      } else if (status === 'error') {
          statusText.style.color = '#f87171'; // red
          statusText.textContent = 'Error';
          document.getElementById('sendBtn').disabled = false;
      } else {
          statusText.style.color = '#cbd5e1'; // gray
          statusText.textContent = 'Unknown';
          document.getElementById('sendBtn').disabled = false;
      }
  }

  // Load chats from localStorage
  function loadChats() {
      const stored = localStorage.getItem('chats');
      if (stored) {
          chats = JSON.parse(stored);
          renderChatHistory();
          if (Object.keys(chats).length > 0) {
              currentChatId = Object.keys(chats)[0];
              loadChat(currentChatId);
              return;
          }
      }
      newChat();
  }

  function saveChats() {
      localStorage.setItem('chats', JSON.stringify(chats));
  }

  function renderChatHistory() {
      const container = document.getElementById('chatHistory');
      container.innerHTML = '';
      Object.entries(chats).forEach(([id, chat]) => {
          const div = document.createElement('div');
          div.classList.add('chat-item');
          if (id === currentChat


ChatGPT said:
js
Copy
Edit
          if (id === currentChatId) {
              div.classList.add('active');
          }
          div.dataset.id = id;

          const title = chat.messages.length > 0
            ? chat.messages[0].content.slice(0, 20) + (chat.messages[0].content.length > 20 ? '...' : '')
            : 'New Chat';

          const time = new Date(chat.createdAt).toLocaleDateString();

          div.innerHTML = `
            <div class="chat-item-title" title="${chat.messages[0]?.content || 'New Chat'}">${title}</div>
            <div class="chat-item-time">${time}</div>
            <button class="delete-chat" title="Delete chat" onclick="deleteChat(event, '${id}')">&times;</button>
          `;

          div.addEventListener('click', () => {
              if (id !== currentChatId) {
                  loadChat(id);
              }
          });

          container.appendChild(div);
      });
  }

  function loadChat(id) {
      if (!chats[id]) return;
      currentChatId = id;
      renderChatHistory();
      renderMessages(chats[id].messages);
      document.getElementById('chatTitle').textContent = chats[id].messages.length > 0
        ? chats[id].messages[0].content.slice(0, 20) + (chats[id].messages[0].content.length > 20 ? '...' : '')
        : 'New Chat';
      scrollToBottom();
  }

  function renderMessages(messages) {
      const container = document.getElementById('chatMessages');
      container.innerHTML = '';

      if (messages.length === 0) {
          container.innerHTML = `
            <div class="welcome-message">
              <h2>Welcome to Aude.ai</h2>
              <p>Start chatting by typing your message below.</p>
            </div>
          `;
          return;
      }

      messages.forEach(msg => {
          const div = document.createElement('div');
          div.classList.add('message');
          div.classList.add(msg.role === 'user' ? 'user' : 'ai');

          const avatar = document.createElement('div');
          avatar.className = 'message-avatar';
          avatar.textContent = msg.role === 'user' ? 'You' : 'Aude.ai';

          const content = document.createElement('div');
          content.textContent = msg.content;

          div.appendChild(avatar);
          div.appendChild(content);
          container.appendChild(div);
      });
      scrollToBottom();
  }

  function scrollToBottom() {
      const container = document.getElementById('chatMessages');
      container.scrollTop = container.scrollHeight;
  }

  // Create new chat
  function newChat() {
      const id = Date.now().toString();
      chats[id] = {
          id: id,
          createdAt: new Date().toISOString(),
          messages: []
      };
      currentChatId = id;
      saveChats();
      renderChatHistory();
      loadChat(id);
  }

  function newChatButton() {
      if (confirm('Start a new chat? Your current chat will be saved.')) {
          newChat();
      }
  }

  // Delete chat
  function deleteChat(event, id) {
      event.stopPropagation();
      if (confirm('Delete this chat? This cannot be undone.')) {
          delete chats[id];
          if (currentChatId === id) {
              currentChatId = null;
          }
          saveChats();
          renderChatHistory();
          if (currentChatId) {
              loadChat(currentChatId);
          } else {
              newChat();
          }
      }
  }

  // Send message handler
  async function sendMessage() {
      if (isTyping) return;
      const input = document.getElementById('messageInput');
      const text = input.value.trim();
      if (!text) return;

      input.value = '';
      adjustTextarea(input);

      if (!currentChatId) {
          newChat();
      }

      // Append user message
      chats[currentChatId].messages.push({ role: 'user', content: text });
      saveChats();
      renderMessages(chats[currentChatId].messages);

      isTyping = true;
      updateApiStatus('processing');

      // Build context for AI
      // We'll send last 10 messages max for context
      const contextMessages = chats[currentChatId].messages.slice(-10).map(m => ({
          role: m.role,
          content: m.content
      }));

      let reply = await generateAIResponse(text, contextMessages);

      // Append AI response
      chats[currentChatId].messages.push({ role: 'assistant', content: reply });
      saveChats();
      renderMessages(chats[currentChatId].messages);

      isTyping = false;
      updateApiStatus('ready');
  }

  // Adjust textarea height to fit content
  function adjustTextarea(textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
  }

  // Send message on Enter key (Shift+Enter for newline)
  function handleKeyPress(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          sendMessage();
      }
  }

  // Modal controls
  function showSettings() {
      loadSettings();
      document.getElementById('settingsModal').classList.add('show');
  }
  function closeModal(id) {
      document.getElementById(id).classList.remove('show');
  }

  // Theme toggle
  function toggleTheme() {
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  }

  function loadTheme() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
          document.body.classList.add('dark-theme');
      }
  }

  // Init app
  window.onload = () => {
      loadTheme();
      loadSettings();
      loadChats();
  };
</script>
</body>
</html>
