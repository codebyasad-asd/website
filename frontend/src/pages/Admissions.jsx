import React, { useState } from 'react';
import { FaCheckCircle, FaFileAlt, FaCalendar, FaMoneyBill } from 'react-icons/fa';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    dateOfBirth: '',
    gender: '',
    program: '',
    phone: '',
    email: '',
    address: '',
    previousEducation: ''
  });

  const programs = [
    { name: 'Nazra Quran', duration: '1-2 Years', fee: '₨ 2,000/month' },
    { name: 'Hifz ul Quran', duration: '3-4 Years', fee: '₨ 3,500/month' },
    { name: 'Alim Course', duration: '6 Years', fee: '₨ 4,000/month' },
    { name: 'Fazil Course', duration: '2 Years', fee: '₨ 4,500/month' },
  ];

  const requirements = [
    'Completed application form',
    'Birth certificate copy',
    'Previous education certificates',
    'Passport size photographs (4)',
    'Parent/Guardian CNIC copy',
    'Medical fitness certificate'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Begin your journey of Islamic knowledge with us
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Programs</h2>
          <p className="section-subtitle text-center">Choose the program that suits your learning goals</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {programs.map((program, index) => (
              <div key={index} className="card p-6 text-center hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{program.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center justify-center">
                    <FaCalendar className="mr-2 text-green-600" />
                    {program.duration}
                  </p>
                  <p className="flex items-center justify-center">
                    <FaMoneyBill className="mr-2 text-green-600" />
                    {program.fee}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Admission Requirements</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <FaFileAlt className="text-5xl text-green-600 mx-auto mb-4" />
              <h2 className="section-title">Application Form</h2>
              <p className="text-gray-600">Fill out the form below to apply for admission</p>
            </div>

            <form onSubmit={handleSubmit} className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Father's Name *</label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Program *</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select Program</option>
                    {programs.map((p, i) => (
                      <option key={i} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="input-field"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Previous Education</label>
                  <textarea
                    name="previousEducation"
                    value={formData.previousEducation}
                    onChange={handleChange}
                    className="input-field"
                    rows="3"
                    placeholder="Mention your previous educational background..."
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full mt-8">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;