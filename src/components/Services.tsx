import React from 'react';
import { Monitor, Palette, Settings, Smartphone, Database, Shield, Cpu, ShoppingCart, Search, BarChart2, Server, Cloud, Zap, Code, Globe, MessageSquare } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      category: "Web & Mobile",
      services: [
        {
          icon: <Monitor className="h-8 w-8" />,
          title: "Web Development",
          description: "Custom websites built with modern technologies, optimized for performance and user experience.",
          features: ["React/Next.js", "Node.js Backend", "API Integration", "Performance Optimization"]
        },
        {
          icon: <Smartphone className="h-8 w-8" />,
          title: "Mobile Development",
          description: "Responsive web applications and native mobile apps that work seamlessly across all devices.",
          features: ["Responsive Design", "PWA Development", "Mobile Optimization", "Cross-platform"]
        },
        {
          icon: <ShoppingCart className="h-8 w-8" />,
          title: "E-commerce Solutions",
          description: "Complete e-commerce platforms with secure payment gateways and inventory management.",
          features: ["Shopify/WordPress WooCommerce", "Custom E-commerce", "Payment Integration", "Inventory Management"]
        },
        {
          icon: <Globe className="h-8 w-8" />,
          title: "Progressive Web Apps",
          description: "Fast, reliable, and engaging web apps with native app-like experience.",
          features: ["Offline Capabilities", "Push Notifications", "App-like UI", "Cross-platform"]
        }
      ]
    },
    {
      category: "AI & Data",
      services: [
        {
          icon: <Cpu className="h-8 w-8" />,
          title: "AI/ML Development",
          description: "Custom AI and machine learning solutions to automate and enhance your business processes.",
          features: ["Machine Learning Models", "Predictive Analytics", "Computer Vision", "NLP"]
        },
        {
          icon: <BarChart2 className="h-8 w-8" />,
          title: "Data Analytics",
          description: "Transform your data into actionable insights with our advanced analytics solutions.",
          features: ["Data Visualization", "Business Intelligence", "Big Data", "Dashboard Development"]
        },
        {
          icon: <MessageSquare className="h-8 w-8" />,
          title: "Chatbot Development",
          description: "Intelligent chatbots to enhance customer service and automate interactions.",
          features: ["AI Chatbots", "WhatsApp Bots", "Customer Support Bots", "24/7 Availability"]
        },
        {
          icon: <Zap className="h-8 w-8" />,
          title: "Process Automation",
          description: "Automate repetitive tasks and streamline your business processes.",
          features: ["Workflow Automation", "RPA", "API Integration", "Custom Scripting"]
        }
      ]
    },
    {
      category: "Business Solutions",
      services: [
        {
          icon: <Palette className="h-8 w-8" />,
          title: "UI/UX Design",
          description: "Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction.",
          features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
        },
        {
          icon: <Search className="h-8 w-8" />,
          title: "SEO & Digital Marketing",
          description: "Improve your online visibility and reach your target audience effectively.",
          features: ["SEO Optimization", "Content Marketing", "Social Media", "PPC Campaigns"]
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
        }
      ]
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
            Comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
          </p>
        </div>

        {serviceCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, index) => (
                <div
                  key={`${catIndex}-${index}`}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200 group h-full flex flex-col"
                >
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <button className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200 flex items-center space-x-1 group">
                      <span>Learn More</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;