import React from 'react';
import { FaUser, FaIdCard, FaBook, FaCalendar } from 'react-icons/fa';

const StudentCard = ({ student }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="card">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mr-4">
            {student.image ? (
              <img 
                src={student.image} 
                alt={student.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <FaUser className="text-white text-2xl" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{student.name}</h3>
            <p className="text-sm text-gray-500">S/O {student.fatherName}</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <span className="flex items-center text-gray-600">
              <FaIdCard className="mr-2 text-green-600" />
              Reg. No.
            </span>
            <span className="font-medium">{student.registrationNumber}</span>
          </div>

          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <span className="flex items-center text-gray-600">
              <FaBook className="mr-2 text-green-600" />
              Class
            </span>
            <span className="font-medium">
              {student.class} {student.section && `- ${student.section}`}
            </span>
          </div>

          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <span className="flex items-center text-gray-600">
              <FaCalendar className="mr-2 text-green-600" />
              DOB
            </span>
            <span className="font-medium">{formatDate(student.dateOfBirth)}</span>
          </div>

          {student.bloodGroup && (
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Blood Group</span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded font-medium">
                {student.bloodGroup}
              </span>
            </div>
          )}
        </div>

        {/* Status */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            student.isActive 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {student.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;