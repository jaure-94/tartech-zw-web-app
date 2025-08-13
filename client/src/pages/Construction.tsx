import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Compass, Shovel, Hammer, Key, Building, MapPin, Droplets, Mountain } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import PageLoader from '@/components/PageLoader';
import tartechLogo from '@assets/tartech-logo-symbol_1755071044733.png';

export default function Construction() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Construction Services - Tartech Contracting';
    
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
              <h2 className="text-2xl font-bold text-white mb-2">CONSTRUCTION</h2>
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
      
      {/* Construction Services Header */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-industrial-black mb-4 sm:mb-6 leading-tight">
              <span className="text-construction-yellow font-black">CONSTRUCTION</span> <span className="text-industrial-black font-black">EXCELLENCE</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-industrial-gray max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              From ground-breaking to completion, we deliver robust commercial and industrial construction projects that stand the test of time and Zimbabwe's challenging climate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-14 md:mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-industrial-black mb-4 sm:mb-6 leading-tight">INDUSTRIAL CONSTRUCTION</h3>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-industrial-gray">
                <li className="flex items-start">
                  <CheckCircle2 className="text-construction-yellow mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="leading-relaxed">Manufacturing facilities and processing plants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-construction-yellow mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="leading-relaxed">Warehouse and distribution center construction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-construction-yellow mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="leading-relaxed">Power infrastructure and utility installations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-construction-yellow mr-3 mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="leading-relaxed">Heavy concrete foundations and structural steelwork</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern industrial building under construction with steel framework" 
                className="rounded-xl shadow-2xl w-full" 
              />
            </div>
          </div>
          
          {/* Construction Process Timeline */}
          <Card className="bg-white rounded-2xl shadow-xl">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-industrial-black mb-6 sm:mb-8 text-center leading-tight">OUR CONSTRUCTION PROCESS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Compass className="text-industrial-black h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h4 className="font-bold text-industrial-black mb-2 text-sm sm:text-base">PLANNING</h4>
                  <p className="text-xs sm:text-sm text-industrial-gray leading-relaxed">Detailed project planning and engineering assessment</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Shovel className="text-industrial-black h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h4 className="font-bold text-industrial-black mb-2 text-sm sm:text-base">FOUNDATION</h4>
                  <p className="text-xs sm:text-sm text-industrial-gray leading-relaxed">Excavation and heavy-duty foundation construction</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Hammer className="text-industrial-black h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h4 className="font-bold text-industrial-black mb-2 text-sm sm:text-base">CONSTRUCTION</h4>
                  <p className="text-xs sm:text-sm text-industrial-gray leading-relaxed">Structural work and mechanical installations</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Key className="text-industrial-black h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h4 className="font-bold text-industrial-black mb-2 text-sm sm:text-base">COMPLETION</h4>
                  <p className="text-xs sm:text-sm text-industrial-gray leading-relaxed">Final inspections and project handover</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Construction Services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 sm:mb-6 leading-tight">
              OUR <span className="text-construction-yellow">CONSTRUCTION</span> SERVICES
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-industrial-gray max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              Comprehensive construction solutions meeting Ministry of Transport and SATCC specifications across Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            {/* Road Construction */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0">
                    <MapPin className="text-industrial-black h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-industrial-black text-center sm:text-left">ROAD CONSTRUCTION/REHABILITATION</h3>
                </div>
                <p className="text-industrial-gray leading-relaxed mb-4">
                  All works (including earthworks, layer works, surfacing, storm water drainage, concrete structures, road signs, road marking and other ancillary items), done to contract specification; typically, Ministry of Transport or SATCC.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Earthworks</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Surfacing</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Storm Drainage</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Road Marking</span>
                </div>
              </CardContent>
            </Card>

            {/* Structural Concrete */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0">
                    <Building className="text-industrial-black h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-industrial-black text-center sm:text-left">STRUCTURAL CONCRETE AND BUILDINGS</h3>
                </div>
                <p className="text-industrial-gray leading-relaxed mb-4">
                  There is capacity to undertake both the construction of both reinforced concrete structures and commercial or domestic buildings. The experience thus far i.r.o. structural concrete works stems from the construction of bridges (inclusive of road over rail), various storm water structures and water retaining structure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Reinforced Concrete</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Bridge Construction</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Commercial Buildings</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Water Structures</span>
                </div>
              </CardContent>
            </Card>

            {/* Urban Infrastructure */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0">
                    <Droplets className="text-industrial-black h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-industrial-black text-center sm:text-left">URBAN INFRASTRUCTURAL DEVELOPMENT</h3>
                </div>
                <p className="text-industrial-gray leading-relaxed mb-4">
                  This pertains to the development of commercial or residential erven and associated roads and storm water drainage, along with provision of various services such as sewer and water reticulation, all as specified. A few successful contracts have been undertaken.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Residential Development</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Commercial Erven</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Water Reticulation</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Sewer Systems</span>
                </div>
              </CardContent>
            </Card>

            {/* Bulk Earth Works */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0">
                    <Mountain className="text-industrial-black h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-industrial-black text-center sm:text-left">BULK EARTH WORKS</h3>
                </div>
                <p className="text-industrial-gray leading-relaxed mb-4">
                  Earthworks associated with the construction of road and dam embankments and open cast mining activities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Road Embankments</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Dam Construction</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Open Cast Mining</span>
                  <span className="px-3 py-1 bg-light-industrial text-industrial-black text-sm rounded-full">Large Scale Earthworks</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-industrial-black rounded-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight">
                  READY TO START YOUR <span className="text-construction-yellow">CONSTRUCTION PROJECT?</span>
                </h3>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                  From planning to completion, our experienced team delivers construction projects that meet the highest standards and specifications.
                </p>
                <div className="flex justify-center">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-construction-yellow text-industrial-black font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-200 text-sm sm:text-base">
                    REQUEST QUOTE
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
