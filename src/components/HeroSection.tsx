import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, BookOpen, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Early Detection <span className="text-pink-300">Saves Lives</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Our cutting-edge platform provides educational resources and tools to help identify potential signs of cancer early, when treatment is most effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/symptom-checker" className="btn bg-white text-blue-700 hover:bg-blue-50">
              <Activity className="mr-2 h-5 w-5" />
              Check Symptoms
            </Link>
            <Link to="/education" className="btn bg-transparent border-2 border-white hover:bg-white/10">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 z-10">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3954635/pexels-photo-3954635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Medical professional reviewing scan results" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent flex items-end">
              <div className="p-6">
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  AI-Assisted Detection Technology
                </h3>
                <Link 
                  to="/education#ai-demo" 
                  className="inline-flex items-center text-white mt-2 hover:underline"
                >
                  Learn how it works
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L48 8.3C96 17 192 33 288 50C384 67 480 83 576 83.3C672 83 768 67 864 58.3C960 50 1056 50 1152 41.7C1248 33 1344 17 1392 8.3L1440 0V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;