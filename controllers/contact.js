const Message = require('../models/Message');

// Function to save a message
const saveMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error saving message:', err.message);
    res.status(500).json({ error: 'Server error, please try again later' });
  }
};

module.exports = { saveMessage };
