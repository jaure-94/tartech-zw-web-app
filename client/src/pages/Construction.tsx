import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Route, Building2, MapPin, Mountain } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Construction() {
  useEffect(() => {
    document.title = 'Construction Services - Tartech Contracting';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimations />
      
      {/* Construction Services Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              <span className="text-construction-yellow">CONSTRUCTION</span> SERVICES
            </h1>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-3xl mx-auto">
              Comprehensive construction solutions from road infrastructure to structural concrete, delivering quality projects that meet Ministry of Transport and SATCC specifications.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Road Construction */}
            <Card className="animate-slide-in-left bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-construction-yellow rounded-lg flex items-center justify-center mr-4">
                    <Route className="text-industrial-black h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-black text-industrial-black">
                    ROAD CONSTRUCTION / REHABILITATION
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-industrial-gray leading-relaxed">
                  Complete road construction and rehabilitation services including earthworks, layer works, surfacing, storm water drainage, concrete structures, road signs, road marking and other ancillary items. All work performed to contract specification, typically Ministry of Transport or SATCC standards.
                </p>
              </CardContent>
            </Card>

            {/* Structural Concrete */}
            <Card className="animate-slide-in-right bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-construction-yellow rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="text-industrial-black h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-black text-industrial-black">
                    STRUCTURAL CONCRETE AND BUILDINGS
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-industrial-gray leading-relaxed">
                  Construction of reinforced concrete structures and commercial or domestic buildings. Extensive experience in structural concrete works including bridge construction (road over rail), storm water structures and water retaining structures.
                </p>
              </CardContent>
            </Card>

            {/* Urban Infrastructure */}
            <Card className="animate-slide-in-left bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-construction-yellow rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-industrial-black h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-black text-industrial-black">
                    URBAN INFRASTRUCTURAL DEVELOPMENT
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-industrial-gray leading-relaxed">
                  Development of commercial or residential erven and associated roads and storm water drainage. Complete service provision including sewer and water reticulation, all executed to specification with proven success across multiple contracts.
                </p>
              </CardContent>
            </Card>

            {/* Bulk Earth Works */}
            <Card className="animate-slide-in-right bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-construction-yellow rounded-lg flex items-center justify-center mr-4">
                    <Mountain className="text-industrial-black h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-black text-industrial-black">
                    BULK EARTH WORKS
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-industrial-gray leading-relaxed">
                  Specialized earthworks for road and dam embankments and open cast mining activities. Heavy-duty excavation and earth moving services using advanced machinery for large-scale projects.
                </p>
              </CardContent>
            </Card>

          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-industrial-black rounded-2xl shadow-2xl">
              <CardContent className="p-12">
                <h3 className="text-3xl font-black text-white mb-6">
                  READY TO START YOUR PROJECT?
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your construction requirements and receive a detailed project proposal tailored to your specifications.
                </p>
                <button className="bg-construction-yellow text-industrial-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-300">
                  GET A QUOTE
                </button>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
}
