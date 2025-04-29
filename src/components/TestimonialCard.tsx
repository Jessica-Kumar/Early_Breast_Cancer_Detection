import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="text-4xl text-gray-300 mb-4">"</div>
      <p className="text-gray-700 mb-4 flex-grow">{quote}</p>
      <div className="mt-auto">
        <div className="h-px w-16 bg-blue-500 mb-4"></div>
        <p className="font-medium text-gray-900">{author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;