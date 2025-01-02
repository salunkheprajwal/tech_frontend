const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const chatbotRoutes = require('./chatbot/route');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request body

// Email Route
app.post('/send-email', async (req, res) => {
  const { email, subject, message, selectedProblems } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: 'salunkheprajwal51@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have received a new message from ${email}.\n\nSelected Problems: ${selectedProblems?.join(', ')}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});
  
// Chatbot Routes
app.use('/api', chatbotRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
