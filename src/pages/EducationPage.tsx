import React from 'react';
import { BookOpen, FileText, Brain, BarChart, Zap, Scale, Video, Download, ImageIcon, Layers, Cpu, Database } from 'lucide-react';

const EducationPage = () => {
  const techniques = [
    {
      title: "Image Enhancement",
      icon: <ImageIcon className="h-6 w-6 text-blue-600" />,
      description: "Techniques to improve image quality including histogram equalization, contrast stretching, and noise reduction.",
      examples: ["Histogram Equalization", "Gaussian Filtering", "Median Filtering", "Adaptive Thresholding"]
    },
    {
      title: "Segmentation",
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      description: "Methods to partition images into meaningful regions for tumor detection.",
      examples: ["Region Growing", "Watershed Algorithm", "Active Contours", "Thresholding"]
    },
    {
      title: "Feature Extraction",
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      description: "Extraction of relevant features from segmented regions for classification.",
      examples: ["Texture Analysis", "Shape Features", "Statistical Features", "GLCM Features"]
    },
    {
      title: "Classification",
      icon: <Database className="h-6 w-6 text-blue-600" />,
      description: "Machine learning techniques for tumor classification based on extracted features.",
      examples: ["Support Vector Machines", "Neural Networks", "Random Forests", "K-Nearest Neighbors"]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Digital Image Processing in Medical Imaging
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about the advanced techniques used in our brain tumor detection system
          </p>
        </div>

        {/* DIP Techniques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techniques.map((technique, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {technique.icon}
                <h2 className="text-xl font-semibold ml-3">{technique.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{technique.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {technique.examples.map((example, i) => (
                  <div key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm text-center">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Learning Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Interactive Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Video Tutorials",
                icon: <Video className="h-8 w-8 text-blue-600" />,
                description: "Step-by-step video guides explaining DIP concepts and implementations"
              },
              {
                title: "Code Examples",
                icon: <FileText className="h-8 w-8 text-blue-600" />,
                description: "Practical code examples demonstrating various DIP techniques"
              },
              {
                title: "Case Studies",
                icon: <Brain className="h-8 w-8 text-blue-600" />,
                description: "Real-world applications of DIP in medical imaging"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors">
                <div className="flex justify-center mb-4">
                  {resource.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
                <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-800">
                  Access Resources →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Implementation Process</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Image Acquisition",
                description: "Obtaining high-quality MRI or CT scan images in DICOM format"
              },
              {
                step: 2,
                title: "Preprocessing",
                description: "Enhancing image quality through noise reduction and normalization"
              },
              {
                step: 3,
                title: "Segmentation",
                description: "Identifying regions of interest using advanced segmentation algorithms"
              },
              {
                step: 4,
                title: "Feature Extraction",
                description: "Extracting relevant features from segmented regions"
              },
              {
                step: 5,
                title: "Classification",
                description: "Using machine learning to classify tumor presence and type"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;