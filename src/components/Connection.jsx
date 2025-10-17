import appScreens from "@/assets/app-screens.png";

const Connection = () => {
  const connectionFeatures = [
    {
      icon: "📹",
      title: "Short Videos & Reels",
      description: "Share fun in-app or short videos that make everyone smile."
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Stay updated on what matters within Stay tuned."
    },
    {
      icon: "🌐",
      title: "Interest-Based Communities",
      description: "Link up with like-minded individuals from all around the world."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Phone mockup with animation */}
          <div className="relative flex justify-center lg:justify-start" style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-orange-500 to-red-500 rounded-3xl blur-3xl opacity-30 animate-pulse scale-110"></div>
              
              {/* Phone image */}
              <img 
                src={appScreens} 
                alt="MyBindle app screens showing connections" 
                className="relative h-auto w-full max-w-lg drop-shadow-2xl transform transition-transform duration-700 hover:scale-105 hover:rotate-2"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-80 animate-bounce blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-80 animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div style={{ animation: 'fadeInRight 0.8s ease-out' }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Where Every Click<br />
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Sparks a Connection!
              </span>
            </h2>
            
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              A world of limitless possibilities awaits! Create lasting memories, share special moments, and connect with people who matter.
            </p>

            <div className="space-y-6">
              {connectionFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2 + 0.3}s both`
                  }}
                >
                  {/* Animated icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative text-4xl bg-gradient-to-br from-red-50 to-orange-50 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <svg 
                    className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Connection;
