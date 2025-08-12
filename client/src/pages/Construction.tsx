import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Compass, Shovel, Hammer, Key, Building, MapPin, Droplets, Mountain } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Construction() {
  useEffect(() => {
    document.title = 'Construction Services - Tartech Contracting';
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <ScrollAnimations />
      
      {/* Construction Services Header */}
      <section className="py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              <span className="text-construction-yellow">CONSTRUCTION</span> EXCELLENCE
            </h1>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-3xl mx-auto">
              From ground-breaking to completion, we deliver robust commercial and industrial construction projects that stand the test of time and Zimbabwe's challenging climate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-black text-industrial-black mb-6">INDUSTRIAL CONSTRUCTION</h3>
              <ul className="space-y-4 text-lg text-industrial-gray">
                <li className="flex items-start">
                  <CheckCircle2 className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Manufacturing facilities and processing plants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Warehouse and distribution center construction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Power infrastructure and utility installations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Heavy concrete foundations and structural steelwork</span>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern industrial building under construction with steel framework" 
                className="rounded-xl shadow-2xl w-full" 
              />
            </div>
          </div>
          
          {/* Construction Process Timeline */}
          <Card className="bg-white rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-black text-industrial-black mb-8 text-center">OUR CONSTRUCTION PROCESS</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="animate-fade-in text-center">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Compass className="text-industrial-black h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-industrial-black mb-2">PLANNING</h4>
                  <p className="text-sm text-industrial-gray">Detailed project planning and engineering assessment</p>
                </div>
                <div className="animate-fade-in text-center">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shovel className="text-industrial-black h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-industrial-black mb-2">FOUNDATION</h4>
                  <p className="text-sm text-industrial-gray">Excavation and heavy-duty foundation construction</p>
                </div>
                <div className="animate-fade-in text-center">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Hammer className="text-industrial-black h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-industrial-black mb-2">CONSTRUCTION</h4>
                  <p className="text-sm text-industrial-gray">Structural work and mechanical installations</p>
                </div>
                <div className="animate-fade-in text-center">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Key className="text-industrial-black h-8 w-8" />
                  </div>
                  <h4 className="font-bold text-industrial-black mb-2">COMPLETION</h4>
                  <p className="text-sm text-industrial-gray">Final inspections and project handover</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Construction Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-industrial-black mb-6">
              OUR <span className="text-construction-yellow">CONSTRUCTION</span> SERVICES
            </h2>
            <p className="text-lg text-industrial-gray max-w-3xl mx-auto">
              Comprehensive construction solutions meeting Ministry of Transport and SATCC specifications across Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Road Construction */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-construction-yellow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-industrial-black h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black">ROAD CONSTRUCTION/REHABILITATION</h3>
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
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mr-4">
                    <Building className="text-industrial-black h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black">STRUCTURAL CONCRETE AND BUILDINGS</h3>
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
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mr-4">
                    <Droplets className="text-industrial-black h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black">URBAN INFRASTRUCTURAL DEVELOPMENT</h3>
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
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-construction-yellow rounded-full flex items-center justify-center mr-4">
                    <Mountain className="text-industrial-black h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-industrial-black">BULK EARTH WORKS</h3>
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
              <CardContent className="p-12">
                <h3 className="text-3xl font-black text-white mb-4">
                  READY TO START YOUR <span className="text-construction-yellow">CONSTRUCTION PROJECT?</span>
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  From planning to completion, our experienced team delivers construction projects that meet the highest standards and specifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-construction-yellow text-industrial-black font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-200">
                    REQUEST QUOTE
                  </button>
                  <button className="px-8 py-4 border-2 border-construction-yellow text-construction-yellow font-bold rounded-lg hover:bg-construction-yellow hover:text-industrial-black transition-all duration-200">
                    VIEW PORTFOLIO
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
