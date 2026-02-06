import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images - replace with actual images
  const galleryImages = [
    { id: 1, src: '/images/gallery/1.jpg', title: 'Quran Class', category: 'Classes' },
    { id: 2, src: '/images/gallery/2.jpg', title: 'Annual Function', category: 'Events' },
    { id: 3, src: '/images/gallery/3.jpg', title: 'Hifz Completion', category: 'Achievements' },
    { id: 4, src: '/images/gallery/4.jpg', title: 'Campus View', category: 'Campus' },
    { id: 5, src: '/images/gallery/5.jpg', title: 'Library', category: 'Facilities' },
    { id: 6, src: '/images/gallery/6.jpg', title: 'Prayer Hall', category: 'Campus' },
    { id: 7, src: '/images/gallery/7.jpg', title: 'Sports Day', category: 'Events' },
    { id: 8, src: '/images/gallery/8.jpg', title: 'Graduation Ceremony', category: 'Achievements' },
  ];

  const categories = ['All', 'Classes', 'Events', 'Achievements', 'Campus', 'Facilities'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Glimpses of life at Jamia Islamia Zia ul Quran
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-green-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-200"
              >
                {/* Placeholder for images */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{image.title}</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h4 className="font-semibold">{image.title}</h4>
                    <span className="text-sm text-green-300">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-2xl hover:text-green-400"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>
          <div className="max-w-4xl max-h-[90vh] bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
              <span className="text-white text-2xl">{selectedImage.title}</span>
            </div>
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-green-400">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;