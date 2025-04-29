import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Activity, BookOpen, Users, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import StatisticCard from '../components/StatisticCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Educational Resources",
      description: "Access comprehensive information about different types of cancer, risk factors, and prevention strategies.",
      link: "/education"
    },
    {
      icon: <Activity className="h-8 w-8 text-teal-600" />,
      title: "Symptom Checker",
      description: "Use our interactive tool to identify potential warning signs and get personalized recommendations.",
      link: "/symptom-checker"
    },
    {
      icon: <Search className="h-8 w-8 text-pink-500" />,
      title: "AI Detection Demo",
      description: "Learn how artificial intelligence is being used to assist in early cancer detection (demonstration only).",
      link: "/education#ai-demo"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Find Support",
      description: "Locate specialists, support groups, and resources to help navigate your cancer journey.",
      link: "/resources"
    }
  ];

  const statistics = [
    { value: "1.9M", label: "New cancer cases predicted in 2023" },
    { value: "67%", label: "5-year survival rate for all cancers combined" },
    { value: "40%", label: "Of cancers are preventable through lifestyle changes" },
    { value: "3-5x", label: "Better outcomes with early detection" }
  ];

  const testimonials = [
    {
      quote: "The educational resources on this site helped me understand my diagnosis and take an active role in my treatment decisions.",
      author: "Sarah J., Breast Cancer Survivor"
    },
    {
      quote: "I used the symptom checker when I noticed something unusual, and it encouraged me to see a doctor. Early detection saved my life.",
      author: "Michael T., Prostate Cancer Survivor"
    },
    {
      quote: "As an oncologist, I recommend this site to my patients for reliable information about their diagnosis and treatment options.",
      author: "Dr. Lisa Chen, Medical Oncologist"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides tools and resources to help you understand, detect, and navigate cancer care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
                link={feature.link} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="section bg-blue-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Cancer By The Numbers</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Understanding the statistics behind cancer can help emphasize the importance of early detection and prevention.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <StatisticCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from individuals who have benefited from early detection and proper education about cancer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                quote={testimonial.quote} 
                author={testimonial.author} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with our symptom checker to identify potential warning signs or explore our educational resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/symptom-checker" className="btn bg-white text-teal-700 hover:bg-gray-100">
              <Activity className="mr-2 h-5 w-5" />
              Start Symptom Check
            </Link>
            <Link to="/education" className="btn bg-teal-700 text-white hover:bg-teal-800">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;