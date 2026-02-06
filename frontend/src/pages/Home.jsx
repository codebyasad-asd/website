import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  FaQuran, 
  FaGraduationCap, 
  FaUsers, 
  FaMosque, 
  FaChalkboardTeacher,
  FaBook,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';
import AnnouncementCard from '../components/AnnouncementCard';

const Home = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/announcements?limit=4&isActive=true');
      setAnnouncements(response.data.data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: FaQuran,
      title: 'Hifz ul Quran',
      description: 'Complete Quran memorization program with Tajweed under qualified Huffaz.'
    },
    {
      icon: FaBook,
      title: 'Islamic Studies',
      description: 'Comprehensive curriculum covering Fiqh, Hadith, Tafseer, and Islamic History.'
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Qualified Faculty',
      description: 'Learn from experienced scholars and certified teachers.'
    },
    {
      icon: FaGraduationCap,
      title: 'Recognized Degrees',
      description: 'Alim and Fazil degree programs recognized by Islamic boards.'
    }
  ];

  const stats = [
    { icon: FaUsers, number: '500+', label: 'Students' },
    { icon: FaChalkboardTeacher, number: '25+', label: 'Teachers' },
    { icon: FaMosque, number: '15+', label: 'Years' },
    { icon: FaStar, number: '100+', label: 'Huffaz' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-arabic text-3xl md:text-4xl mb-4 text-green-200">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Jamia Islamia
              <span className="block text-green-300 font-arabic mt-2">ضیاء القرآن</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Illuminating Hearts with the Light of Quran
            </p>
            <p className="text-lg text-green-200 mb-10 max-w-2xl mx-auto">
              A premier Islamic educational institution dedicated to nurturing 
              the spiritual and academic growth of students through authentic 
              Islamic knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="btn-primary flex items-center justify-center">
                Apply for Admission
                <FaArrowRight className="ml-2" />
              </Link>
              <Link to="/about" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#f9fafb">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <stat.icon className="text-4xl text-green-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gray-800">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              Comprehensive Islamic education programs for all ages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center group hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-all duration-300">
                  <feature.icon className="text-3xl text-green-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Latest Announcements</h2>
            <p className="section-subtitle">
              Stay updated with the latest news and events
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            </div>
          ) : announcements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {announcements.map((announcement) => (
                <AnnouncementCard key={announcement._id} announcement={announcement} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No announcements at the moment.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Journey of Islamic Knowledge
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our institution and become part of a legacy dedicated to 
            preserving and spreading the light of Quran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-800 hover:bg-green-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </Link>
            <Link to="/admissions" className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;