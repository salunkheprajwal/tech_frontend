const express = require('express');
const router = express.Router();
const { handleChatbot } = require('./controller');

// Define chatbot route
router.post('/chat', handleChatbot);

module.exports = router;
