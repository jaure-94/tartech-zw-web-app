import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Drill, CheckCircle, Wrench, ArrowRight, Users } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Services() {
  useEffect(() => {
    document.title = 'Borehole Drilling Services - Tartech Contracting';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-construction-yellow/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h1 className="animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              <span className="text-white">BOREHOLE</span> <span className="text-construction-yellow">DRILLING</span>
            </h1>
            <p className="animate-fade-in text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
              At Tartech Contracting, we are your comprehensive partner for unlocking reliable water on your property. Our highly skilled team tackles all drilling projects, from standard boreholes to specialized blast hole and RC drilling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Professional borehole drilling equipment in operation" 
                className="rounded-lg w-full h-64 sm:h-72 md:h-80 lg:h-80 object-cover shadow-2xl" 
              />
            </div>
            <div className="animate-fade-in flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-construction-yellow mb-4 sm:mb-6">OUR DRILLING HERITAGE</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  We have a proud history of collaboration with Building Contractors, Local government projects, NGOs, Charitable Organizations, and Local villages for various water borehole drilling projects.
                </p>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-construction-yellow rounded-full flex items-center justify-center">
                    <Users className="text-industrial-black h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">Trusted Community Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drilling Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-black text-industrial-black mb-3 sm:mb-4 leading-tight">
              DRILLING <span className="text-construction-yellow">EXPERTISE</span>
            </h2>
            <p className="text-base sm:text-lg text-industrial-gray max-w-3xl mx-auto px-2 sm:px-4">
              Our comprehensive drilling capabilities cover all aspects of water access and specialized drilling requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            {/* Rotary Air Percussion Drilling */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white">
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
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white">
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
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white mb-16">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 leading-tight">
            READY TO ACCESS <span className="text-construction-yellow">RELIABLE WATER?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto px-2 sm:px-4">
            From initial site assessment to complete borehole equipping, we deliver comprehensive water solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-construction-yellow text-industrial-black hover:bg-safety-orange font-bold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto">
                GET A QUOTE <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="/services/mining">
              <Button variant="outline" className="border-construction-yellow text-construction-yellow hover:bg-construction-yellow hover:text-industrial-black font-bold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto">
                VIEW OTHER SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}