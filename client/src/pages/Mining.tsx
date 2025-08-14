import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gem, Box, Mountain, CheckCircle, Building2, Truck, Pickaxe, Zap, Package, Layers, Shovel, Droplets } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import PageLoader from '@/components/PageLoader';
import tartechLogo from '@assets/tartech-logo-symbol_1755071044733.png';
import dewateringImage from '@assets/Dewatering_1754640759227.jpg';
import miningInfrastructureImage from '@assets/view-heavy-machinery-used-construction-industry (1)-min_1755102340110.jpg';
import miningTruckHeroImage from '@assets/large-truck-carrying-sand-platinum-mining-site-africa-min_1755186703049.jpg';
import openPitMiningImage from '@assets/open-pit-mining-920200_640-min_1755187586396.jpg';

export default function Mining() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Mining Operations - Tartech Contracting';
    
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
    <div className="min-h-screen pt-16">
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
              <h2 className="text-2xl font-bold text-white mb-2">MINING OPERATIONS</h2>
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
      
      {/* Mining Services Header */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-industrial-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="text-construction-yellow font-black">MINING</span> <span className="text-white font-black">OPERATIONS</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Specialized mining contracting with cutting-edge equipment and expertise in both surface and underground operations across Zimbabwe's mineral-rich landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-14 md:mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src={miningTruckHeroImage} 
                alt="Large truck carrying sand at platinum mining site in Africa" 
                className="rounded-xl shadow-2xl w-full" 
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-construction-yellow mb-4 sm:mb-6 leading-tight">SURFACE MINING EXPERTISE</h3>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="leading-relaxed">Open-pit mining operations with heavy-duty excavation equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="leading-relaxed">Overburden removal and waste rock management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="leading-relaxed">Precision blasting and controlled demolition services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="leading-relaxed">Environmental rehabilitation and mine closure planning</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-6 sm:p-8 text-center">
                <Gem className="text-construction-yellow h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">PRECIOUS METALS</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Gold and platinum mining operations with specialized recovery techniques</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-6 sm:p-8 text-center">
                <Box className="text-construction-yellow h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">BASE METALS</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Copper, nickel, and chrome extraction with modern processing methods</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-6 sm:p-8 text-center">
                <Mountain className="text-construction-yellow h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">INDUSTRIAL MINERALS</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Coal, diamond, and aggregate mining for industrial applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Mining Services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 sm:mb-6 leading-tight">
              COMPREHENSIVE <span className="text-construction-yellow">MINING</span> SERVICES
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-industrial-gray max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              From site development to contract mining operations, we deliver complete mining solutions across Zimbabwe's diverse mineral landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            {/* Mine Site Infrastructure */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={miningInfrastructureImage} 
                    alt="Mining site infrastructure with processing facilities and haul roads" 
                    className="w-full h-48 object-cover rounded-t-lg" 
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center shadow-lg">
                      <Building2 className="text-industrial-black h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-industrial-black mb-2">MINE SITE INFRASTRUCTURE</h3>
                  <h4 className="text-sm font-bold text-construction-yellow mb-6">& CAPITAL PROJECTS SUPPORT</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Site infrastructure development</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Tailings facility construction</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Site civils work, including haul roads, runways and camp establishment</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Materials Handling */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300" 
                    alt="Mining materials handling equipment with conveyor systems and stockpiles" 
                    className="w-full h-48 object-cover rounded-t-lg" 
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center shadow-lg">
                      <Package className="text-industrial-black h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-industrial-black mb-6">MATERIALS HANDLING</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Raw material and product handling</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Crushing and screening</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Stockpile and dump management</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contract Mining Solutions */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={openPitMiningImage} 
                    alt="Open pit mining operation at night with illuminated machinery and infrastructure" 
                    className="w-full h-48 object-cover rounded-t-lg" 
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center shadow-lg">
                      <Pickaxe className="text-industrial-black h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-industrial-black mb-2">CONTRACT MINING</h3>
                  <h4 className="text-sm font-bold text-construction-yellow mb-6">SOLUTIONS</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Overburden strip</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Drill and blast</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Load and haul</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-3 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span className="text-industrial-gray text-sm leading-relaxed">Rehabilitation</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        {/* Dewatering Services Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-3 sm:mb-4 leading-tight">
                DEWATERING <span className="text-construction-yellow">SERVICES</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-industrial-gray max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                Keeping mining operations dry and efficient with professional water management solutions
              </p>
            </div>

            {/* Main Dewatering Feature Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white mb-12 sm:mb-14 md:mb-16 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative order-2 lg:order-1">
                    <img 
                      src={dewateringImage} 
                      alt="Professional dewatering operations with excavator and submersible pump removing water from mining excavation site" 
                      className="w-full h-64 sm:h-80 lg:h-full object-cover lg:rounded-l-lg shadow-inner" 
                    />
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-construction-yellow rounded-full flex items-center justify-center shadow-2xl border-2 sm:border-4 border-white">
                        <Droplets className="text-industrial-black h-8 w-8 sm:h-10 sm:w-10" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <div className="bg-industrial-black/80 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                        <p className="text-construction-yellow font-bold text-xs sm:text-sm">ADVANCED PUMP SYSTEMS</p>
                        <p className="text-white text-xs">Continuous water removal & site management</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2 bg-gradient-to-br from-gray-50 to-white">
                    <div className="mb-4 sm:mb-6">
                      <span className="inline-block bg-construction-yellow text-industrial-black text-xs font-bold px-3 py-1 rounded-full mb-3 sm:mb-4">
                        MINING DEWATERING SPECIALISTS
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-industrial-black mb-3 sm:mb-4 leading-tight">WE REMOVE WATER AND WASTE</h3>
                      <p className="text-lg sm:text-xl md:text-2xl text-construction-yellow font-bold mb-4 sm:mb-6">We keep operations dry. Simple.</p>
                    </div>
                    <p className="text-industrial-gray leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                      Our submersible pumps keep groundwater out and operational efficiency in. We bring safe and secure working operations from mines to construction sites across Zimbabwe.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border-l-4 border-construction-yellow">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <CheckCircle className="text-construction-yellow mr-2 sm:mr-3 h-5 w-5 sm:h-7 sm:w-7 flex-shrink-0" />
                          <span className="text-industrial-black font-bold text-base sm:text-lg">Groundwater Management</span>
                        </div>
                        <p className="text-industrial-gray text-sm leading-relaxed">Advanced submersible pump systems for continuous water removal from mining excavations</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border-l-4 border-construction-yellow">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <CheckCircle className="text-construction-yellow mr-2 sm:mr-3 h-5 w-5 sm:h-7 sm:w-7 flex-shrink-0" />
                          <span className="text-industrial-black font-bold text-base sm:text-lg">Operational Efficiency</span>
                        </div>
                        <p className="text-industrial-gray text-sm leading-relaxed">Maintaining dry working conditions to ensure uninterrupted mining operations and equipment performance</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border-l-4 border-construction-yellow">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <CheckCircle className="text-construction-yellow mr-2 sm:mr-3 h-5 w-5 sm:h-7 sm:w-7 flex-shrink-0" />
                          <span className="text-industrial-black font-bold text-base sm:text-lg">Safety & Security</span>
                        </div>
                        <p className="text-industrial-gray text-sm leading-relaxed">Creating safe working environments through professional water control and waste management</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border-l-4 border-construction-yellow">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <CheckCircle className="text-construction-yellow mr-2 sm:mr-3 h-5 w-5 sm:h-7 sm:w-7 flex-shrink-0" />
                          <span className="text-industrial-black font-bold text-base sm:text-lg">Cross-Industry Application</span>
                        </div>
                        <p className="text-industrial-gray text-sm leading-relaxed">Dewatering solutions for mining operations, construction sites, and industrial projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dewatering Process Workflow */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-14 md:mb-16 shadow-lg">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-industrial-black mb-3 sm:mb-4 leading-tight">
                  DEWATERING <span className="text-construction-yellow">PROCESS</span>
                </h3>
                <p className="text-industrial-gray text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                  Systematic approach to maintaining dry, safe, and productive mining operations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="relative">
                  <Card className="bg-industrial-black border-2 border-construction-yellow hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 sm:p-8 text-center relative">
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-construction-yellow rounded-full flex items-center justify-center text-industrial-black font-black text-lg sm:text-xl shadow-lg">
                          01
                        </div>
                      </div>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-construction-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 mt-3 sm:mt-4 group-hover:bg-construction-yellow/30 transition-colors">
                        <Mountain className="text-construction-yellow h-8 w-8 sm:h-10 sm:w-10" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">SITE ASSESSMENT</h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Comprehensive evaluation of groundwater conditions and drainage requirements for optimal pump placement and system design</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative">
                  <Card className="bg-industrial-black border-2 border-construction-yellow hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 sm:p-8 text-center relative">
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-construction-yellow rounded-full flex items-center justify-center text-industrial-black font-black text-lg sm:text-xl shadow-lg">
                          02
                        </div>
                      </div>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-construction-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 mt-3 sm:mt-4 group-hover:bg-construction-yellow/30 transition-colors">
                        <Droplets className="text-construction-yellow h-8 w-8 sm:h-10 sm:w-10" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">PUMP DEPLOYMENT</h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Strategic installation of high-capacity submersible pumps for continuous water removal and comprehensive site management</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative">
                  <Card className="bg-industrial-black border-2 border-construction-yellow hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 sm:p-8 text-center relative">
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-construction-yellow rounded-full flex items-center justify-center text-industrial-black font-black text-lg sm:text-xl shadow-lg">
                          03
                        </div>
                      </div>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-construction-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 mt-3 sm:mt-4 group-hover:bg-construction-yellow/30 transition-colors">
                        <CheckCircle className="text-construction-yellow h-8 w-8 sm:h-10 sm:w-10" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">CONTINUOUS MONITORING</h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">24/7 system monitoring and proactive maintenance to ensure uninterrupted operations and optimal performance</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mining Process Overview */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-industrial-black rounded-2xl mb-12 sm:mb-14 md:mb-16">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight">
                  OUR <span className="text-construction-yellow">MINING</span> PROCESS
                </h3>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                  Comprehensive mining operations from exploration to rehabilitation, utilizing cutting-edge equipment and sustainable practices
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Layers className="text-industrial-black h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">SITE PREPARATION</h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Infrastructure development and site establishment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Zap className="text-industrial-black h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">EXTRACTION</h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Precision drilling, blasting, and material extraction</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Truck className="text-industrial-black h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">TRANSPORT</h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Efficient loading and hauling operations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Shovel className="text-industrial-black h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">REHABILITATION</h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Environmental restoration and site closure</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-light-industrial rounded-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-industrial-black mb-3 sm:mb-4 leading-tight">
                  PARTNER WITH ZIMBABWE'S <span className="text-construction-yellow">MINING EXPERTS</span>
                </h3>
                <p className="text-industrial-gray text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                  From small-scale operations to major mining projects, our experienced team delivers reliable mining services with safety and efficiency as top priorities.
                </p>
                <div className="flex justify-center">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-construction-yellow text-industrial-black font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-sm sm:text-base">
                    DISCUSS YOUR PROJECT
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </PageLoader>
    </div>
  );
}
