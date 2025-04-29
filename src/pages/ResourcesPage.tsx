import React, { useState } from 'react';
import { Search, Map, Phone, Clock, Star, ExternalLink, FilterX, Filter, MapPin } from 'lucide-react';

interface Resource {
  id: number;
  name: string;
  category: string;
  type: 'specialist' | 'support' | 'facility' | 'financial';
  description: string;
  location: string;
  rating: number;
  contact: string;
  hours?: string;
  website?: string;
  tags: string[];
  imageUrl: string;
}

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const resources: Resource[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson - Oncologist",
      category: "specialist",
      type: "specialist",
      description: "Board-certified oncologist with 15+ years of experience specializing in breast and lung cancer treatment.",
      location: "Medical Center Plaza, Suite 302, Health City",
      rating: 4.9,
      contact: "(555) 123-4567",
      hours: "Mon-Fri: 8AM-5PM",
      website: "https://example.com/dr-johnson",
      tags: ["oncologist", "breast cancer", "lung cancer"],
      imageUrl: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Hope & Healing Support Group",
      category: "emotional",
      type: "support",
      description: "Weekly support group for cancer patients and survivors. Share experiences and find emotional support from others on the same journey.",
      location: "Community Center, 500 Main Street, Health City",
      rating: 5.0,
      contact: "(555) 987-6543",
      hours: "Wednesdays: 6PM-8PM",
      website: "https://example.com/hope-healing",
      tags: ["support group", "emotional support", "survivors"],
      imageUrl: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "City Cancer Treatment Center",
      category: "treatment",
      type: "facility",
      description: "Comprehensive cancer treatment facility offering the latest in radiation therapy, chemotherapy, and surgical interventions.",
      location: "100 Medical Drive, Health City",
      rating: 4.7,
      contact: "(555) 789-0123",
      hours: "24/7 Emergency Services, Outpatient: Mon-Fri 7AM-7PM",
      website: "https://example.com/cctc",
      tags: ["hospital", "radiation", "chemotherapy", "surgery"],
      imageUrl: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "Cancer Financial Assistance Program",
      category: "financial",
      type: "financial",
      description: "Provides financial support for cancer patients struggling with treatment costs, medication expenses, and lost income.",
      location: "Virtual and In-person at 250 Helper Ave, Health City",
      rating: 4.8,
      contact: "(555) 456-7890",
      hours: "Mon-Fri: 9AM-4PM",
      website: "https://example.com/financial-help",
      tags: ["financial aid", "insurance help", "medication assistance"],
      imageUrl: "https://images.pexels.com/photos/4386367/pexels-photo-4386367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      name: "Dr. Michael Chen - Dermatologist",
      category: "specialist",
      type: "specialist",
      description: "Specializing in skin cancer detection and treatment with advanced diagnostic techniques.",
      location: "Dermatology Center, 800 Health Blvd, Health City",
      rating: 4.6,
      contact: "(555) 234-5678",
      hours: "Mon, Wed, Fri: 9AM-5PM, Tue, Thu: 10AM-7PM",
      website: "https://example.com/dr-chen",
      tags: ["dermatologist", "skin cancer", "melanoma"],
      imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      name: "Nutrition for Cancer Patients",
      category: "lifestyle",
      type: "support",
      description: "Nutritional counseling and meal planning services specifically designed for cancer patients and survivors.",
      location: "Health & Wellness Building, 350 Nutrition Way, Health City",
      rating: 4.8,
      contact: "(555) 345-6789",
      hours: "Tue-Sat: 10AM-6PM",
      website: "https://example.com/cancer-nutrition",
      tags: ["nutrition", "diet", "wellness"],
      imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 7,
      name: "Cancer Research Clinical Trials",
      category: "research",
      type: "facility",
      description: "Access to cutting-edge cancer treatment clinical trials and research programs.",
      location: "Research Institute, 900 Science Park, Health City",
      rating: 4.9,
      contact: "(555) 876-5432",
      hours: "Mon-Fri: 8AM-6PM",
      website: "https://example.com/clinical-trials",
      tags: ["clinical trials", "research", "experimental treatment"],
      imageUrl: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 8,
      name: "Transportation Assistance Program",
      category: "practical",
      type: "support",
      description: "Free transportation services for cancer patients to and from treatment appointments.",
      location: "Serving all of Health City and surrounding areas",
      rating: 4.7,
      contact: "(555) 234-5678",
      hours: "Available 7 days a week, 6AM-10PM",
      website: "https://example.com/transport-help",
      tags: ["transportation", "practical help", "rides"],
      imageUrl: "https://images.pexels.com/photos/3806756/pexels-photo-3806756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'specialist', name: 'Medical Specialists' },
    { id: 'emotional', name: 'Emotional Support' },
    { id: 'treatment', name: 'Treatment Centers' },
    { id: 'financial', name: 'Financial Resources' },
    { id: 'lifestyle', name: 'Lifestyle & Wellness' },
    { id: 'research', name: 'Research & Trials' },
    { id: 'practical', name: 'Practical Support' }
  ];
  
  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'specialist', name: 'Healthcare Providers' },
    { id: 'support', name: 'Support Services' },
    { id: 'facility', name: 'Facilities & Centers' },
    { id: 'financial', name: 'Financial Aid' }
  ];

  // Filter resources based on search term, category, and type
  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${
              i < fullStars 
                ? 'text-yellow-400 fill-yellow-400' 
                : i === fullStars && hasHalfStar
                  ? 'text-yellow-400 fill-yellow-400 half-star'
                  : 'text-gray-300'
            }`} 
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedType('all');
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Cancer Support Resources</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Find specialists, support groups, treatment centers, and financial assistance resources to help you through your cancer journey.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for resources, specialists, support groups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <button 
              className="md:hidden flex items-center text-gray-700 font-medium"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? <FilterX className="h-5 w-5 mr-2" /> : <Filter className="h-5 w-5 mr-2" />}
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <div className={`md:flex space-y-4 md:space-y-0 md:space-x-6 items-center ${showFilters ? 'block' : 'hidden'}`}>
              <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Resource Type
                </label>
                <select
                  id="type-filter"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {types.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <button
                onClick={clearFilters}
                className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
              >
                <FilterX className="h-4 w-4 mr-1" />
                Clear filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="card overflow-hidden h-full flex flex-col">
                  <div className="h-48 relative">
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                      {types.find(t => t.id === resource.type)?.name}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2">{resource.name}</h3>
                      {renderRatingStars(resource.rating)}
                    </div>
                    
                    <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                        <span className="text-gray-600">{resource.location}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                        <span className="text-gray-600">{resource.contact}</span>
                      </div>
                      
                      {resource.hours && (
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                          <span className="text-gray-600">{resource.hours}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {resource.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {resource.website && (
                      <a 
                        href={resource.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        Visit website <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Map className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">No resources found</h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any resources matching your criteria. Try adjusting your filters or search term.
              </p>
              <button 
                onClick={clearFilters} 
                className="btn btn-primary"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="section bg-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If you can't find the resources you need, our team is here to help connect you with appropriate support.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-indigo-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Contact Our Resource Navigator</h3>
                <p className="mb-6">
                  Our trained resource navigators can help you find the right support for your specific situation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>(800) 555-0123</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3" />
                    <span>Available Mon-Fri, 8AM-8PM</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold mb-4">Request Personalized Assistance</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="help-needed" className="block text-sm font-medium text-gray-700 mb-1">
                      What kind of help do you need?
                    </label>
                    <textarea
                      id="help-needed"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Please describe what resources you're looking for..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="button"
                    className="btn btn-primary w-full"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;