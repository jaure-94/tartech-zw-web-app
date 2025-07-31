import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gem, Box, Mountain, CheckCircle } from 'lucide-react';
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
    </div>
  );
}
