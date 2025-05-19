import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, FileImage, BookOpen, Activity } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Advanced Brain Tumor Detection with Digital Image Processing
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Leveraging cutting-edge image processing algorithms to detect and analyze brain tumors with high precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/scanner"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-white text-blue-700 hover:bg-blue-50 transition-colors duration-200"
                >
                  Try Scanner
                </Link>
                <Link
                  to="/education"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <div className="relative mt-8 md:mt-0">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="https://images.pexels.com/photos/8376168/pexels-photo-8376168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Brain scan visualization"
                  className="relative rounded-lg shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Advanced Imaging Technology
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines digital image processing with machine learning to provide precise tumor detection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FileImage className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Image Preprocessing</h3>
              <p className="text-gray-600">
                Advanced filtering techniques to enhance image quality and reduce noise for improved detection accuracy.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Segmentation Algorithms</h3>
              <p className="text-gray-600">
                Precise identification of tumor regions using advanced segmentation algorithms and contour analysis.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Feature Extraction</h3>
              <p className="text-gray-600">
                Extraction of relevant features such as texture, shape, and intensity to characterize tumor properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform utilizes a multi-stage digital image processing pipeline to analyze brain scans.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gray-50 text-lg font-medium text-gray-900">Process Flow</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4">
            {[
              {
                step: 1,
                title: 'Upload Scan',
                description: 'Upload MRI or CT scan images through our secure interface.',
                icon: <FileImage className="h-6 w-6 text-blue-700" />,
              },
              {
                step: 2,
                title: 'Image Pre-processing',
                description: 'Advanced filtering, normalization, and enhancement techniques are applied.',
                icon: <BookOpen className="h-6 w-6 text-blue-700" />,
              },
              {
                step: 3,
                title: 'Segmentation',
                description: 'Potential tumor regions are identified through segmentation algorithms.',
                icon: <Brain className="h-6 w-6 text-blue-700" />,
              },
              {
                step: 4,
                title: 'Analysis & Report',
                description: 'Detailed analysis of detected regions with classification results.',
                icon: <Activity className="h-6 w-6 text-blue-700" />,
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-700 font-bold text-xl mb-4">
                  {item.step}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    {item.icon}
                    <h3 className="ml-2 text-lg font-medium text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-base text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to try our brain tumor detection tool?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Upload your scan images and get detailed analysis reports within minutes.
            </p>
            <div className="mt-8">
              <Link
                to="/scanner"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                Try Scanner Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;