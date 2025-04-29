import React, { useState } from 'react';
import { Check, AlertTriangle, ChevronRight, X, Activity, Info } from 'lucide-react';

interface SymptomQuestion {
  id: string;
  text: string;
  category: string;
}

interface RiskFactor {
  id: string;
  text: string;
}

const SymptomCheckerPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [gender, setGender] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedRiskFactors, setSelectedRiskFactors] = useState<string[]>([]);
  const [results, setResults] = useState<{
    riskLevel: 'low' | 'moderate' | 'high';
    recommendations: string[];
    possibleConditions: string[];
  } | null>(null);

  const symptoms: SymptomQuestion[] = [
    { id: 'lump', text: 'Unusual lump or swelling', category: 'general' },
    { id: 'pain', text: 'Persistent unexplained pain', category: 'general' },
    { id: 'fatigue', text: 'Extreme fatigue that doesn\'t improve with rest', category: 'general' },
    { id: 'weight-loss', text: 'Unexplained weight loss', category: 'general' },
    { id: 'night-sweats', text: 'Night sweats', category: 'general' },
    { id: 'skin-changes', text: 'Skin changes (color, mole appearance, etc.)', category: 'skin' },
    { id: 'cough', text: 'Persistent cough or hoarseness', category: 'respiratory' },
    { id: 'blood-cough', text: 'Coughing up blood', category: 'respiratory' },
    { id: 'breathless', text: 'Shortness of breath', category: 'respiratory' },
    { id: 'bleeding', text: 'Unusual bleeding or bruising', category: 'blood' },
    { id: 'bowel-changes', text: 'Changes in bowel habits', category: 'digestive' },
    { id: 'bloating', text: 'Persistent bloating', category: 'digestive' },
    { id: 'difficulty-swallowing', text: 'Difficulty swallowing', category: 'digestive' },
    { id: 'urinary-changes', text: 'Changes in urination', category: 'urinary' },
    { id: 'appetite-loss', text: 'Loss of appetite', category: 'digestive' },
    { id: 'headaches', text: 'Persistent headaches', category: 'neurological' },
    { id: 'vision-changes', text: 'Vision changes', category: 'neurological' },
  ];

  const riskFactors: RiskFactor[] = [
    { id: 'smoking', text: 'Current or former smoker' },
    { id: 'family-history', text: 'Family history of cancer' },
    { id: 'alcohol', text: 'Heavy alcohol consumption' },
    { id: 'sun-exposure', text: 'Excessive sun exposure history' },
    { id: 'obesity', text: 'Overweight or obesity' },
    { id: 'radiation', text: 'Previous radiation exposure' },
    { id: 'genetic', text: 'Known genetic predisposition' },
    { id: 'hpv', text: 'HPV infection history' },
    { id: 'diet', text: 'Diet low in fruits and vegetables' },
    { id: 'sedentary', text: 'Sedentary lifestyle' },
    { id: 'chemicals', text: 'Regular exposure to certain chemicals or substances' },
  ];

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const toggleRiskFactor = (id: string) => {
    setSelectedRiskFactors(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      generateResults();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const generateResults = () => {
    // This is a demo that uses the number of symptoms and risk factors
    // to generate a simple risk assessment
    const symptomScore = selectedSymptoms.length;
    const riskFactorScore = selectedRiskFactors.length;
    
    const totalScore = symptomScore * 2 + riskFactorScore;
    
    let riskLevel: 'low' | 'moderate' | 'high' = 'low';
    let recommendations: string[] = [];
    let possibleConditions: string[] = [];
    
    if (totalScore > 12) {
      riskLevel = 'high';
      recommendations = [
        'Urgent: Schedule an appointment with your doctor within the next 48 hours',
        'Bring a complete list of your symptoms and when they started',
        'Be prepared to discuss your family medical history in detail'
      ];
      
      // Generate relevant possible conditions based on selected symptoms
      if (selectedSymptoms.includes('lump') || selectedSymptoms.includes('skin-changes')) {
        possibleConditions.push('Skin cancer or soft tissue tumors');
      }
      if (selectedSymptoms.includes('cough') || selectedSymptoms.includes('blood-cough') || selectedSymptoms.includes('breathless')) {
        possibleConditions.push('Lung-related conditions');
      }
      if (selectedSymptoms.includes('bowel-changes') || selectedSymptoms.includes('bleeding')) {
        possibleConditions.push('Colorectal conditions');
      }
    } else if (totalScore > 5) {
      riskLevel = 'moderate';
      recommendations = [
        'Schedule an appointment with your doctor within the next 1-2 weeks',
        'Monitor your symptoms and note any changes',
        'Consider lifestyle modifications that could reduce your risk factors'
      ];

      if (selectedSymptoms.includes('fatigue') || selectedSymptoms.includes('weight-loss')) {
        possibleConditions.push('General health assessment needed');
      }
      if (selectedSymptoms.includes('headaches') || selectedSymptoms.includes('vision-changes')) {
        possibleConditions.push('Neurological evaluation recommended');
      }
    } else {
      riskLevel = 'low';
      recommendations = [
        'Monitor your symptoms and schedule a routine check-up',
        'Consider making lifestyle changes to reduce identified risk factors',
        'Learn about early warning signs to stay vigilant'
      ];
      
      possibleConditions.push('No specific conditions identified based on current information');
    }
    
    setResults({
      riskLevel,
      recommendations,
      possibleConditions
    });
    
    setCurrentStep(5);
    window.scrollTo(0, 0);
  };

  const resetChecker = () => {
    setCurrentStep(1);
    setGender('');
    setAge('');
    setSelectedSymptoms([]);
    setSelectedRiskFactors([]);
    setResults(null);
    window.scrollTo(0, 0);
  };

  const validateStep = () => {
    switch(currentStep) {
      case 1:
        return gender !== '';
      case 2:
        return age !== '';
      case 3:
        return selectedSymptoms.length > 0;
      case 4:
        return true; // Risk factors are optional
      default:
        return true;
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-teal-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Symptom Checker</h1>
            <p className="text-xl text-teal-100 mb-6">
              This tool helps identify potential cancer warning signs and provides personalized recommendations.
            </p>
            <div className="bg-teal-700 rounded-lg p-4 flex items-start">
              <Info className="h-5 w-5 text-teal-300 mr-2 mt-1 flex-shrink-0" />
              <p className="text-teal-100 text-sm">
                <strong className="text-white">Important:</strong> This tool is for educational purposes only and does not provide medical diagnosis. 
                Always consult a healthcare professional for any health concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="sticky top-16 z-30 bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center">
            <div className="hidden sm:flex items-center w-full">
              {[1, 2, 3, 4, 5].map((step) => (
                <React.Fragment key={step}>
                  <div className="flex items-center">
                    <div 
                      className={`rounded-full w-8 h-8 flex items-center justify-center font-medium text-sm ${
                        step < currentStep 
                          ? 'bg-teal-600 text-white' 
                          : step === currentStep
                            ? 'bg-teal-100 text-teal-800 border-2 border-teal-600'
                            : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {step < currentStep ? <Check className="h-4 w-4" /> : step}
                    </div>
                    <div className="hidden sm:block ml-2 mr-6 text-sm font-medium">
                      {step === 1 && 'Gender'}
                      {step === 2 && 'Age'}
                      {step === 3 && 'Symptoms'}
                      {step === 4 && 'Risk Factors'}
                      {step === 5 && 'Results'}
                    </div>
                  </div>
                  
                  {step < 5 && (
                    <div className="flex-grow mx-2 h-0.5 bg-gray-200">
                      <div 
                        className="h-0.5 bg-teal-600 transition-all duration-500"
                        style={{ width: step < currentStep ? '100%' : '0%' }}
                      ></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="sm:hidden text-center w-full">
              <p className="text-gray-500 text-sm">
                Step {currentStep} of 5: 
                <span className="ml-1 font-medium text-teal-700">
                  {currentStep === 1 && 'Gender'}
                  {currentStep === 2 && 'Age'}
                  {currentStep === 3 && 'Symptoms'}
                  {currentStep === 4 && 'Risk Factors'}
                  {currentStep === 5 && 'Results'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Content */}
      <div className="section bg-gray-50 py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
            
            {/* Step 1: Gender */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">What is your biological sex?</h2>
                <p className="text-gray-600 mb-8">
                  Some cancer risks and symptoms vary based on biological sex.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    className={`p-6 border-2 rounded-lg text-left transition-all ${
                      gender === 'male' 
                        ? 'border-teal-600 bg-teal-50' 
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                    onClick={() => setGender('male')}
                  >
                    <h3 className="text-lg font-medium mb-1">Male</h3>
                    <p className="text-gray-500 text-sm">
                      Higher risk for prostate, colorectal, lung, and liver cancers
                    </p>
                  </button>
                  
                  <button
                    className={`p-6 border-2 rounded-lg text-left transition-all ${
                      gender === 'female' 
                        ? 'border-teal-600 bg-teal-50' 
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                    onClick={() => setGender('female')}
                  >
                    <h3 className="text-lg font-medium mb-1">Female</h3>
                    <p className="text-gray-500 text-sm">
                      Higher risk for breast, cervical, colorectal, and lung cancers
                    </p>
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Age */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">What is your age group?</h2>
                <p className="text-gray-600 mb-8">
                  Cancer risk typically increases with age, though some types can affect younger people.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['18-30', '31-45', '46-60', '61-75', '75+'].map((ageGroup) => (
                    <button
                      key={ageGroup}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        age === ageGroup 
                          ? 'border-teal-600 bg-teal-50' 
                          : 'border-gray-200 hover:border-teal-300'
                      }`}
                      onClick={() => setAge(ageGroup)}
                    >
                      <h3 className="text-lg font-medium">{ageGroup}</h3>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 3: Symptoms */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">Select any symptoms you're experiencing</h2>
                <p className="text-gray-600 mb-2">
                  Select all symptoms you've experienced consistently for more than 2 weeks.
                </p>
                <p className="text-gray-500 text-sm mb-8">
                  Selected: {selectedSymptoms.length} of {symptoms.length}
                </p>
                
                <div className="space-y-2">
                  {symptoms.map((symptom) => (
                    <button
                      key={symptom.id}
                      className={`p-4 w-full border rounded-lg text-left flex items-center transition-all ${
                        selectedSymptoms.includes(symptom.id) 
                          ? 'border-teal-600 bg-teal-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleSymptom(symptom.id)}
                    >
                      <div className={`w-6 h-6 flex-shrink-0 rounded border mr-3 flex items-center justify-center ${
                        selectedSymptoms.includes(symptom.id) 
                          ? 'bg-teal-600 border-teal-600 text-white' 
                          : 'border-gray-300'
                      }`}>
                        {selectedSymptoms.includes(symptom.id) && <Check className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-medium">{symptom.text}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 4: Risk Factors */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">Select any risk factors that apply to you</h2>
                <p className="text-gray-600 mb-2">
                  These factors can influence your overall cancer risk.
                </p>
                <p className="text-gray-500 text-sm mb-8">
                  Selected: {selectedRiskFactors.length} of {riskFactors.length}
                </p>
                
                <div className="space-y-2">
                  {riskFactors.map((factor) => (
                    <button
                      key={factor.id}
                      className={`p-4 w-full border rounded-lg text-left flex items-center transition-all ${
                        selectedRiskFactors.includes(factor.id) 
                          ? 'border-teal-600 bg-teal-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleRiskFactor(factor.id)}
                    >
                      <div className={`w-6 h-6 flex-shrink-0 rounded border mr-3 flex items-center justify-center ${
                        selectedRiskFactors.includes(factor.id) 
                          ? 'bg-teal-600 border-teal-600 text-white' 
                          : 'border-gray-300'
                      }`}>
                        {selectedRiskFactors.includes(factor.id) && <Check className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-medium">{factor.text}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 5: Results */}
            {currentStep === 5 && results && (
              <div className="space-y-8 animate-fadeIn">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-4">Your Assessment Results</h2>
                  <p className="text-gray-600">
                    Based on the information you provided, here is your preliminary assessment.
                  </p>
                </div>
                
                <div className={`p-6 rounded-lg ${
                  results.riskLevel === 'high' 
                    ? 'bg-red-50 border border-red-200' 
                    : results.riskLevel === 'moderate'
                      ? 'bg-yellow-50 border border-yellow-200'
                      : 'bg-green-50 border border-green-200'
                }`}>
                  <div className="flex items-center mb-4">
                    {results.riskLevel === 'high' ? (
                      <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                    ) : results.riskLevel === 'moderate' ? (
                      <AlertTriangle className="h-8 w-8 text-yellow-500 mr-3" />
                    ) : (
                      <Check className="h-8 w-8 text-green-500 mr-3" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold">
                        {results.riskLevel === 'high' 
                          ? 'High Priority' 
                          : results.riskLevel === 'moderate'
                            ? 'Medium Priority'
                            : 'Low Priority'}
                      </h3>
                      <p className={`${
                        results.riskLevel === 'high' 
                          ? 'text-red-700' 
                          : results.riskLevel === 'moderate'
                            ? 'text-yellow-700'
                            : 'text-green-700'
                      }`}>
                        {results.riskLevel === 'high' 
                          ? 'Your symptoms suggest you should seek medical attention soon.' 
                          : results.riskLevel === 'moderate'
                            ? 'Your symptoms warrant medical attention in the near future.'
                            : 'Continue to monitor your symptoms.'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
                    <ul className="space-y-2">
                      {results.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-teal-500 mr-2 mt-0.5" />
                          <span>{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Areas for Discussion with Doctor</h3>
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                      <ul className="space-y-2">
                        {results.possibleConditions.map((condition, index) => (
                          <li key={index} className="flex items-start">
                            <div className="h-5 w-5 text-blue-500 mr-2 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold">{index + 1}</span>
                            </div>
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <p className="text-gray-600 text-sm">
                      <strong>Disclaimer:</strong> This assessment is based on the information you provided and is not a medical diagnosis.
                      Always consult with a qualified healthcare provider for proper evaluation and diagnosis of any health concerns.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <button 
                    onClick={resetChecker} 
                    className="btn btn-primary"
                  >
                    <Activity className="mr-2 h-4 w-4" />
                    Start New Assessment
                  </button>
                </div>
              </div>
            )}
            
            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="mt-10 flex justify-between">
                <button 
                  onClick={handleBack} 
                  className={`btn btn-outline ${currentStep === 1 ? 'invisible' : ''}`}
                >
                  Back
                </button>
                
                <button 
                  onClick={handleNext} 
                  disabled={!validateStep()}
                  className={`btn btn-primary ${!validateStep() ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {currentStep === 4 ? 'Get Results' : 'Continue'}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer Notice */}
      <div className="bg-teal-700 py-5">
        <div className="container-custom">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-white mr-2 mt-1" />
            <p className="text-white text-sm">
              <strong>Important:</strong> If you're experiencing severe symptoms such as difficulty breathing, severe pain, or sudden confusion, please seek emergency medical attention immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomCheckerPage;