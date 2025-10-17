import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      className="relative overflow-hidden bg-[#FF6B6B] py-16 lg:py-24"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background with Mouse Follow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        ></div>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-red-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-orange-300/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Animated Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/15 rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatRandom ${8 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-white">
            {/* Logo with Sparkle Animation */}
            <div className={`mb-8 flex items-center justify-center lg:justify-start gap-2 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <div className="relative group">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white transform group-hover:rotate-180 transition-transform duration-700 group-hover:scale-110">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
                </svg>
                {/* Sparkles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
              <span className="text-2xl font-bold hover:tracking-wider transition-all duration-300">MyBindle</span>
            </div>
            
            {/* Animated Heading */}
            <h1 className={`mb-6 text-5xl font-bold leading-tight lg:text-7xl text-center lg:text-left transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <span className="inline-block hover:scale-110 hover:text-yellow-200 transition-all duration-300 cursor-default">Stay</span>{" "}
              <span className="inline-block hover:scale-110 hover:text-yellow-200 transition-all duration-300 cursor-default">Connected</span>
              <br />
              <span className="inline-block hover:scale-110 hover:text-yellow-200 transition-all duration-300 cursor-default">Stay</span>{" "}
              <span className="inline-block hover:scale-110 hover:text-yellow-200 transition-all duration-300 cursor-default">Social</span>
              <br />
              <span className="inline-block hover:scale-110 hover:text-yellow-200 transition-all duration-300 cursor-default">Stay</span>{" "}
              <span className="inline-block bg-gradient-to-r from-yellow-200 via-yellow-300 to-orange-200 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 cursor-default">You!</span>
            </h1>
            
            {/* Description */}
            <p className={`mb-8 max-w-lg text-lg leading-relaxed text-white/95 text-center lg:text-left mx-auto lg:mx-0 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Your go-to for hassle-free, fun, and seamless connections experience. Whether you're connecting with friends, sharing moments, or exploring new possibilities – we've got you covered!
            </p>
            
            {/* CTA Button with Ripple Effect */}
            <div className={`flex justify-center lg:justify-start transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Button className="group relative text-base px-10 py-6 rounded-full bg-white text-[#FF6B6B] hover:bg-gray-50 font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Ripple effect */}
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
              </Button>
            </div>

            {/* Stats Section */}
            <div className={`mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-200 group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="text-sm text-white/80">Active Users</div>
              </div>
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-200 group-hover:scale-110 transition-transform duration-300">4.8★</div>
                <div className="text-sm text-white/80">App Rating</div>
              </div>
              <div className="text-center lg:text-left group cursor-default">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-200 group-hover:scale-110 transition-transform duration-300">100+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Phone with Advanced Animations */}
          <div className={`relative flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative group">
              {/* Glowing Aura */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-yellow-200/20 to-orange-200/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-700 animate-pulse"></div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/30 animate-spin-slow"></div>
              
              {/* Phone Container */}
              <div 
                className="relative transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-700" 
                style={{
                  animation: 'floatPhone 8s ease-in-out infinite'
                }}
              >
                {/* Actual Phone Image */}
                <div className="relative w-full max-w-sm lg:max-w-md">
                  <img 
                    src="/src/assets/hero-phone.png"
                    alt="MyBindle App Interface" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Floating Elements Around Phone */}
              <div className="absolute -top-8 -left-8 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💬</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 animate-bounce" style={{animationDelay: '0.7s', animationDuration: '3s'}}>
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎉</span>
                </div>
              </div>
              
              <div className="absolute top-1/4 -right-12 animate-bounce" style={{animationDelay: '1.4s', animationDuration: '3s'}}>
                <div className="w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">❤️</span>
                </div>
              </div>

              <div className="absolute top-2/3 -left-12 animate-bounce" style={{animationDelay: '2.1s', animationDuration: '3s'}}>
                <div className="w-14 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">⭐</span>
                </div>
              </div>

              {/* Orbiting Dots */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-300 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-spin-slow" style={{animationDelay: '1s'}}>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-orange-300 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatPhone {
          0%, 100% {
            transform: translateY(0px) rotateY(0deg);
          }
          25% {
            transform: translateY(-15px) rotateY(5deg);
          }
          50% {
            transform: translateY(-25px) rotateY(0deg);
          }
          75% {
            transform: translateY(-15px) rotateY(-5deg);
          }
        }

        @keyframes floatRandom {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -30px);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, -60px);
            opacity: 0.8;
          }
          75% {
            transform: translate(-40px, -30px);
            opacity: 0.6;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-600 {
          animation-delay: 600ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;