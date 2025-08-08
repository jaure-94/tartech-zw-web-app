import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gem, Box, Mountain, CheckCircle, Building2, Truck, Pickaxe, Zap, Package, Layers, Shovel, Droplets } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Mining() {
  useEffect(() => {
    document.title = 'Mining Operations - Tartech Contracting';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimations />
      
      {/* Mining Services Header */}
      <section className="py-20 bg-industrial-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="animate-fade-in text-4xl sm:text-5xl font-black mb-6">
              <span className="text-construction-yellow">MINING</span> OPERATIONS
            </h1>
            <p className="animate-fade-in text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized mining contracting with cutting-edge equipment and expertise in both surface and underground operations across Zimbabwe's mineral-rich landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Massive mining dump truck operating in open pit mine" 
                className="rounded-xl shadow-2xl w-full" 
              />
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-black text-construction-yellow mb-6">SURFACE MINING EXPERTISE</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Open-pit mining operations with heavy-duty excavation equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Overburden removal and waste rock management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Precision blasting and controlled demolition services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Environmental rehabilitation and mine closure planning</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <Gem className="text-construction-yellow h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4 text-white">PRECIOUS METALS</h4>
                <p className="text-gray-300">Gold and platinum mining operations with specialized recovery techniques</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <Box className="text-construction-yellow h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4 text-white">BASE METALS</h4>
                <p className="text-gray-300">Copper, nickel, and chrome extraction with modern processing methods</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <Mountain className="text-construction-yellow h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4 text-white">INDUSTRIAL MINERALS</h4>
                <p className="text-gray-300">Coal, diamond, and aggregate mining for industrial applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Mining Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-industrial-black mb-6">
              COMPREHENSIVE <span className="text-construction-yellow">MINING</span> SERVICES
            </h2>
            <p className="text-lg text-industrial-gray max-w-3xl mx-auto">
              From site development to contract mining operations, we deliver complete mining solutions across Zimbabwe's diverse mineral landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mine Site Infrastructure */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300" 
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
                    src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300" 
                    alt="Heavy mining excavator loading dump truck at open pit mine" 
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-industrial-black mb-4">
                DEWATERING <span className="text-construction-yellow">SERVICES</span>
              </h2>
              <p className="text-lg text-industrial-gray max-w-3xl mx-auto">
                Keeping mining operations dry and efficient with professional water management solutions
              </p>
            </div>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow bg-white mb-16">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src="/attached_assets/Dewatering_1754640348834.jpg" 
                      alt="Professional dewatering operations with submersible pumps at mining site" 
                      className="w-full h-80 lg:h-full object-cover lg:rounded-l-lg" 
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center shadow-lg">
                        <Droplets className="text-industrial-black h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-industrial-black mb-6">WE REMOVE WATER AND WASTE</h3>
                    <p className="text-xl text-construction-yellow font-bold mb-6">We keep operations dry. Simple.</p>
                    <p className="text-industrial-gray leading-relaxed mb-8">
                      Our submersible pumps keep groundwater out and operational efficiency in. We bring safe and secure working operations from mines to construction sites across Zimbabwe.
                    </p>
                    
                    <div className="space-y-5">
                      <div className="flex items-start">
                        <CheckCircle className="text-construction-yellow mr-4 mt-1 h-6 w-6 flex-shrink-0" />
                        <div>
                          <span className="text-industrial-black font-bold text-lg">Groundwater Management</span>
                          <p className="text-industrial-gray mt-1">Advanced submersible pump systems for continuous water removal from mining excavations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-construction-yellow mr-4 mt-1 h-6 w-6 flex-shrink-0" />
                        <div>
                          <span className="text-industrial-black font-bold text-lg">Operational Efficiency</span>
                          <p className="text-industrial-gray mt-1">Maintaining dry working conditions to ensure uninterrupted mining operations and equipment performance</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-construction-yellow mr-4 mt-1 h-6 w-6 flex-shrink-0" />
                        <div>
                          <span className="text-industrial-black font-bold text-lg">Safety & Security</span>
                          <p className="text-industrial-gray mt-1">Creating safe working environments through professional water control and waste management</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="text-construction-yellow mr-4 mt-1 h-6 w-6 flex-shrink-0" />
                        <div>
                          <span className="text-industrial-black font-bold text-lg">Cross-Industry Application</span>
                          <p className="text-industrial-gray mt-1">Dewatering solutions for mining operations, construction sites, and industrial projects</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dewatering Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="animate-fade-in bg-industrial-black border-2 border-construction-yellow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mountain className="text-industrial-black h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white">SITE ASSESSMENT</h4>
                  <p className="text-gray-300">Comprehensive evaluation of groundwater conditions and drainage requirements for optimal pump placement</p>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in bg-industrial-black border-2 border-construction-yellow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Droplets className="text-industrial-black h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white">PUMP DEPLOYMENT</h4>
                  <p className="text-gray-300">Strategic installation of high-capacity submersible pumps for continuous water removal and site management</p>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in bg-industrial-black border-2 border-construction-yellow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-industrial-black h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white">CONTINUOUS MONITORING</h4>
                  <p className="text-gray-300">24/7 system monitoring and maintenance to ensure uninterrupted operations and optimal performance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mining Process Overview */}
        <section className="py-20 bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-industrial-black rounded-2xl mb-16">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-white mb-4">
                  OUR <span className="text-construction-yellow">MINING</span> PROCESS
                </h3>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Comprehensive mining operations from exploration to rehabilitation, utilizing cutting-edge equipment and sustainable practices
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Layers className="text-industrial-black h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">SITE PREPARATION</h4>
                  <p className="text-gray-300">Infrastructure development and site establishment</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="text-industrial-black h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">EXTRACTION</h4>
                  <p className="text-gray-300">Precision drilling, blasting, and material extraction</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="text-industrial-black h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">TRANSPORT</h4>
                  <p className="text-gray-300">Efficient loading and hauling operations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shovel className="text-industrial-black h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">REHABILITATION</h4>
                  <p className="text-gray-300">Environmental restoration and site closure</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-light-industrial rounded-2xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-black text-industrial-black mb-4">
                  PARTNER WITH ZIMBABWE'S <span className="text-construction-yellow">MINING EXPERTS</span>
                </h3>
                <p className="text-industrial-gray text-lg mb-8 max-w-2xl mx-auto">
                  From small-scale operations to major mining projects, our experienced team delivers reliable mining services with safety and efficiency as top priorities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-construction-yellow text-industrial-black font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-200">
                    DISCUSS YOUR PROJECT
                  </button>
                  <button className="px-8 py-4 border-2 border-industrial-black text-industrial-black font-bold rounded-lg hover:bg-industrial-black hover:text-white transition-all duration-200">
                    VIEW CAPABILITIES
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
