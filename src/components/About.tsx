import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Quality",
      description: "Every project is meticulously crafted with attention to detail, ensuring excellence in both design and functionality."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Partnership",
      description: "We build lasting relationships with our clients, becoming their trusted technology partner for long-term success."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Our team works closely together and with clients to ensure every project reflects shared vision and goals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            About <span className="text-orange-500">TechEntrance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and strategists dedicated to transforming 
            digital experiences and helping businesses thrive in the modern world.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2021, TechEntrance began as a vision to bridge the gap between innovative 
                technology and business success. We recognized that many companies struggled to establish 
                a strong digital presence that truly represented their brand and values.
              </p>
              <p>
                Today, we've grown into a trusted partner for businesses across industries, from startups 
                to established enterprises. Our commitment to excellence and innovation has helped us deliver 
                over 50 successful projects, each one unique and tailored to our client's specific needs.
              </p>
              <p>
                We believe that great technology should be accessible, beautiful, and purposeful. This 
                philosophy drives everything we do, from our initial client consultations to the final 
                project delivery and beyond.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold">3+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                  <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;