const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['General', 'Academic', 'Event', 'Holiday', 'Examination', 'Result'],
    default: 'General'
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  expiryDate: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Announcement', announcementSchema);
