import React, { useState, useEffect, useRef } from 'react';
import './chatWidget.css';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  const introMessages = [
    { sender: 'bot', text: '👋 Hello! I\'m AmmaChat – your AI assistant.' },
  ];

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
    if (isOpen && messages.length === 0) {
      setMessages(introMessages);
    }
  }, [messages, isOpen]);

  const handleSend = async (customText = null) => {
    const messageText = customText || input.trim();
    if (!messageText) return;

    const userMessage = { sender: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'bot', text: " This is a demo UI – Backend with RAG (Retrieval-Augmented Generation) is coming soon!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`chat-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <div className="chat-toggle" onClick={() => setIsOpen(true)}>💬</div>
      )}

      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <span className="chat-title">💬 AmmaChat</span>
            <button
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg ${msg.sender}`}
                onClick={() => msg.clickable && handleSend(msg.text)}
                style={{ cursor: msg.clickable ? 'pointer' : 'default' }}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="chat-msg bot">Typing...</div>}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !loading && handleSend()}
              placeholder="Type a message..."
              disabled={loading}
            />
            <button onClick={() => handleSend()} disabled={!input.trim() || loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
