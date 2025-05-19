import React from 'react';
import { Users, BookOpen, BookMarked, GraduationCap, Code, Github, ImageIcon, Brain, Database, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="px-8 py-12 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Our Project</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
              Advancing medical imaging through digital image processing techniques
            </p>
          </div>
        </div>

        {/* Core Features */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="h-6 w-6 mr-3 text-blue-600" />
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ImageIcon className="h-6 w-6 text-blue-600" />,
                title: "Advanced Image Processing",
                description: "State-of-the-art techniques for image enhancement and analysis"
              },
              {
                icon: <Brain className="h-6 w-6 text-blue-600" />,
                title: "Tumor Detection",
                description: "Accurate identification of potential tumor regions"
              },
              {
                icon: <Database className="h-6 w-6 text-blue-600" />,
                title: "Analysis Reports",
                description: "Detailed reports with visualization and recommendations"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="ml-3 text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="h-6 w-6 mr-3 text-blue-600" />
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Image Processing Pipeline</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Advanced noise reduction algorithms</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Contrast enhancement techniques</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Region-based segmentation</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Feature extraction methods</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Classification System</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Machine learning models</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Statistical analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Pattern recognition</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Decision support system</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
            Research Papers
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Digital Image Processing Techniques for Brain Tumor Detection",
                authors: "Kumar, S., Patel, R.",
                journal: "Journal of Medical Imaging",
                year: "2024"
              },
              {
                title: "Comparative Analysis of Segmentation Algorithms",
                authors: "Smith, J., Johnson, M.",
                journal: "IEEE Transactions on Medical Imaging",
                year: "2023"
              },
              {
                title: "Feature Extraction Methods in Medical Image Analysis",
                authors: "Williams, A., Brown, K.",
                journal: "Pattern Recognition in Medicine",
                year: "2023"
              }
            ].map((paper, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors">
                <h3 className="font-semibold text-gray-900">{paper.title}</h3>
                <p className="text-gray-600 mt-2">{paper.authors}</p>
                <p className="text-sm text-gray-500 mt-1">{paper.journal}, {paper.year}</p>
                <button className="mt-3 text-blue-600 text-sm hover:text-blue-800">
                  Read Paper →
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;