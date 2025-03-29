// Handle form submission
document.getElementById('messageForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent page reload
    const message = document.getElementById('message').value;

    // Send the message to the backend
    try {
        const response = await fetch('YOUR_BACKEND_URL/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        if (response.ok) {
            document.getElementById('message').value = ''; // Clear the input
            fetchMessages(); // Refresh the message list
        } else {
            alert('Error submitting message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit message');
    }
});

// Fetch and display messages from the backend
async function fetchMessages() {
    try {
        const response = await fetch('YOUR_BACKEND_URL/messages');
        const messages = await response.json();
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML = messages.map(msg => `<p>${msg.message}</p>`).join('');
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

// Load messages when the page loads
fetchMessages();