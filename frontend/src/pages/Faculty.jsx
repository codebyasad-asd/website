import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacultyCard from '../components/FacultyCard';

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = [
    'All',
    'Administration',
    'Quran Studies',
    'Islamic Studies',
    'Arabic',
    'Hadith',
    'Fiqh',
    'General Education'
  ];

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/faculty?isActive=true');
      setFaculty(response.data.data);
    } catch (error) {
      console.error('Error fetching faculty:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFaculty = selectedDepartment === 'All' 
    ? faculty 
    : faculty.filter(f => f.department === selectedDepartment);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Meet our dedicated team of scholars and educators
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-green-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            </div>
          ) : filteredFaculty.length > 0 ? (
            <>
              <p className="text-center text-gray-500 mb-8">
                Showing {filteredFaculty.length} faculty member{filteredFaculty.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFaculty.map((member) => (
                  <FacultyCard key={member._id} faculty={member} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No faculty members found in this department.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Faculty;