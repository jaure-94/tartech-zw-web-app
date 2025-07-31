import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Sprout, Dog, Droplets, Warehouse } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Agriculture() {
  useEffect(() => {
    document.title = 'Agriculture Infrastructure - Tartech Contracting';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimations />
      
      {/* Agriculture Services Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              <span className="text-construction-yellow">AGRICULTURE</span> INFRASTRUCTURE
            </h1>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-3xl mx-auto">
              Supporting Zimbabwe's agricultural sector with modern infrastructure, mechanization services, and specialized equipment for enhanced productivity and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern combine harvester working in expansive wheat field" 
                className="rounded-xl shadow-2xl w-full" 
              />
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-black text-industrial-black mb-6">AGRICULTURAL MECHANIZATION</h3>
              <ul className="space-y-4 text-lg text-industrial-gray">
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Land preparation and tillage services with heavy machinery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Irrigation system installation and maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Grain storage facility construction and silos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Farm road construction and drainage systems</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="animate-fade-in bg-light-industrial">
              <CardContent className="p-6 text-center">
                <Sprout className="text-construction-yellow h-10 w-10 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-industrial-black mb-2">CROP PRODUCTION</h4>
                <p className="text-sm text-industrial-gray">Maize, wheat, and tobacco farming infrastructure</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in bg-light-industrial">
              <CardContent className="p-6 text-center">
                <Dog className="text-construction-yellow h-10 w-10 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-industrial-black mb-2">LIVESTOCK</h4>
                <p className="text-sm text-industrial-gray">Cattle, dairy, and poultry facility construction</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in bg-light-industrial">
              <CardContent className="p-6 text-center">
                <Droplets className="text-construction-yellow h-10 w-10 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-industrial-black mb-2">IRRIGATION</h4>
                <p className="text-sm text-industrial-gray">Modern irrigation and water management systems</p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in bg-light-industrial">
              <CardContent className="p-6 text-center">
                <Warehouse className="text-construction-yellow h-10 w-10 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-industrial-black mb-2">STORAGE</h4>
                <p className="text-sm text-industrial-gray">Grain silos and agricultural storage facilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
