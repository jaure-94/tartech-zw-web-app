import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gem, Box, Mountain, CheckCircle, Building2, Truck, Pickaxe, Zap, Package, Layers, Shovel } from 'lucide-react';
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
                <h4 className="text-xl font-bold mb-4">PRECIOUS METALS</h4>
                <p className="text-gray-300">Gold and platinum mining operations with specialized recovery techniques</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <Box className="text-construction-yellow h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">BASE METALS</h4>
                <p className="text-gray-300">Copper, nickel, and chrome extraction with modern processing methods</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <Mountain className="text-construction-yellow h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">INDUSTRIAL MINERALS</h4>
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
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="text-industrial-black h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black">MINE SITE INFRASTRUCTURE</h3>
                  <h4 className="text-lg font-bold text-industrial-gray mt-2">& CAPITAL PROJECTS SUPPORT</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Site infrastructure development</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Tailings facility construction</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Site civils work, including haul roads, runways and camp establishment</span>
                  </div>
                </div>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Mining site infrastructure with processing facilities and haul roads" 
                    className="rounded-lg w-full h-48 object-cover" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Materials Handling */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="text-industrial-black h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black">MATERIALS HANDLING</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Raw material and product handling</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Crushing and screening</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Stockpile and dump management</span>
                  </div>
                </div>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0a9e04fc575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Mining materials handling equipment with conveyor systems and stockpiles" 
                    className="rounded-lg w-full h-48 object-cover" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contract Mining Solutions */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pickaxe className="text-industrial-black h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black">CONTRACT MINING</h3>
                  <h4 className="text-lg font-bold text-industrial-gray mt-2">SOLUTIONS</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Overburden strip</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Drill and blast</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Load and haul</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                    <span className="text-industrial-gray">Rehabilitation</span>
                  </div>
                </div>
                <div className="mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Heavy mining excavator loading dump truck at open pit mine" 
                    className="rounded-lg w-full h-48 object-cover" 
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mining Process Overview */}
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
