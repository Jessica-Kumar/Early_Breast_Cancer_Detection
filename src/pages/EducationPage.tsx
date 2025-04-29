import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Info, Book, Film, AlertCircle, List, Tag, ArrowRight } from 'lucide-react';
import CancerTypeCard from '../components/CancerTypeCard';
import AIDemo from '../components/AIDemo';
import { cancerTypes } from '../data/cancerTypes';

const EducationPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCancerTypes = cancerTypes.filter(type => {
    const matchesSearch = type.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          type.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    return matchesSearch && type.category === activeFilter;
  });

  const categories = [
    { id: 'all', name: 'All Types', icon: <List className="h-4 w-4" /> },
    { id: 'common', name: 'Most Common', icon: <Tag className="h-4 w-4" /> },
    { id: 'reproductive', name: 'Reproductive', icon: <Info className="h-4 w-4" /> },
    { id: 'digestive', name: 'Digestive System', icon: <Info className="h-4 w-4" /> },
    { id: 'blood', name: 'Blood & Lymphatic', icon: <Info className="h-4 w-4" /> },
    { id: 'other', name: 'Other Types', icon: <Info className="h-4 w-4" /> },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Cancer Education Center</h1>
            <p className="text-xl text-blue-100 mb-8">
              Learn about different types of cancer, risk factors, symptoms, and early detection methods to empower yourself with knowledge.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search cancer types, symptoms, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white sticky top-16 z-40 shadow-sm">
        <div className="container-custom overflow-x-auto">
          <div className="flex space-x-1 py-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-md flex items-center ${
                  activeFilter === category.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cancer Types Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Cancer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about different cancer types, their symptoms, risk factors, and early detection methods.
            </p>
          </div>
          
          {filteredCancerTypes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCancerTypes.map((cancerType, index) => (
                <CancerTypeCard key={index} cancerType={cancerType} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expand your knowledge with our curated collection of articles, videos, and learning materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card h-full">
              <div className="relative h-48 bg-blue-100">
                <Book className="absolute inset-0 m-auto h-16 w-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Articles & Research</h3>
                <p className="text-gray-600 mb-4">
                  Access peer-reviewed articles and the latest research in cancer detection and treatment.
                </p>
                <Link 
                  to="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Browse articles <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="card h-full">
              <div className="relative h-48 bg-teal-100">
                <Film className="absolute inset-0 m-auto h-16 w-16 text-teal-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Video Library</h3>
                <p className="text-gray-600 mb-4">
                  Watch educational videos explaining cancer concepts, detection methods, and treatment options.
                </p>
                <Link 
                  to="#" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                >
                  Watch videos <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="card h-full">
              <div className="relative h-48 bg-pink-100">
                <Info className="absolute inset-0 m-auto h-16 w-16 text-pink-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Prevention Guides</h3>
                <p className="text-gray-600 mb-4">
                  Learn about lifestyle changes, screening recommendations, and strategies to reduce your cancer risk.
                </p>
                <Link 
                  to="#" 
                  className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium"
                >
                  Read guides <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section id="ai-demo" className="section bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How AI Assists in Cancer Detection</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              See how artificial intelligence technology is being used to help identify potential cancer signs in medical images.
            </p>
          </div>
          
          <AIDemo />
          
          <div className="mt-12 text-center">
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-6">
              <strong>Disclaimer:</strong> This is a simplified demonstration for educational purposes only. 
              AI tools assist healthcare professionals but do not replace professional medical diagnosis.
            </p>
            <Link 
              to="/resources"
              className="btn bg-white text-blue-700 hover:bg-blue-50"
            >
              Find Medical Professionals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;