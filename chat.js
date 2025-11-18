const inputChat = document.getElementById('inputChat');
const chatWindow = document.getElementById('chatWindow');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
  const text = inputChat.value.trim();
  if (text) {
    const userBubble = document.createElement('div');
    userBubble.classList.add('bubble', 'question');
    userBubble.textContent = text;
    chatWindow.appendChild(userBubble);
    inputChat.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
});

inputChat.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});