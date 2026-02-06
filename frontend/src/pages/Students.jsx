import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch, FaUsers, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import StudentCard from '../components/StudentCard';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const classes = [
    'All',
    'Hifz',
    'Nazra',
    'Alim',
    'Fazil',
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5'
  ];

  useEffect(() => {
    fetchStudents();
    fetchStats();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students?isActive=true');
      setStudents(response.data.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students/stats/overview');
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesClass = selectedClass === 'All' || student.class === selectedClass;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClass && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Students</h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Our bright students pursuing Islamic knowledge
          </p>
        </div>
      </section>

      {/* Stats */}
      {stats && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <FaUsers className="text-4xl text-green-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gray-800">{stats.totalStudents}</h3>
                <p className="text-gray-600">Total Students</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <FaUserGraduate className="text-4xl text-blue-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gray-800">{stats.maleStudents}</h3>
                <p className="text-gray-600">Male Students</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <FaChalkboardTeacher className="text-4xl text-purple-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-gray-800">{stats.femaleStudents}</h3>
                <p className="text-gray-600">Female Students</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search & Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or registration number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Class Filter */}
            <div className="flex flex-wrap gap-2">
              {classes.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedClass === cls
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Students Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            </div>
          ) : filteredStudents.length > 0 ? (
            <>
              <p className="text-center text-gray-500 mb-8">
                Showing {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredStudents.map((student) => (
                  <StudentCard key={student._id} student={student} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No students found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Students;