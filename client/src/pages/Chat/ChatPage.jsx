import React, { useState } from 'react';
import '../../assets/css/chat_styles.css';

const ChatPage = () => {
    const [messages, setMessages] = useState([
        { id: 1, from: 'Admin', text: 'Hello! Let us know if you need help.', time: '10:30 AM' },
        { id: 2, from: 'You', text: 'Hi Admin, I had a query regarding my match.', time: '10:32 AM' },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        if (newMessage.trim() !== '') {
            setMessages([
                ...messages,
                {
                    id: messages.length + 1,
                    from: 'You',
                    text: newMessage,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
            ]);
            setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="chat-wrapper">
            <div className="chat-header">
                <h4>💬 Chat with Admin / Matched Users</h4>
            </div>

            <div className="chat-body">
                {messages.map((msg) => (
                    <div key={msg.id} className={`chat-message ${msg.from === 'You' ? 'sent' : 'received'}`}>
                        <div className="message-info">
                            <span className="sender">{msg.from}</span>
                            <span className="time">{msg.time}</span>
                        </div>
                        <div className="message-text">{msg.text}</div>
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button className="btn btn-primary" onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatPage;
