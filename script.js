document.addEventListener('DOMContentLoaded', () => {
    const socket = new WebSocket('ws://localhost:3000');

    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message !== '') {
            socket.send(message);
            messageInput.value = '';
        }
    });

    socket.addEventListener('message', (event) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = event.data;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    });
});
