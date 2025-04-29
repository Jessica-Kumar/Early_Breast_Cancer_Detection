import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CancerType } from '../data/cancerTypes';

interface CancerTypeCardProps {
  cancerType: CancerType;
}

const CancerTypeCard: React.FC<CancerTypeCardProps> = ({ cancerType }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card h-full overflow-hidden">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${cancerType.imageUrl})` }}
      >
        <div className="h-full w-full bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
          <div className="p-4">
            <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {cancerType.category.charAt(0).toUpperCase() + cancerType.category.slice(1)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{cancerType.name}</h3>
        <p className="text-gray-600 mb-4">
          {cancerType.description}
        </p>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              <span>Read more</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
        
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fadeIn">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Warning Signs</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {cancerType.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Risk Factors</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {cancerType.riskFactors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Prevention & Early Detection</h4>
              <p className="text-gray-600">{cancerType.prevention}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CancerTypeCard;