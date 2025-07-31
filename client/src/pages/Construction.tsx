import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Compass, Shovel, Hammer, Key } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Construction() {
  useEffect(() => {
    document.title = 'Construction Services - Tartech Contracting';
  }, []);

  return (
    <div className="min-h-screen pt-16">
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
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Manufacturing facilities and processing plants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Warehouse and distribution center construction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Power infrastructure and utility installations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-construction-yellow mr-3 mt-1 h-5 w-5 flex-shrink-0" />
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
    </div>
  );
}
