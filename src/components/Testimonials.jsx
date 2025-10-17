import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "This platform changed the way I stay in touch with my friends. It's so easy to use, and I love how easy it is to share moments!",
      name: "Emily R",
      rating: 5
    },
    {
      text: "I finally found a social network that understands what I need. Sharing is like a charm. I had a blast sharing my life stories.",
      name: "John K",
      rating: 5
    },
    {
      text: "I joined just to explore, but I can't imagine my daily without MyBindle now. It's where communication made every interaction special!",
      name: "Sophia M",
      rating: 5
    },
    {
      text: "Running my small business has never been easier. The platform helped me connect with customers, showcase my products, and grow my brand.",
      name: "David L",
      rating: 5
    },
    {
      text: "This perfect blend of connectivity and interactions is amazing. The chat and posting features are new, and every interaction feels special!",
      name: "Niyad B",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section with Images */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-400 via-red-400 to-red-500 py-16 lg:py-32">
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-white animate-fade-in-left">
              <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Be the Reason<br />
                Someone Smiles<br />
                Today!
              </h2>
              
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/90">
                Share your moments, spread love through stories and chats. Support your friends. Show kindness and create an amazing impact.
              </p>
              
              <button className="px-8 py-4 bg-white text-red-500 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Download Now
              </button>
            </div>
            
            {/* Right Images - Animated Stack */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              {/* Back Image - Chat Screen */}
              <div className="absolute w-48 h-80 md:w-56 md:h-96 transform -rotate-12 -left-8 md:-left-16 animate-float"
                   style={{
                     animation: 'float 4s ease-in-out infinite'
                   }}>
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl p-4 border-8 border-white">
                  <div className="w-full h-full bg-white rounded-2xl flex flex-col">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-12 rounded-t-2xl flex items-center px-4">
                      <span className="text-white font-bold text-sm">Message Features</span>
                    </div>
                    <div className="flex-1 p-4 space-y-3">
                      <div className="w-full h-2 bg-gray-300 rounded"></div>
                      <div className="w-5/6 h-2 bg-gray-300 rounded"></div>
                      <div className="flex gap-2 mt-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-orange-400"></div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-green-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Image - Smile Heart */}
              <div className="absolute w-52 h-80 md:w-60 md:h-96 transform rotate-6 right-0 md:-right-8 animate-float-delayed"
                   style={{
                     animation: 'floatDelayed 4s ease-in-out infinite',
                     animationDelay: '0.5s'
                   }}>
                <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-4 border-8 border-white relative overflow-hidden">
                  <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center relative">
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
                    
                    {/* Animated heart made of circles */}
                    <div className="flex flex-wrap justify-center gap-2 w-40 h-40">
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 transform"
                          style={{
                            animation: `heartPulse 2s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    <p className="mt-8 text-center">
                      <span className="text-2xl font-bold text-gray-800">Thank You!</span>
                      <div className="text-sm text-gray-600 mt-2">For your wonderful support!</div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-down">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">Real stories from our amazing community</p>
          </div>

          {/* First row - 3 cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-100 p-0.5 transition-all duration-500 group-hover:shadow-2xl">
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10"></div>
                
                <div className="relative z-10">
                  {/* Stars with animation */}
                  <div className="flex gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400 transform transition-all duration-300"
                        style={{
                          animation: `starBounce 0.6s ease-out ${i * 0.1}s both`
                        }}
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-700 text-base mb-8 leading-relaxed font-medium">
                    "{testimonial.text}"
                  </p>

                  {/* User info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                      {testimonial.name.charAt(0)}
                    </div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  </div>
                </div>

                {/* Animated quote mark */}
                <div className="absolute top-6 right-6 text-7xl text-orange-400/10 font-serif transform transition-all duration-500 group-hover:scale-150 group-hover:text-orange-400/20">
                  "
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
            {testimonials.slice(3).map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
                style={{
                  animation: `slideInUp 0.6s ease-out ${(index + 3) * 0.15}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-100 p-0.5 transition-all duration-500 group-hover:shadow-2xl">
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10"></div>
                
                <div className="relative z-10">
                  <div className="flex gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400 transform transition-all duration-300"
                        style={{
                          animation: `starBounce 0.6s ease-out ${i * 0.1}s both`
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base mb-8 leading-relaxed font-medium">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                      {testimonial.name.charAt(0)}
                    </div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-7xl text-orange-400/10 font-serif transform transition-all duration-500 group-hover:scale-150 group-hover:text-orange-400/20">
                  "
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center">
            <button className="group relative px-10 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-full overflow-hidden hover:text-white transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">See More Testimonials</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></div>
            </button>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(-12deg);
            }
            50% {
              transform: translateY(-20px) rotate(-12deg);
            }
          }

          @keyframes floatDelayed {
            0%, 100% {
              transform: translateY(0px) rotate(6deg);
            }
            50% {
              transform: translateY(-25px) rotate(6deg);
            }
          }

          @keyframes heartPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }

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

          @keyframes starBounce {
            0% {
              opacity: 0;
              transform: scale(0) rotate(-180deg);
            }
            50% {
              transform: scale(1.3) rotate(10deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
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

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in-down {
            animation: fadeInDown 0.6s ease-out forwards;
          }

          .animate-fade-in-left {
            animation: fadeInLeft 0.8s ease-out forwards;
          }

          .delay-1000 {
            animation-delay: 1000ms;
          }
        `}</style>
      </section>
    </>
  );
};

export default Testimonials;