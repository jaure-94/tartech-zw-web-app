import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Drill, CheckCircle, Wrench, ArrowRight, Users } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import PageLoader from '@/components/PageLoader';
import tartechLogo from '@assets/tartech-logo-symbol_1755071044733.png';

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Borehole Drilling Services - Tartech Contracting';
    
    // Simulate loading time and then hide loader
    const loadingTimer = setTimeout(() => {
      import('@/lib/gsap').then(({ gsap }) => {
        // Animate loading screen out
        const loadingElement = document.querySelector('.loading-screen');
        if (loadingElement) {
          gsap.to(loadingElement, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              setIsLoading(false);
            }
          });
        } else {
          // Fallback if GSAP target not found
          setIsLoading(false);
        }
      }).catch(() => {
        // Fallback if GSAP import fails
        setIsLoading(false);
      });
    }, 1500); // Show loader for 1.5 seconds

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen fixed inset-0 z-50 bg-industrial-black flex items-center justify-center">
          <div className="text-center">
            {/* Animated Logo/Brand */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-4 border-construction-yellow/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-construction-yellow border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-2 bg-construction-yellow/10 rounded-full flex items-center justify-center">
                  <img 
                    src={tartechLogo} 
                    alt="Tartech Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">BOREHOLE DRILLING</h2>
              <p className="text-construction-yellow/80 text-sm font-medium tracking-wider">TARTECH CONTRACTING</p>
            </div>
            
            {/* Loading Animation */}
            <div className="flex items-center justify-center space-x-1">
              <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
              <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
              <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
            </div>
            
            <p className="text-gray-400 text-sm mt-4 font-light">Loading...</p>
          </div>
        </div>
      )}

      <PageLoader enableHeroAnimation={!isLoading}>
        <ScrollAnimations />
      
      {/* Enhanced Hero Section - Premium Dark Mode Theme */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-industrial-black text-white overflow-hidden" style={{background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'}}>
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-construction-yellow/8 via-transparent to-construction-yellow/8"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-construction-yellow/15 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-safety-orange/15 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-18 md:mb-20">
            <div className="mb-8 animate-slide-up-delay-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
                <span className="text-white font-black drop-shadow-2xl">BOREHOLE</span>{' '}
                <span className="text-construction-yellow font-black drop-shadow-2xl">DRILLING</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-construction-yellow to-transparent mx-auto mb-8 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed px-2 sm:px-4 font-light animate-slide-up-delay-4">
              At Tartech Contracting, we are your comprehensive partner for unlocking reliable water on your property. Our highly skilled team tackles all drilling projects, from standard boreholes to specialized blast hole and RC drilling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 items-center mb-16 sm:mb-18 md:mb-20">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional borehole drilling equipment in operation" 
                  className="rounded-2xl shadow-3xl w-full transform group-hover:scale-105 transition-transform duration-700 border border-white/10" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/40 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 border border-construction-yellow/30">
                    <p className="text-white font-semibold text-sm">Professional Grade Equipment</p>
                    <p className="text-construction-yellow text-xs">Advanced drilling technology for optimal results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="space-y-8">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-construction-yellow mb-6 sm:mb-8 leading-tight bg-gradient-to-r from-construction-yellow via-yellow-400 to-construction-yellow bg-clip-text text-transparent">
                  COMPREHENSIVE DRILLING SERVICES
                </h3>
                <ul className="space-y-5 sm:space-y-6 text-base sm:text-lg lg:text-xl">
                  <li className="flex items-start group">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="text-construction-yellow h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300">Water borehole drilling for residential and commercial properties</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="text-construction-yellow h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300">Specialized blast hole and RC drilling for mining operations</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="text-construction-yellow h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300">Complete borehole equipping and water systems installation</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="mr-4 mt-1">
                      <CheckCircle className="text-construction-yellow h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300">Professional water reticulation and irrigation systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 animate-slide-up-delay-5">
            <Card className="group bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-construction-yellow/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-construction-yellow/20 animate-slide-left-card-1">
              <CardContent className="p-8 sm:p-10 text-center">
                <div className="mb-6">
                  <Drill className="text-construction-yellow h-14 w-14 sm:h-16 sm:w-16 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-white group-hover:text-construction-yellow transition-colors duration-300">DRILLING EXPERTISE</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">Advanced drilling techniques for all geological conditions</p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-safety-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-safety-orange/20 animate-slide-left-card-2">
              <CardContent className="p-8 sm:p-10 text-center">
                <div className="mb-6">
                  <Droplets className="text-construction-yellow h-14 w-14 sm:h-16 sm:w-16 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-white group-hover:text-construction-yellow transition-colors duration-300">WATER SOLUTIONS</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">Complete water access and distribution systems</p>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-construction-yellow/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-construction-yellow/20 animate-slide-left-card-3">
              <CardContent className="p-8 sm:p-10 text-center">
                <div className="mb-6">
                  <Wrench className="text-construction-yellow h-14 w-14 sm:h-16 sm:w-16 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-white group-hover:text-construction-yellow transition-colors duration-300">FULL INSTALLATION</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">Professional pump installation and maintenance services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Drilling Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 md:mb-16 animate-slide-up-delay-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-industrial-black mb-3 sm:mb-4 leading-tight">
              DRILLING <span className="text-construction-yellow">EXPERTISE</span>
            </h2>
            <p className="text-base sm:text-lg text-industrial-gray max-w-3xl mx-auto px-2 sm:px-4">
              Our comprehensive drilling capabilities cover all aspects of water access and specialized drilling requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            {/* Rotary Air Percussion Drilling */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white animate-slide-in-left">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                    alt="Rotary air percussion drilling equipment" 
                    className="w-full h-64 object-cover rounded-t-lg" 
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center shadow-lg">
                      <Drill className="text-industrial-black h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-industrial-black mb-4 sm:mb-6 leading-tight">ROTARY AIR PERCUSSION DRILLING</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 sm:mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <div>
                        <span className="text-industrial-black font-semibold text-sm sm:text-base">Normal drilling up to 10" diameter</span>
                        <p className="text-industrial-gray text-xs sm:text-sm mt-1">Standard water borehole drilling for residential and commercial applications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 sm:mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <div>
                        <span className="text-industrial-black font-semibold text-sm sm:text-base">Symmetrix/Odex drilling</span>
                        <p className="text-industrial-gray text-xs sm:text-sm mt-1">Specialized techniques for challenging geological conditions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rotary Mud Drilling */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white animate-slide-in-right">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1585504198199-20277593b94f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400" 
                    alt="Rotary mud drilling operations" 
                    className="w-full h-64 object-cover rounded-t-lg" 
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center shadow-lg">
                      <Droplets className="text-industrial-black h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-industrial-black mb-4 sm:mb-6 leading-tight">ROTARY MUD DRILLING</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 sm:mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <div>
                        <span className="text-industrial-black font-semibold text-sm sm:text-base">Up to 600mm diameter</span>
                        <p className="text-industrial-gray text-xs sm:text-sm mt-1">Large-scale drilling for high-yield water production and industrial applications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 sm:mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <div>
                        <span className="text-industrial-black font-semibold text-sm sm:text-base">Advanced mud circulation systems</span>
                        <p className="text-industrial-gray text-xs sm:text-sm mt-1">Professional drilling techniques for maximum efficiency and borehole integrity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Equipping of Boreholes */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white mb-16 animate-slide-up-delay-4">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500" 
                    alt="Borehole pump installation and water systems" 
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-full object-cover lg:rounded-l-lg" 
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center shadow-lg">
                      <Wrench className="text-industrial-black h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-black text-industrial-black mb-6 sm:mb-8 leading-tight">EQUIPPING OF BOREHOLES</h3>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 sm:mr-4 mt-1 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      <div>
                        <span className="text-industrial-black font-bold text-base sm:text-lg">Installation of borehole pumps</span>
                        <p className="text-industrial-gray text-sm sm:text-base mt-1">High-quality submersible and surface pumps for reliable water extraction</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 sm:mr-4 mt-1 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      <div>
                        <span className="text-industrial-black font-bold text-base sm:text-lg">Water reticulation systems</span>
                        <p className="text-industrial-gray text-sm sm:text-base mt-1">Complete piping and distribution networks for residential and commercial use</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 sm:mr-4 mt-1 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      <div>
                        <span className="text-industrial-black font-bold text-base sm:text-lg">Tank installations</span>
                        <p className="text-industrial-gray text-sm sm:text-base mt-1">Storage solutions including elevated tanks and ground-level reservoirs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 sm:mr-4 mt-1 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      <div>
                        <span className="text-industrial-black font-bold text-base sm:text-lg">Pressure pumps and small irrigation systems</span>
                        <p className="text-industrial-gray text-sm sm:text-base mt-1">Complete water pressure management and agricultural irrigation setup</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-industrial-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight animate-slide-up-delay-3">
            READY TO ACCESS <span className="text-construction-yellow">RELIABLE WATER?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto px-2 sm:px-4 animate-slide-up-delay-4">
            From initial site assessment to complete borehole equipping, we deliver comprehensive water solutions tailored to your specific requirements.
          </p>
          <div className="flex justify-center animate-slide-up-delay-5">
            <Link href="/contact">
              <Button className="bg-construction-yellow text-industrial-black hover:bg-safety-orange font-bold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto">
                DISCUSS YOUR PROJECT <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </PageLoader>
    </div>
  );
}