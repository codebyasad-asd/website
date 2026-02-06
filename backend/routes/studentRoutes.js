const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students
router.get('/', async (req, res) => {
  try {
    const { class: studentClass, section, isActive } = req.query;
    let query = {};
    
    if (studentClass) query.class = studentClass;
    if (section) query.section = section;
    if (isActive !== undefined) query.isActive = isActive === 'true';
    
    const students = await Student.find(query).sort({ name: 1 });
    res.json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get student by registration number
router.get('/registration/:regNo', async (req, res) => {
  try {
    const student = await Student.findOne({ registrationNumber: req.params.regNo });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create student
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ success: true, data: student });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Update student
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Delete student
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get students by class
router.get('/class/:className', async (req, res) => {
  try {
    const students = await Student.find({ class: req.params.className, isActive: true });
    res.json({ success: true, count: students.length, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get student statistics
router.get('/stats/overview', async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments({ isActive: true });
    const maleStudents = await Student.countDocuments({ gender: 'Male', isActive: true });
    const femaleStudents = await Student.countDocuments({ gender: 'Female', isActive: true });
    
    const classCounts = await Student.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: '$class', count: { $sum: 1 } } }
    ]);
    
    res.json({
      success: true,
      data: {
        totalStudents,
        maleStudents,
        femaleStudents,
        classCounts
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;