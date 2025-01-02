// controllers/chatbotController.js

// Predefined chatbot responses
const responses = {
    about: "We are a leading tech company specializing in AI and automation solutions.",
    services: "We offer AI-powered tools for businesses, including automation and analytics platforms.",
    contact: "You can reach us at support@example.com or call +123-456-7890.",
  careers: "Visit our careers page at www.example.com/careers.",
  help: "I can help you with information about our company, services, and contact details.",

  };
  
  // Chatbot response handler
  function handleChatbot(req, res) {
    const userInput = req.body.message?.toLowerCase() || '';
  
    let reply = "Sorry, I didn't understand that. Please ask about our company, services, or contact details.";
  
    if (userInput.includes('about')) {
      reply = responses.about;
    } else if (userInput.includes('services')) {
      reply = responses.services;
    } else if (userInput.includes('contact')) {
      reply = responses.contact;
    } else if (userInput.includes('careers')) {
      reply = responses.careers;
    } else if (userInput.includes('help')) {
      reply = responses.help;
    }
    
  
    res.json({ response: reply });
  }
  
  module.exports = { handleChatbot };
  