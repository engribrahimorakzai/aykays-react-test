import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 py-16 lg:py-24">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -right-32 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content with Staggered Animation */}
          <div className={`text-white transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold animate-bounce">
              🎉 New Release
            </div>
            
            <h2 className="mb-6 text-4xl font-bold lg:text-6xl leading-tight">
              <span className="inline-block hover:scale-110 transition-transform duration-300">Join</span>{" "}
              <span className="inline-block hover:scale-110 transition-transform duration-300">the</span>{" "}
              <span className="inline-block hover:scale-110 transition-transform duration-300 text-yellow-300">Fun</span>{" "}
              <span className="inline-block hover:scale-110 transition-transform duration-300">–</span>
              <br />
              <span className="inline-block hover:scale-110 transition-transform duration-300">Download</span>{" "}
              <span className="inline-block hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">MyBindle</span>{" "}
              <span className="inline-block hover:scale-110 transition-transform duration-300">Now!</span>
            </h2>
            
            <p className={`mb-8 max-w-lg text-lg leading-relaxed text-white/90 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Experience the ultimate social platform where fun meets connection. Share moments, create memories, and celebrate life with friends!
            </p>
            
            <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Button 
                className="group relative gap-2 rounded-full bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <span className="relative">App Store</span>
              </Button>
              
              <Button 
                className="group relative gap-2 rounded-full bg-white hover:bg-gray-100 text-purple-600 px-8 py-6 text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span className="relative">Google Play</span>
              </Button>
            </div>

            {/* Stats Counter Animation */}
            <div className={`mt-12 grid grid-cols-3 gap-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50K+</div>
                <div className="text-sm text-white/80">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">4.8★</div>
                <div className="text-sm text-white/80">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">100+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Phone Image with 3D Animation */}
          <div className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative group">
              {/* Glowing Ring Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Phone Container with 3D Effect */}
              <div className="relative transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500" style={{
                animation: 'float 6s ease-in-out infinite'
              }}>
                {/* Mock Phone Image - Replace with your actual image */}
                <div className="relative w-full max-w-md h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                    <div className="text-white text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center animate-bounce">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">MyBindle</h3>
                      <p className="text-white/80">Your image will appear here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons Around Phone */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0s'}}>
                <span className="text-2xl">🎉</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                <span className="text-2xl">💫</span>
              </div>
              <div className="absolute top-1/4 -right-12 w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                <span className="text-xl">❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;