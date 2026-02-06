import React from 'react';
import { FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const FacultyCard = ({ faculty }) => {
  return (
    <div className="card group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
          {faculty.image ? (
            <img 
              src={faculty.image} 
              alt={faculty.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          ) : (
            <div className="w-32 h-32 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">
                {faculty.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm">
          {faculty.department}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{faculty.name}</h3>
        <p className="text-green-600 font-medium mb-4">{faculty.designation}</p>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <FaGraduationCap className="mr-2 text-green-600" />
            <span>{faculty.qualification}</span>
          </div>
          <div className="flex items-center">
            <FaBriefcase className="mr-2 text-green-600" />
            <span>{faculty.experience} years experience</span>
          </div>
          {faculty.specialization && (
            <div className="flex items-center">
              <span className="mr-2 text-green-600">★</span>
              <span>{faculty.specialization}</span>
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
          <a 
            href={`mailto:${faculty.email}`}
            className="flex items-center text-gray-500 hover:text-green-600 transition"
          >
            <FaEnvelope className="mr-1" />
            <span className="text-sm">Email</span>
          </a>
          {faculty.phone && (
            <a 
              href={`tel:${faculty.phone}`}
              className="flex items-center text-gray-500 hover:text-green-600 transition"
            >
              <FaPhone className="mr-1" />
              <span className="text-sm">Call</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;