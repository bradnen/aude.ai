<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Aude.ai Chat</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <aside id="chatHistory"></aside>
  <main>
    <header>
      <h1 id="chatTitle">New Chat</h1>
      <div>
        <button onclick="toggleTheme()">Toggle Theme</button>
        <button onclick="showSettings()">Settings</button>
        <button onclick="newChatButton()">New Chat</button>
      </div>
    </header>

    <section id="chatMessages">
      <p style="text-align:center; color:#666;">Welcome to Aude.ai! Start typing your message below.</p>
    </section>

    <footer>
      <textarea id="messageInput" rows="2" placeholder="Type a message..." oninput="adjustTextarea(this)" onkeypress="handleKeyPress(event)"></textarea>
      <button id="sendBtn" onclick="sendMessage()">Send</button>
    </footer>
  </main>

  <div id="settingsModal" class="modal" role="dialog" aria-modal="true">
    <div class="modal-content">
      <h2>Settings</h2>
      <label for="apiKey">OpenAI API Key</label>
      <input type="text" id="apiKey" placeholder="sk-..." />

      <label for="modelSelector">Model</label>
      <select id="modelSelector">
        <option value="gpt-4">gpt-4</option>
        <option value="gpt-4o-mini">gpt-4o-mini</option>
        <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
        <option value="local">Local (Simulated)</option>
      </select>

      <label for="temperatureSlider">Temperature</label>
      <input type="range" id="temperatureSlider" min="0" max="1" step="0.05" value="0.7" />

      <div style="margin-top: 15px; text-align: right;">
        <button onclick="closeModal('settingsModal')">Cancel</button>
        <button onclick="saveSettings()">Save</button>
      </div>
    </div>
  </div>

  <script>
    let currentChatId = null;
    let chats = {};
    let isTyping = false;
    let selectedModel = 'gpt-4';
    let temperature = 0.7;
    let maxTokens = 2000;
    let apiKey = '';

    const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

    async function generateAIResponse(message, context = []) {
      if (!apiKey && selectedModel !== 'local') {
        return "⚠️ Please enter your OpenAI API key in settings to use this model.";
      }

      const model = selectedModel;

      if (model === 'local') return generateLocalResponse(message);

      try {
        updateApiStatus('processing');
        const messages = [...context, { role: 'user', content: message }];

        const response = await fetch(OPENAI_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({ model, messages, temperature, max_tokens: maxTokens })
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error?.message || 'API error');
        }

        const data = await response.json();
        updateApiStatus('ready');
        return data.choices[0].message.content.trim();
      } catch (error) {
        updateApiStatus('error');
        return `⚠️ Error: ${error.message}`;
      }
    }

    function generateLocalResponse(message) {
      const m = message.toLowerCase();
      if (m.includes('hello')) return "Hello! I'm Aude.ai.";
      if (m.includes('help')) return "I'm here to help. Ask anything!";
      return "I'm a simulated response. Set your API key for real answers.";
    }

    function sendMessage() {
      if (isTyping) return;
      const input = document.getElementById('messageInput');
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      adjustTextarea(input);

      if (!currentChatId) newChat();
      chats[currentChatId].messages.push({ role: 'user', content: text });
      saveChats();
      renderMessages(chats[currentChatId].messages);

      isTyping = true;
      updateApiStatus('processing');

      const context = chats[currentChatId].messages.slice(-10);
      generateAIResponse(text, context).then(reply => {
        chats[currentChatId].messages.push({ role: 'assistant', content: reply });
        saveChats();
        renderMessages(chats[currentChatId].messages);
        isTyping = false;
        updateApiStatus('ready');
      });
    }

    function adjustTextarea(t) {
      t.style.height = 'auto';
      t.style.height = t.scrollHeight + 'px';
    }

    function handleKeyPress(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }

    function toggleTheme() {
      document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    }

    function loadTheme() {
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
      }
    }

    function showSettings() {
      loadSettings();
      document.getElementById('settingsModal').classList.add('show');
    }

    function closeModal(id) {
      document.getElementById(id).classList.remove('show');
    }

    function saveSettings() {
      apiKey = document.getElementById('apiKey').value.trim();
      temperature = parseFloat(document.getElementById('temperatureSlider').value);
      selectedModel = document.getElementById('modelSelector').value;
      localStorage.setItem('apiKey', apiKey);
      localStorage.setItem('temperature', temperature);
      localStorage.setItem('selectedModel', selectedModel);
      alert('Settings saved!');
      closeModal('settingsModal');
    }

    function updateApiStatus(status = 'ready') {
      const btn = document.getElementById('sendBtn');
      if (status === 'ready') btn.disabled = false;
      if (status === 'processing') btn.disabled = true;
    }

    function newChatButton() {
      if (confirm('Start a new chat?')) newChat();
    }

    function newChat() {
      const id = Date.now().toString();
      chats[id] = { id, createdAt: new Date().toISOString(), messages: [] };
      currentChatId = id;
      saveChats();
      renderMessages([]);
    }

    function saveChats() {
      localStorage.setItem('chats', JSON.stringify(chats));
    }

    function loadChats() {
      const stored = localStorage.getItem('chats');
      if (stored) chats = JSON.parse(stored);
    }

    function renderMessages(messages) {
      const container = document.getElementById('chatMessages');
      container.innerHTML = '';
      messages.forEach(msg => {
        const div = document.createElement('div');
        div.className = 'message ' + msg.role;
        div.textContent = msg.content;
        container.appendChild(div);
      });
    }

    function loadSettings() {
      apiKey = localStorage.getItem('apiKey') || '';
      temperature = parseFloat(localStorage.getItem('temperature')) || 0.7;
      selectedModel = localStorage.getItem('selectedModel') || 'gpt-4';
      document.getElementById('apiKey').value = apiKey;
      document.getElementById('temperatureSlider').value = temperature;
      document.getElementById('modelSelector').value = selectedModel;
    }

    window.onload = () => {
      loadTheme();
      loadSettings();
      loadChats();
      if (!currentChatId && Object.keys(chats).length > 0) {
        currentChatId = Object.keys(chats)[0];
        renderMessages(chats[currentChatId].messages);
      } else {
        newChat();
      }
    };
  </script>
</body>
</html>
