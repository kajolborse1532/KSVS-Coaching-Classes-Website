import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'LearningBot',
  initialMessages: [createChatBotMessage('Hi! How can I help you today?')],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#ffa500',
    },
    chatButton: {
      backgroundColor: '#ffa500',
    },
  },
};

export default config;
