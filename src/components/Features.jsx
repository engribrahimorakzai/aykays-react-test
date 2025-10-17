import React, { useState } from 'react';
import { Wifi, Share2, MessageCircle, Lock, Compass, TrendingUp } from 'lucide-react';

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <Wifi className="w-10 h-10" />,
      title: "Seamless Connections",
      description: "Stay in touch with friends, family, and connect people globally",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Share Your Story",
      description: "Upload photos, videos, and updates to let the world know what's happening",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Real-Time Chat",
      description: "Whether it's 2 AM or a group conversation, connect instantly with chat",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Privacy First",
      description: "Your data, your control. We prioritize your privacy, and make sure secrets",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Compass className="w-10 h-10" />,
      title: "Discover & Explore",
      description: "Find trending content, join communities, and meet new friends who match your interests",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Grow Your Business",
      description: "Use our platform to market your brand, connect with customers, and grow your reach",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 animate-fade-in-down">
            {/* <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
              ✨ AMAZING FEATURES
            </span> */}
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-down" style={{animationDelay: '0.1s'}}>
            Features That Keep You Hooked!
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-down" style={{animationDelay: '0.2s'}}>
            Music, Chat, Share – Anytime, Anywhere!
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Multi-layer glowing border effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 p-0.5 transition-all duration-500 group-hover:shadow-2xl`}>
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>

              {/* Glow effect behind card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 -z-10 group-hover:scale-110`}></div>

              {/* Card Content */}
              <div className="relative bg-white rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                
                {/* Animated background gradient inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/0 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon Container with pulse animation */}
                  <div className="mb-6 relative">
                    {/* Animated glow circle behind icon */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500 group-hover:animate-pulse`}></div>
                    
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-lg transform`}>
                      <span className="transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                  </div>

                  {/* Title with color change animation */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent">
                    {feature.title}
                  </h3>

                  {/* Description with fade in animation */}
                  <p className="text-gray-600 text-base leading-relaxed transition-all duration-500 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </div>

                {/* Animated gradient border line at bottom */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left w-full`}></div>

                {/* Corner accent - animated */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-3xl border-2 border-transparent group-hover:border-orange-400 transition-colors duration-500 opacity-0 group-hover:opacity-100"></div>

                {/* Moving shine effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-75"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-75 {
          animation-delay: 75ms;
        }
      `}</style>
    </section>
  );
};

export default Features;