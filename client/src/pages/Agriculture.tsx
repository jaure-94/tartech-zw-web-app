import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { 
  CheckCircle, 
  Sprout, 
  Mountain, 
  Ruler, 
  Navigation, 
  Droplets, 
  Dam, 
  Building2,
  Tractor,
  ArrowRight,
  TreePine,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Agriculture() {
  useEffect(() => {
    document.title = 'Agricultural Services - Tartech Contracting Zimbabwe';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Large agricultural tractor working in expansive field at sunset" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                AGRICULTURAL <span className="text-construction-yellow">EXCELLENCE</span>
              </h1>
              <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
                Transforming Zimbabwe's agricultural landscape with cutting-edge technology, precision engineering, and three decades of expertise in land development and infrastructure.
              </p>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-construction-yellow mb-6">OUR AGRICULTURE SERVICES</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white">
                  <div className="flex items-center space-x-2">
                    <TreePine className="h-5 w-5 text-construction-yellow" />
                    <span className="text-sm">Bush Clearing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mountain className="h-5 w-5 text-construction-yellow" />
                    <span className="text-sm">Land Preparation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Ruler className="h-5 w-5 text-construction-yellow" />
                    <span className="text-sm">Land Levelling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Navigation className="h-5 w-5 text-construction-yellow" />
                    <span className="text-sm">GPS Laser Levelling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-5 w-5 text-construction-yellow" />
                    <span className="text-sm">Drainage Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Dam className="h-5 w-5 text-construction-yellow" />
                    <span className="text-sm">Dam Construction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              COMPREHENSIVE <span className="text-construction-yellow">AGRICULTURAL SOLUTIONS</span>
            </h2>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-4xl mx-auto">
              From land preparation to infrastructure development, we provide end-to-end agricultural services that maximize productivity and ensure sustainable farming practices across Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Bush Clearing */}
            <div className="animate-slide-in-left">
              <Card className="h-full overflow-hidden shadow-2xl border-4 border-transparent hover:border-construction-yellow transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Heavy bulldozer and excavator clearing dense vegetation and bush land"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-8 w-8 text-construction-yellow mr-3" />
                    <h3 className="text-2xl font-black text-industrial-black">BUSH CLEARING</h3>
                  </div>
                  <p className="text-industrial-gray mb-6 leading-relaxed">
                    Professional vegetation removal and land clearing services using state-of-the-art bulldozers and clearing equipment. We safely clear dense bush, remove tree stumps, and prepare raw land for agricultural development while preserving topsoil integrity.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Dense vegetation and tree removal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Stump grinding and root extraction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Debris removal and site cleanup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Topsoil preservation techniques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Land Preparation */}
            <div className="animate-slide-in-right">
              <Card className="h-full overflow-hidden shadow-2xl border-4 border-transparent hover:border-construction-yellow transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Agricultural tractor with tillage equipment preparing farmland"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Mountain className="h-8 w-8 text-construction-yellow mr-3" />
                    <h3 className="text-2xl font-black text-industrial-black">LAND PREPARATION</h3>
                  </div>
                  <p className="text-industrial-gray mb-6 leading-relaxed">
                    Comprehensive land preparation services including deep tillage, soil conditioning, and field establishment. Our heavy-duty equipment ensures optimal soil structure for maximum crop yields and sustainable farming practices.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Deep tillage and soil breaking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Soil conditioning and amendment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Field layout and boundary marking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Seedbed preparation and finishing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Land Levelling */}
            <div className="animate-slide-in-left">
              <Card className="h-full overflow-hidden shadow-2xl border-4 border-transparent hover:border-construction-yellow transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Land leveling equipment creating precise field gradients"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Ruler className="h-8 w-8 text-construction-yellow mr-3" />
                    <h3 className="text-2xl font-black text-industrial-black">LAND LEVELLING</h3>
                  </div>
                  <p className="text-industrial-gray mb-6 leading-relaxed">
                    Precision land levelling services to optimize water distribution and improve farming efficiency. Our experienced operators create perfect field gradients for irrigation, drainage, and mechanized farming operations.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Precise slope and gradient creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Water flow optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Improved field accessibility</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Enhanced crop uniformity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* GPS Laser Levelling */}
            <div className="animate-slide-in-right">
              <Card className="h-full overflow-hidden shadow-2xl border-4 border-transparent hover:border-construction-yellow transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="GPS-guided laser leveling equipment with surveying technology"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Navigation className="h-8 w-8 text-construction-yellow mr-3" />
                    <h3 className="text-2xl font-black text-industrial-black">GPS LASER LEVELLING</h3>
                  </div>
                  <p className="text-industrial-gray mb-6 leading-relaxed">
                    Advanced GPS-guided laser levelling and surveying services for ultra-precise field preparation. Our cutting-edge technology ensures millimeter-accurate land grading for optimal irrigation efficiency and crop performance.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Millimeter-precision levelling accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Comprehensive topographical surveying</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">3D field mapping and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Water conservation optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Drainage Systems */}
            <div className="animate-slide-in-left">
              <Card className="h-full overflow-hidden shadow-2xl border-4 border-transparent hover:border-construction-yellow transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Agricultural drainage system construction with excavator"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Droplets className="h-8 w-8 text-construction-yellow mr-3" />
                    <h3 className="text-2xl font-black text-industrial-black">DRAINAGE SYSTEMS</h3>
                  </div>
                  <p className="text-industrial-gray mb-6 leading-relaxed">
                    Professional agricultural drainage solutions to prevent waterlogging and protect crops. We design and install comprehensive drainage networks including subsurface drains, ditches, and water management systems.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Subsurface drainage installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Surface water management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Drainage channel construction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Erosion control solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Dam and Canal Construction */}
            <div className="animate-slide-in-right">
              <Card className="h-full overflow-hidden shadow-2xl border-4 border-transparent hover:border-construction-yellow transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Dam construction with heavy earthmoving equipment"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Dam className="h-8 w-8 text-construction-yellow mr-3" />
                    <h3 className="text-2xl font-black text-industrial-black">DAM & CANAL CONSTRUCTION</h3>
                  </div>
                  <p className="text-industrial-gray mb-6 leading-relaxed">
                    Large-scale water infrastructure development including farm dams, irrigation canals, and water storage facilities. Our expertise ensures reliable water supply systems for agricultural operations throughout seasonal variations.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Farm dam construction and lining</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Irrigation canal networks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Water storage and retention systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm text-industrial-gray">Spillway and overflow management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Agriculture Infrastructure */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden shadow-2xl border-4 border-transparent hover:border-construction-yellow transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Modern agricultural infrastructure and storage facilities"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <Building2 className="h-10 w-10 text-construction-yellow mr-4" />
                    <h3 className="text-3xl font-black text-industrial-black">AGRICULTURE INFRASTRUCTURE</h3>
                  </div>
                  <p className="text-industrial-gray mb-8 text-lg leading-relaxed">
                    Complete agricultural infrastructure development including storage facilities, processing buildings, and farm operations centers. We build durable, efficient structures designed for Zimbabwe's agricultural climate and operational demands.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-industrial-black mb-3">STORAGE FACILITIES</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span className="text-sm text-industrial-gray">Grain silos and storage barns</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span className="text-sm text-industrial-gray">Equipment storage facilities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span className="text-sm text-industrial-gray">Livestock housing and barns</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-industrial-black mb-3">PROCESSING FACILITIES</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span className="text-sm text-industrial-gray">Dairy processing buildings</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span className="text-sm text-industrial-gray">Grain handling facilities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="text-construction-yellow mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          <span className="text-sm text-industrial-gray">Farm operation centers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Tartech Section */}
      <section className="py-20 bg-industrial-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-white mb-6">
              WHY <span className="text-construction-yellow">TARTECH</span> FOR AGRICULTURE?
            </h2>
            <p className="animate-fade-in text-lg text-gray-300 max-w-3xl mx-auto">
              Three decades of agricultural expertise, cutting-edge equipment, and unwavering commitment to Zimbabwe's farming success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-fade-in text-center">
              <div className="w-16 h-16 bg-construction-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                <Tractor className="h-8 w-8 text-industrial-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">ADVANCED EQUIPMENT</h3>
              <p className="text-gray-300">
                State-of-the-art agricultural machinery and GPS-guided precision equipment for optimal results.
              </p>
            </div>
            
            <div className="animate-fade-in text-center">
              <div className="w-16 h-16 bg-construction-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-industrial-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">PROVEN EXPERTISE</h3>
              <p className="text-gray-300">
                Over 30 years of successful agricultural projects across Zimbabwe's diverse farming regions.
              </p>
            </div>
            
            <div className="animate-fade-in text-center">
              <div className="w-16 h-16 bg-construction-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                <Sprout className="h-8 w-8 text-industrial-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SUSTAINABLE SOLUTIONS</h3>
              <p className="text-gray-300">
                Environmentally conscious practices that preserve soil health and promote long-term productivity.
              </p>
            </div>
            
            <div className="animate-fade-in text-center">
              <div className="w-16 h-16 bg-construction-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-industrial-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24/7 SUPPORT</h3>
              <p className="text-gray-300">
                Round-the-clock technical support and emergency services during critical farming seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-construction-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-in text-4xl font-black text-industrial-black mb-6">
            READY TO TRANSFORM YOUR AGRICULTURAL OPERATIONS?
          </h2>
          <p className="animate-fade-in text-lg text-industrial-black mb-8 max-w-2xl mx-auto">
            Get a free consultation and project quote from Zimbabwe's most trusted agricultural contractor. Let's discuss your land development and infrastructure needs.
          </p>
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-industrial-black text-industrial-black hover:bg-industrial-black hover:text-construction-yellow text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                GET FREE QUOTE
              </Button>
            </Link>
            <Button size="lg" className="bg-industrial-black text-construction-yellow hover:bg-gray-800 text-lg px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              EMAIL US TODAY
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
