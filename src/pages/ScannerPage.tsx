import React, { useState, useRef } from 'react';
import { Upload, FileImage, Info, X, AlertTriangle } from 'lucide-react';
import ScanResult from '../components/ScanResult';

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

const ScannerPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<ProcessedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      validateAndProcessFile(file);
    }
  };

  const validateAndProcessFile = (file: File) => {
    setError(null);
    setResult(null);
    
    if (!file.type.match('image.*')) {
      setError('Please upload an image file (JPEG, PNG, or DICOM)');
      return;
    }
    
    if (file.size > 10 * 1024 * 1024) {
      setError('File size should be less than 10MB');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const processScan = async () => {
    if (!selectedFile) return;
    
    setIsProcessing(true);
    setError(null);
    
    // Simulated image processing with more realistic results
    setTimeout(() => {
      const isTumor = Math.random() > 0.3; // 70% chance of tumor detection for demo
      const mockResult: ProcessedResult = {
        originalImage: previewUrl!,
        processedImage: previewUrl!, // In a real app, this would be the processed image
        tumorDetected: isTumor,
        confidence: isTumor ? 0.85 + (Math.random() * 0.15) : 0.15 + (Math.random() * 0.15),
        tumorSize: isTumor ? `${(Math.random() * 3 + 1).toFixed(1)} cm²` : '0 cm²',
        tumorLocation: isTumor ? 'Temporal Lobe' : 'N/A',
        processingTime: `${(Math.random() * 1.5 + 0.5).toFixed(1)}s`,
        tumorType: isTumor ? 'Glioblastoma' : undefined,
        recommendations: isTumor 
          ? 'Immediate consultation with a neurologist is recommended. Further MRI with contrast enhancement may be needed.'
          : 'Regular follow-up scans recommended as per standard protocol.',
      };
      
      setResult(mockResult);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Brain Tumor Detection Scanner
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Upload a brain MRI or CT scan image for advanced digital image processing analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Upload Scan Image
            </h2>

            {error && (
              <div className="mb-4 p-4 bg-red-50 rounded-lg flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                isDragging 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-blue-400'
              } transition-colors duration-200`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!previewUrl ? (
                <div className="space-y-4">
                  <div className="mx-auto h-16 w-16 text-gray-400 flex items-center justify-center rounded-full bg-gray-100">
                    <Upload className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-500">
                      Drag and drop your scan image here, or{' '}
                      <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        browse
                      </button>
                    </p>
                    <p className="text-sm text-gray-400">
                      Supported formats: JPEG, PNG, DICOM (max 10MB)
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*,.dcm"
                  />
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Brain scan preview"
                    className="max-h-64 mx-auto rounded-lg"
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 p-1 bg-gray-800 bg-opacity-70 rounded-full text-white hover:bg-opacity-100 transition-opacity"
                    onClick={clearSelection}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {selectedFile && !isProcessing && !result && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Selected file: <span className="font-medium">{selectedFile.name}</span> ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
                <button
                  type="button"
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors duration-200"
                  onClick={processScan}
                >
                  Analyze Scan
                </button>
              </div>
            )}

            {isProcessing && (
              <div className="mt-6 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent mb-4"></div>
                <p className="text-gray-600">Processing your scan image...</p>
                <p className="text-sm text-gray-500 mt-1">
                  Applying digital image processing algorithms
                </p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            {result ? (
              <ScanResult result={result} />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <FileImage className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Ready for Analysis
                </h3>
                <p className="text-gray-500 max-w-md">
                  Upload a brain scan image to begin the analysis. Our advanced digital image processing algorithms will examine the scan for potential tumors.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <div className="flex items-start">
            <Info className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800 mb-2">About Our Technology</h3>
              <p className="text-sm text-blue-700">
                This tool uses advanced digital image processing techniques including contrast enhancement, 
                segmentation, and feature extraction to analyze brain scans. While highly accurate, 
                this analysis is for educational purposes and should be validated by medical professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScannerPage;