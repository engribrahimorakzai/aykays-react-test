const Installation = () => {
  const steps = [
    {
      number: "01",
      title: "Download",
      description: "Open Play Store or App Store"
    },
    {
      number: "02",
      title: "Install App",
      description: "Tap app icon to install automatically"
    },
    {
      number: "03",
      title: "Ready to Use",
      description: "Sign up or log in and start connecting!"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            How to Install Our App
          </h2>
          <p className="text-gray-600 text-lg">
            Getting started is quick and easy! Follow these simple steps
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-500 to-primary rounded-full -translate-y-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
          
          <div className="grid gap-12 md:grid-cols-3 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Animated number circle */}
                <div className="relative mb-6">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                  
                  {/* Number circle */}
                  <div className="relative bg-gradient-to-br from-primary to-orange-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                    <span className="relative z-10">{step.number}</span>
                  </div>

                  {/* Pulse ring */}
                  <div className="absolute inset-0 border-4 border-primary rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Animated arrow for connection */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                    <svg 
                      className="w-8 h-8 text-primary animate-bounce-horizontal" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Installation;
