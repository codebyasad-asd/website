const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// Get all faculty members
router.get('/', async (req, res) => {
  try {
    const { department, isActive } = req.query;
    let query = {};
    
    if (department) query.department = department;
    if (isActive !== undefined) query.isActive = isActive === 'true';
    
    const faculty = await Faculty.find(query).sort({ name: 1 });
    res.json({
      success: true,
      count: faculty.length,
      data: faculty
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single faculty member
router.get('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ success: false, message: 'Faculty not found' });
    }
    res.json({ success: true, data: faculty });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Create faculty member
router.post('/', async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).json({ success: true, data: faculty });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Update faculty member
router.put('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!faculty) {
      return res.status(404).json({ success: false, message: 'Faculty not found' });
    }
    res.json({ success: true, data: faculty });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Delete faculty member
router.delete('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!faculty) {
      return res.status(404).json({ success: false, message: 'Faculty not found' });
    }
    res.json({ success: true, message: 'Faculty deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get faculty by department
router.get('/department/:dept', async (req, res) => {
  try {
    const faculty = await Faculty.find({ department: req.params.dept, isActive: true });
    res.json({ success: true, count: faculty.length, data: faculty });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;