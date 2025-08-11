import { useEffect } from 'react';
import { Target, Eye } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function About() {
  useEffect(() => {
    document.title = 'Who We Are - Tartech Contracting';
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ScrollAnimations />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission/Vision Content */}
            <div className="animate-slide-in-left">
              <h1 className="text-4xl sm:text-5xl font-black text-industrial-black mb-8">
                WHO <span className="text-construction-yellow">WE ARE</span>
              </h1>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-industrial-black mb-4 flex items-center">
                    <Target className="text-construction-yellow mr-3 h-6 w-6" />
                    OUR MISSION
                  </h3>
                  <p className="text-lg text-industrial-gray leading-relaxed">
                    To deliver industrial-grade contracting solutions that exceed safety standards and performance expectations, empowering Zimbabwe's construction, mining, and agricultural sectors with world-class expertise.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-industrial-black mb-4 flex items-center">
                    <Eye className="text-construction-yellow mr-3 h-6 w-6" />
                    OUR VISION
                  </h3>
                  <p className="text-lg text-industrial-gray leading-relaxed">
                    To be Zimbabwe's most trusted industrial contractor, recognized for our unwavering commitment to safety, innovation, and excellence in the harshest working environments.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Company Timeline */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional construction team in hard hats and safety gear" 
                  className="rounded-xl shadow-2xl w-full" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/50 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-bold mb-2">30+ YEARS OF EXCELLENCE</h4>
                  <p className="text-sm opacity-90">Building Zimbabwe's future with proven expertise and unwavering dedication</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-construction-yellow p-6 rounded-lg text-center">
                  <div className="text-3xl font-black text-industrial-black">500+</div>
                  <div className="text-sm font-bold text-industrial-black">PROJECTS</div>
                </div>
                <div className="bg-industrial-black p-6 rounded-lg text-center">
                  <div className="text-3xl font-black text-construction-yellow">30+</div>
                  <div className="text-sm font-bold text-white">YEARS</div>
                </div>
                <div className="bg-safety-orange p-6 rounded-lg text-center">
                  <div className="text-3xl font-black text-white">100%</div>
                  <div className="text-sm font-bold text-white">SAFETY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
