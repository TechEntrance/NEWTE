import React from 'react';
import { Monitor, Palette, Settings, Smartphone, Database, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
      features: ["React/Next.js", "Node.js Backend", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Responsive web applications and native mobile apps that work seamlessly across all devices.",
      features: ["Responsive Design", "PWA Development", "Mobile Optimization", "Cross-platform"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Solutions",
      description: "Robust server-side architecture with scalable databases and secure API development.",
      features: ["Database Design", "API Development", "Cloud Integration", "Scalable Architecture"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your digital presence running smoothly.",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation consulting to help your business thrive online.",
      features: ["Strategy Planning", "Digital Audit", "Growth Optimization", "Analytics Setup"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions that drive results
            and exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200 flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;