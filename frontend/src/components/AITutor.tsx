'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AITutor({ subject }) {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/ai/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: subject,
          input: userInput,
          format: 'conversation'
        }),
      });

      const data = await response.json();
      
      setConversation([
        ...conversation,
        { role: 'user', content: userInput },
        { role: 'assistant', content: data.content }
      ]);
      
      setUserInput('');
    } catch (error) {
      console.error('AI tutor error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
        <div className="space-y-4 mb-6">
          {conversation.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-purple-500/20 ml-12' 
                  : 'bg-blue-500/20 mr-12'
              }`}
            >
              {message.content}
            </motion.div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value
