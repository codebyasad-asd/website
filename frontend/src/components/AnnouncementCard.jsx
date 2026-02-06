import React from 'react';
import { FaCalendar, FaBullhorn } from 'react-icons/fa';

const AnnouncementCard = ({ announcement }) => {
  const getCategoryColor = (category) => {
    const colors = {
      General: 'bg-blue-100 text-blue-700',
      Academic: 'bg-purple-100 text-purple-700',
      Event: 'bg-green-100 text-green-700',
      Holiday: 'bg-yellow-100 text-yellow-700',
      Examination: 'bg-orange-100 text-orange-700',
      Result: 'bg-pink-100 text-pink-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      Low: 'border-l-gray-400',
      Medium: 'border-l-yellow-500',
      High: 'border-l-red-500'
    };
    return colors[priority] || 'border-l-gray-400';
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-5 border-l-4 ${getPriorityColor(announcement.priority)} hover:shadow-lg transition`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <FaBullhorn className="text-green-600 mr-2" />
          <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(announcement.category)}`}>
            {announcement.category}
          </span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FaCalendar className="mr-1" />
          {formatDate(announcement.createdAt)}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {announcement.title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed">
        {announcement.content}
      </p>
    </div>
  );
};

export default AnnouncementCard;
