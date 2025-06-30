import React from 'react';
import { ArrowRight, Zap, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23334155%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Crafting Digital
                <span className="text-orange-500"> Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We transform ideas into powerful digital experiences. TechEntrance delivers cutting-edge web solutions that drive growth and exceed expectations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="font-semibold">Let's Build Something Great Together</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={scrollToPortfolio}
                className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <span className="font-semibold">View Our Work</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white">2</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-8">
            <div className="relative z-10 bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl border border-gray-600">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400">$ npm create techentrance-app</div>
                  <div className="text-gray-400 mt-2">✓ Creating your digital presence...</div>
                  <div className="text-gray-400">✓ Optimizing for performance...</div>
                  <div className="text-gray-400">✓ Adding responsive design...</div>
                  <div className="text-orange-400 mt-2">🚀 Ready to launch!</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;