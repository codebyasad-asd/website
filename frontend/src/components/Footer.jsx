import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMosque, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaYoutube, 
  FaWhatsapp 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white p-2 rounded-full">
                <FaMosque className="text-green-800 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Jamia Islamia</h3>
                <p className="text-green-300 font-arabic">ضیاء القرآن</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to providing quality Islamic education and nurturing 
              the next generation of Muslim scholars and leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition">
                <FaFacebook />
              </a>
              <a href="#" className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition">
                <FaTwitter />
              </a>
              <a href="#" className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition">
                <FaYoutube />
              </a>
              <a href="#" className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Faculty', 'Students', 'Admissions', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">
              Our Programs
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Hifz ul Quran</li>
              <li>• Nazra Quran</li>
              <li>• Alim Course</li>
              <li>• Fazil Course</li>
              <li>• Arabic Language</li>
              <li>• Islamic Studies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-green-400" />
                <span className="text-gray-300">
                  123 Islamic Center Road,<br />
                  City, Country - 12345
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-green-400" />
                <span className="text-gray-300">+92-XXX-XXXXXXX</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-green-400" />
                <span className="text-gray-300">info@jamiaislamia.edu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 Jamia Islamia Zia ul Quran. All rights reserved.</p>
          <p className="mt-1 font-arabic text-lg text-green-300">
            وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;