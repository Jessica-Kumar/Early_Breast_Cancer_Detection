import React, { useState } from 'react';
import { Upload, Check, X, AlertTriangle, Info } from 'lucide-react';

const AIDemo: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<'positive' | 'negative' | null>(null);
  const [confidence, setConfidence] = useState(0);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target && typeof event.target.result === 'string') {
            setSelectedImage(event.target.result);
            analyzeImage();
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setSelectedImage(event.target.result);
          analyzeImage();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      setIsAnalyzing(false);
      
      // For demo purposes, we'll use a random result
      // In a real app, this would be based on actual AI analysis
      const demoResult = Math.random() > 0.5 ? 'positive' : 'negative';
      setResult(demoResult as 'positive' | 'negative');
      setConfidence(Math.floor(Math.random() * 30) + 70); // Random number between 70-99
    }, 3000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setResult(null);
    setConfidence(0);
  };

  // Demo images
  const demoImages = [
    {
      url: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Lung CT"
    },
    {
      url: "https://images.pexels.com/photos/8460222/pexels-photo-8460222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Mammogram"
    },
    {
      url: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      label: "Skin Lesion"
    }
  ];

  const selectDemoImage = (url: string) => {
    setSelectedImage(url);
    analyzeImage();
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h3 className="text-2xl font-bold">AI Cancer Detection Demo</h3>
        <p className="text-blue-100">
          See how AI analyzes medical images to assist healthcare professionals in identifying potential signs of cancer.
        </p>
      </div>
      
      <div className="p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {!selectedImage ? (
              <>
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h4 className="text-lg font-medium mb-2">Upload a medical image</h4>
                  <p className="text-gray-500 mb-4">Drag and drop or click to browse</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label 
                    htmlFor="image-upload" 
                    className="btn btn-primary cursor-pointer"
                  >
                    Select Image
                  </label>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Or try with sample images:</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {demoImages.map((image, index) => (
                      <div 
                        key={index}
                        className="cursor-pointer rounded-lg overflow-hidden border hover:shadow-md transition-all"
                        onClick={() => selectDemoImage(image.url)}
                      >
                        <img src={image.url} alt={image.label} className="w-full h-20 object-cover" />
                        <div className="p-2 text-center text-sm text-gray-700">{image.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden border">
                  <img 
                    src={selectedImage} 
                    alt="Uploaded medical image" 
                    className="w-full h-auto"
                  />
                  
                  {/* Overlayed "heatmap" for demonstration */}
                  {result === 'positive' && (
                    <div className="absolute inset-0 bg-red-500 opacity-20 pointer-events-none"></div>
                  )}
                </div>
                
                <button 
                  onClick={handleReset} 
                  className="btn btn-outline"
                >
                  Upload a different image
                </button>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4">Analysis Results</h4>
            
            {isAnalyzing ? (
              <div className="text-center py-8">
                <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-700">Analyzing image...</p>
              </div>
            ) : selectedImage && result ? (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  result === 'positive' 
                    ? 'bg-red-100 border border-red-200' 
                    : 'bg-green-100 border border-green-200'
                }`}>
                  <div className="flex items-center">
                    {result === 'positive' ? (
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    ) : (
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                    )}
                    <h5 className="font-semibold">
                      {result === 'positive' 
                        ? 'Potential abnormality detected' 
                        : 'No abnormalities detected'}
                    </h5>
                  </div>
                  <p className={`mt-2 ${
                    result === 'positive' ? 'text-red-700' : 'text-green-700'
                  }`}>
                    {result === 'positive'
                      ? 'The AI has identified patterns that may indicate a potential abnormality.'
                      : 'The AI analysis did not detect patterns associated with cancer in this image.'}
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold mb-2">Confidence Score</h5>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        result === 'positive' ? 'bg-red-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${confidence}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-sm text-gray-600 mt-1">{confidence}%</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-blue-800">Important Disclaimer</h5>
                      <p className="mt-1 text-blue-700 text-sm">
                        This is a demonstration only. In a real medical setting, AI tools assist healthcare professionals but do not replace proper medical diagnosis. Always consult with a qualified physician.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Upload or select an image to see AI analysis results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDemo;