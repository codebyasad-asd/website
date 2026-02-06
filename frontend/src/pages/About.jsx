import React from 'react';
import { FaQuran, FaHistory, FaEye, FaBullseye, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const values = [
    'Authentic Islamic Education',
    'Excellence in Quran Memorization',
    'Character Development',
    'Spiritual Growth',
    'Academic Excellence',
    'Community Service'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Learn about our mission, vision, and the journey of Jamia Islamia Zia ul Quran
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <FaQuran className="text-4xl text-green-700" />
              </div>
              <h2 className="section-title">Welcome to Jamia Islamia Zia ul Quran</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Jamia Islamia Zia ul Quran is a distinguished Islamic educational institution 
                committed to providing authentic Islamic education while nurturing the spiritual 
                and intellectual growth of our students. Established with the vision of creating 
                future Islamic scholars and leaders, we have been serving the Muslim community 
                for over 15 years.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our name "Zia ul Quran" (Light of the Quran) reflects our core mission - to 
                illuminate hearts and minds with the divine guidance of the Holy Quran. We 
                believe that true education encompasses not just academic knowledge but also 
                spiritual development and moral excellence.
              </p>
              <p className="font-arabic text-2xl text-center text-green-800 my-8">
                وَقُل رَّبِّ زِدْنِي عِلْمًا
              </p>
              <p className="text-center text-gray-500 italic">
                "And say: My Lord, increase me in knowledge" (Quran 20:114)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <FaHistory className="text-4xl text-green-700 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2008, Jamia Islamia Zia ul Quran started as a small Quran learning 
                center with just a handful of students and dedicated teachers. Over the years, 
                with the blessings of Allah and the support of our community, we have grown 
                into a fully-fledged Islamic educational institution.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we are proud to have produced hundreds of Huffaz (those who have 
                memorized the Quran) and numerous Alim and Fazil graduates who are now 
                serving the Muslim community across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaBullseye className="text-2xl text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide quality Islamic education that combines traditional Islamic 
                sciences with modern educational methods, producing well-rounded individuals 
                who are firmly rooted in their faith and capable of contributing positively 
                to society.
              </p>
            </div>

            {/* Vision */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaEye className="text-2xl text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a leading Islamic educational institution recognized for 
                academic excellence, spiritual development, and the production of 
                scholars who carry forward the legacy of authentic Islamic knowledge 
                to future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-green-200 text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="flex items-center bg-white/10 p-4 rounded-lg">
                <FaCheckCircle className="text-green-400 mr-3 flex-shrink-0" />
                <span className="text-lg">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
