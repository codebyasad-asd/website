import React, { useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      details: ['123 Islamic Center Road', 'City, Country - 12345']
    },
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+92-XXX-XXXXXXX', '+92-XXX-XXXXXXX']
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@jamiaislamia.edu', 'admissions@jamiaislamia.edu']
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: ['Mon - Sat: 8:00 AM - 5:00 PM', 'Friday: 8:00 AM - 12:30 PM']
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Get in touch with us for any inquiries
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-2xl text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {success && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
              
              {error && (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
              <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-5xl text-green-700 mx-auto mb-4" />
                  <p className="text-gray-600">Google Map will be embedded here</p>
                </div>
              </div>
              
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/92XXXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <FaWhatsapp className="text-2xl mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;