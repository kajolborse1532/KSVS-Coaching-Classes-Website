import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './ChatbotComponent.css'; // Ensure this file exists and has your custom styles

const ChatbotComponent = ({ visible }) => {
  return (
    <div className={`chatbot-container ${visible ? 'visible' : ''}`}>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
};

export default ChatbotComponent;
