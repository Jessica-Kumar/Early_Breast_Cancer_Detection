import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="card p-6 flex flex-col h-full">
      <div className="p-3 rounded-full bg-gray-50 w-fit mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default FeatureCard;