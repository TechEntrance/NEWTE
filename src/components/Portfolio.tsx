import React from 'react';
import { ExternalLink, Code, Palette, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Neutralize",
      description: "Modern e-commerce platform with advanced inventory management and seamless user experience.",
      image: "./images/projects/ecommerce.jpg",
      tags: ["E-commerce", "React", "Node.js"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Tuljha Hotel",
      description: "Luxury hotel booking system with real-time availability and elegant design.",
      image: "./images/projects/hotel.jpg",
      tags: ["Hospitality", "Booking System", "UI/UX"],
      icon: <Palette className="h-6 w-6" />
    },
    {
      title: "Wildolk",
      description: "Creative agency portfolio showcasing stunning visual identity and interactive elements.",
      image: "/images/projects/wildoak.png",
      tags: ["Portfolio", "Creative", "Animation"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Stellar Sprangs",
      description: "Digital marketing agency with building , services, and operational dashboards.",
      image: "/images/projects/stellarssprang.png",
      tags: ["Resort", "Management", "Dashboard"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Bharat Moovers",
      description: "Logistics and moving company website with service tracking and quote generation.",
      image: "/images/projects/logistics.jpg",
      tags: ["Logistics", "Tracking", "CRM"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Tennis Cricket Association",
      description: "Sports management system for organizing tournaments, managing registrations, and tracking player statistics.",
      image: "/images/projects/sports.jpg",
      tags: ["Sports", "Management", "Registration"],
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "EduBridge",
      description: "Online learning platform with interactive courses, student management, and virtual classroom features.",
      image: "/images/projects/education.png",
      tags: ["Education", "Learning", "Management"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "MediConnect",
      description: "Telemedicine platform connecting patients with healthcare providers through secure video consultations and medical record management.",
      image: "/images/projects/medicine.png",
      tags: ["Healthcare", "Telemedicine", "API"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "FoodFusion",
      description: "Restaurant ordering system with real-time inventory management, delivery tracking, and customer loyalty program.",
      image: "/images/projects/food.png",
      tags: ["Food", "Delivery", "Management"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "SportTrack",
      description: "Sports event management and ticketing platform with real-time updates and fan engagement features.",
      image: "/images/projects/sports.jpg",
      tags: ["Sports", "Events", "Ticketing"],
      icon: <Code className="h-6 w-6" />
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the digital experiences we've crafted for leading brands across industries.
            Each project represents our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/800x600'}
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-lg flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Project</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-500">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors duration-300 flex items-center space-x-2 mx-auto">
            <span>View All Projects</span>
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;