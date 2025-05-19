import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, Info } from 'lucide-react';

interface ProcessedResult {
  originalImage: string;
  processedImage: string;
  tumorDetected: boolean;
  confidence: number;
  tumorSize: string;
  tumorLocation: string;
  processingTime: string;
  tumorType?: string;
  recommendations?: string;
}

interface ScanResultProps {
  result: ProcessedResult;
}

const ScanResult: React.FC<ScanResultProps> = ({ result }) => {
  const [selectedImage, setSelectedImage] = useState<'original' | 'processed'>('processed');
  
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600';
    if (confidence >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 flex items-center">
        Analysis Results
        {result.tumorDetected ? (
          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Tumor Detected
          </span>
        ) : (
          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            No Tumor Detected
          </span>
        )}
      </h2>
      
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 rounded-md">
          <div className="flex text-xs">
            <button
              className={`px-3 py-1 ${
                selectedImage === 'original' 
                  ? 'bg-white text-gray-800' 
                  : 'text-white'
              } rounded-l-md transition-colors`}
              onClick={() => setSelectedImage('original')}
            >
              Original
            </button>
            <button
              className={`px-3 py-1 ${
                selectedImage === 'processed' 
                  ? 'bg-white text-gray-800' 
                  : 'text-white'
              } rounded-r-md transition-colors`}
              onClick={() => setSelectedImage('processed')}
            >
              Processed
            </button>
          </div>
        </div>
        
        <div className="flex justify-center p-4">
          <div className="relative group">
            <img
              src={selectedImage === 'original' ? result.originalImage : result.processedImage}
              alt={selectedImage === 'original' ? "Original brain scan" : "Processed brain scan"}
              className="max-h-64 rounded-lg object-contain transition-opacity duration-300"
            />
            {selectedImage === 'processed' && result.tumorDetected && (
              <div className="absolute inset-0 bg-red-500 bg-opacity-20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                  Detected Region
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-medium text-gray-900 mb-4">Analysis Details</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Confidence Level</p>
            <p className={`font-medium text-lg ${getConfidenceColor(result.confidence)}`}>
              {(result.confidence * 100).toFixed(1)}%
            </p>
          </div>
          
          {result.tumorDetected && (
            <>
              <div>
                <p className="text-sm text-gray-500">Estimated Size</p>
                <p className="font-medium text-lg">{result.tumorSize}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-lg">{result.tumorLocation}</p>
              </div>

              {result.tumorType && (
                <div>
                  <p className="text-sm text-gray-500">Suspected Type</p>
                  <p className="font-medium text-lg">{result.tumorType}</p>
                </div>
              )}
            </>
          )}
          
          <div>
            <p className="text-sm text-gray-500">Processing Time</p>
            <p className="font-medium text-lg">{result.processingTime}</p>
          </div>
        </div>

        {result.recommendations && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Recommendations</p>
            <p className="mt-2 text-gray-700">{result.recommendations}</p>
          </div>
        )}
      </div>
      
      {result.tumorDetected && (
        <div className="bg-red-50 rounded-lg p-4 flex items-start">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-800">
              Potential tumor detected
            </p>
            <p className="text-sm text-red-700 mt-1">
              This analysis suggests the presence of abnormal tissue. Please consult with a medical professional for proper diagnosis and treatment planning.
            </p>
          </div>
        </div>
      )}
      
      <div className="bg-blue-50 rounded-lg p-4 flex items-start">
        <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-700">
          <p className="font-medium mb-1">About Digital Image Processing Analysis</p>
          <p>
            This analysis uses advanced image processing techniques including contrast enhancement, 
            segmentation, and feature extraction to identify potential tumor regions. The results 
            are based on pattern recognition algorithms trained on medical imaging datasets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScanResult;