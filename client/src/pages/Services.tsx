import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain, HardHat, Tractor, ArrowRight } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Services() {
  useEffect(() => {
    document.title = 'Our Services - Tartech Contracting';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimations />
      
      {/* Services Header */}
      <section className="py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              OUR <span className="text-construction-yellow">SERVICES</span>
            </h1>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-3xl mx-auto">
              Comprehensive industrial contracting solutions across Zimbabwe's most demanding sectors, delivering excellence with uncompromising safety standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mining Services */}
            <Card className="service-card-hover animate-fade-in bg-white rounded-xl shadow-xl overflow-hidden border-4 border-transparent hover:border-construction-yellow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Large mining excavator operating in open pit mine" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <CardContent className="p-8">
                <div className="text-construction-yellow text-5xl mb-4">
                  <Mountain className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-black mb-4">MINING OPERATIONS</h3>
                <p className="text-industrial-gray mb-6">
                  Specialized mining contracting with cutting-edge equipment for both surface and underground operations across Zimbabwe's mineral-rich landscape.
                </p>
                <ul className="text-sm text-industrial-gray mb-6 space-y-2">
                  <li>• Open-pit mining operations</li>
                  <li>• Underground mining services</li>
                  <li>• Mineral processing facilities</li>
                  <li>• Environmental rehabilitation</li>
                </ul>
                <Link href="/services/mining">
                  <Button className="w-full bg-construction-yellow text-industrial-black hover:bg-safety-orange font-bold">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Construction Services */}
            <Card className="service-card-hover animate-fade-in bg-white rounded-xl shadow-xl overflow-hidden border-4 border-transparent hover:border-construction-yellow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Construction site with tower cranes and building framework" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <CardContent className="p-8">
                <div className="text-construction-yellow text-5xl mb-4">
                  <HardHat className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-black mb-4">CONSTRUCTION</h3>
                <p className="text-industrial-gray mb-6">
                  Commercial and industrial construction projects delivering robust infrastructure built to withstand Zimbabwe's challenging climate conditions.
                </p>
                <ul className="text-sm text-industrial-gray mb-6 space-y-2">
                  <li>• Industrial facility construction</li>
                  <li>• Commercial building projects</li>
                  <li>• Heavy concrete foundations</li>
                  <li>• Structural steelwork</li>
                </ul>
                <Link href="/services/construction">
                  <Button className="w-full bg-construction-yellow text-industrial-black hover:bg-safety-orange font-bold">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Agriculture Services */}
            <Card className="service-card-hover animate-fade-in bg-white rounded-xl shadow-xl overflow-hidden border-4 border-transparent hover:border-construction-yellow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Large agricultural tractor working in expansive field" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <CardContent className="p-8">
                <div className="text-construction-yellow text-5xl mb-4">
                  <Tractor className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-industrial-black mb-4">AGRICULTURE</h3>
                <p className="text-industrial-gray mb-6">
                  Agricultural infrastructure and mechanization services supporting Zimbabwe's farming sector with modern equipment and sustainable techniques.
                </p>
                <ul className="text-sm text-industrial-gray mb-6 space-y-2">
                  <li>• Irrigation system installation</li>
                  <li>• Grain storage facilities</li>
                  <li>• Farm mechanization services</li>
                  <li>• Agricultural infrastructure</li>
                </ul>
                <Link href="/services/agriculture">
                  <Button className="w-full bg-construction-yellow text-industrial-black hover:bg-safety-orange font-bold">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
