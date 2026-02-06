const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true
  },
  class: {
    type: String,
    required: true,
    enum: ['Hifz', 'Nazra', 'Alim', 'Fazil', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10']
  },
  section: {
    type: String,
    enum: ['A', 'B', 'C', 'D']
  },
  admissionDate: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  guardianPhone: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  image: {
    type: String,
    default: '/images/default-student.png'
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  fees: {
    totalFees: Number,
    paidFees: Number,
    pendingFees: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);