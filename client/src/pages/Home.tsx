import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Bolt, Calculator, Mountain, HardHat, Tractor, ArrowRight, ChevronDown, Shield, Award, Users, Clock, CheckCircle, Star, Phone } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import bulldozerImage from '@assets/bulldozer-2195329_1920_1753976237868.jpg';
import tartechLogo from '@assets/Tartech Logo_1754917926947.png';

export default function Home() {
  useEffect(() => {
    document.title = 'Tartech Contracting - Engineering Excellence in Harsh Environments';
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={bulldozerImage} 
            alt="Heavy industrial bulldozer and excavator equipment at construction site with dramatic sky" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080";
            }}
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="animate-fade-in mb-8 flex justify-center">
            <img 
              src={tartechLogo} 
              alt="Tartech Contracting Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto opacity-90"
            />
          </div>
          <h1 className="animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            ENGINEERING EXCELLENCE<br />
            <span className="text-construction-yellow">IN HARSH ENVIRONMENTS</span>
          </h1>
          <p className="animate-fade-in text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-5xl mx-auto font-light leading-relaxed">
            Zimbabwe's premier industrial contractor delivering world-class solutions in construction, mining, and agriculture with three decades of proven expertise and unwavering safety standards.
          </p>
          <div className="animate-fade-in flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-construction-yellow text-industrial-black hover:bg-white text-xl px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Bolt className="mr-3 h-6 w-6" />
                EXPLORE SERVICES
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-3 border-white text-black hover:bg-white hover:text-black text-xl px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Calculator className="mr-3 h-6 w-6" />
                GET A QUOTE
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-industrial-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-black text-construction-yellow mb-2">30+</div>
              <div className="text-sm md:text-base font-bold text-white uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-black text-construction-yellow mb-2">500+</div>
              <div className="text-sm md:text-base font-bold text-white uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-black text-construction-yellow mb-2">100%</div>
              <div className="text-sm md:text-base font-bold text-white uppercase tracking-wide">Safety Record</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-black text-construction-yellow mb-2">24/7</div>
              <div className="text-sm md:text-base font-bold text-white uppercase tracking-wide">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              OUR <span className="text-construction-yellow">EXPERTISE</span>
            </h2>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-3xl mx-auto">
              Three decades of delivering industrial-grade solutions across Zimbabwe's most demanding sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mining Card */}
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
                  Specialized mining contracting with heavy-duty equipment and expertise in harsh underground and surface mining environments.
                </p>
                <Link href="/services/mining">
                  <span className="inline-flex items-center text-construction-yellow font-bold hover:text-safety-orange transition-colors duration-300 cursor-pointer">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>
            
            {/* Construction Card */}
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
                  Commercial and industrial construction projects from ground up, delivering robust infrastructure built to last in challenging conditions.
                </p>
                <Link href="/services/construction">
                  <span className="inline-flex items-center text-construction-yellow font-bold hover:text-safety-orange transition-colors duration-300 cursor-pointer">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>
            
            {/* Agriculture Card */}
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
                  Agricultural infrastructure and mechanization services supporting Zimbabwe's farming sector with modern equipment and techniques.
                </p>
                <Link href="/services/agriculture">
                  <span className="inline-flex items-center text-construction-yellow font-bold hover:text-safety-orange transition-colors duration-300 cursor-pointer">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              WHY CHOOSE <span className="text-construction-yellow">TARTECH</span>
            </h2>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-3xl mx-auto">
              Three decades of excellence in Zimbabwe's most demanding industrial environments, backed by cutting-edge equipment and unwavering commitment to safety.
            </p>
          </div>
          
          <div className="animate-fade-in">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="safety" className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="px-8 py-6 bg-gradient-to-r from-white to-gray-50 hover:from-construction-yellow/10 hover:to-construction-yellow/5 transition-all duration-300 text-left [&[data-state=open]]:bg-construction-yellow/10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-industrial-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-industrial-black">SAFETY FIRST</h3>
                      <p className="text-sm text-industrial-gray">Our commitment to zero-incident operations</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 bg-white">
                  <div className="pl-16 space-y-4">
                    <p className="text-industrial-gray leading-relaxed">
                      Zero-incident safety record with comprehensive training and international safety protocols. Our commitment to safety goes beyond compliance – it's ingrained in every aspect of our operations.
                    </p>
                    <ul className="space-y-2 text-industrial-gray">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> International safety certifications and standards</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> Regular safety training and equipment updates</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> 24/7 safety monitoring and incident prevention</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="excellence" className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="px-8 py-6 bg-gradient-to-r from-white to-gray-50 hover:from-construction-yellow/10 hover:to-construction-yellow/5 transition-all duration-300 text-left [&[data-state=open]]:bg-construction-yellow/10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-industrial-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-industrial-black">PROVEN EXCELLENCE</h3>
                      <p className="text-sm text-industrial-gray">Award-winning quality and innovation</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 bg-white">
                  <div className="pl-16 space-y-4">
                    <p className="text-industrial-gray leading-relaxed">
                      Industry awards and certifications recognizing our commitment to quality and innovation. Our excellence is measured not just by what we build, but how we build it.
                    </p>
                    <ul className="space-y-2 text-industrial-gray">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> Zimbabwe Engineering Excellence Awards</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> ISO 9001 Quality Management certification</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> Industry leadership in sustainable practices</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="team" className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="px-8 py-6 bg-gradient-to-r from-white to-gray-50 hover:from-construction-yellow/10 hover:to-construction-yellow/5 transition-all duration-300 text-left [&[data-state=open]]:bg-construction-yellow/10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-industrial-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-industrial-black">EXPERT TEAM</h3>
                      <p className="text-sm text-industrial-gray">Decades of specialized experience</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 bg-white">
                  <div className="pl-16 space-y-4">
                    <p className="text-industrial-gray leading-relaxed">
                      Highly skilled professionals with decades of experience in harsh industrial environments. Our team combines local knowledge with international expertise.
                    </p>
                    <ul className="space-y-2 text-industrial-gray">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> Certified engineers and project managers</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> Specialized heavy equipment operators</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> Continuous professional development programs</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery" className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="px-8 py-6 bg-gradient-to-r from-white to-gray-50 hover:from-construction-yellow/10 hover:to-construction-yellow/5 transition-all duration-300 text-left [&[data-state=open]]:bg-construction-yellow/10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-industrial-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-industrial-black">ON-TIME DELIVERY</h3>
                      <p className="text-sm text-industrial-gray">Reliable project completion</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 bg-white">
                  <div className="pl-16 space-y-4">
                    <p className="text-industrial-gray leading-relaxed">
                      Consistent project completion within deadlines and budget constraints. Our proven project management methodology ensures predictable outcomes.
                    </p>
                    <ul className="space-y-2 text-industrial-gray">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> 95% on-time delivery rate across all projects</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> Advanced project scheduling and monitoring</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-3 flex-shrink-0" /> Transparent communication and progress reporting</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-industrial-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-3xl sm:text-4xl font-black text-white mb-6">
              WE ARE GOOD AT <span className="text-construction-yellow">SOLVING PROBLEMS</span>
            </h2>
            <p className="animate-fade-in text-lg text-gray-300 max-w-3xl mx-auto">
              From the depths of Zimbabwe's mines to expansive agricultural lands, we deliver specialized solutions across every major industrial sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mining Industry */}
            <div className="animate-slide-in-left">
              <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden group cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Massive dump trucks and excavators working in Zimbabwe open pit gold mine" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-8 text-white">
                  <Mountain className="h-12 w-12 text-construction-yellow mb-4" />
                  <h3 className="text-2xl font-bold mb-4">MINING SECTOR</h3>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Gold & Platinum Extraction</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Open-Pit Operations</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Underground Mining</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Environmental Rehabilitation</li>
                  </ul>
                  <Link href="/services/mining">
                    <Button className="w-full bg-construction-yellow text-industrial-black hover:bg-white font-bold">
                      LEARN MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            {/* Construction Industry */}
            <div className="animate-fade-in">
              <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden group cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Modern industrial building construction with steel framework and cranes in Zimbabwe" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-8 text-white">
                  <HardHat className="h-12 w-12 text-construction-yellow mb-4" />
                  <h3 className="text-2xl font-bold mb-4">CONSTRUCTION</h3>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Industrial Facilities</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Commercial Buildings</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Heavy Foundations</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Structural Steelwork</li>
                  </ul>
                  <Link href="/services/construction">
                    <Button className="w-full bg-construction-yellow text-industrial-black hover:bg-white font-bold">
                      LEARN MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            {/* Agriculture Industry */}
            <div className="animate-slide-in-right">
              <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden group cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Large combine harvester and modern agricultural equipment in Zimbabwe farmland" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-8 text-white">
                  <Tractor className="h-12 w-12 text-construction-yellow mb-4" />
                  <h3 className="text-2xl font-bold mb-4">AGRICULTURE</h3>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Irrigation Systems</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Storage Facilities</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Farm Mechanization</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2" /> Infrastructure Development</li>
                  </ul>
                  <Link href="/services/agriculture">
                    <Button className="w-full bg-construction-yellow text-industrial-black hover:bg-white font-bold">
                      LEARN MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
              CLIENT <span className="text-construction-yellow">TESTIMONIALS</span>
            </h2>
            <p className="animate-fade-in text-lg text-industrial-gray max-w-3xl mx-auto">
              Hear from industry leaders who trust Tartech Contracting for their most critical projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-in p-8 bg-white shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-construction-yellow fill-current" />
                  ))}
                </div>
                <p className="text-industrial-gray mb-6 italic">
                  "Tartech delivered our mining facility ahead of schedule and under budget. Their safety standards and technical expertise are unmatched in Zimbabwe."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-industrial-black">JM</span>
                  </div>
                  <div>
                    <div className="font-bold text-industrial-black">James Mukamuri</div>
                    <div className="text-sm text-industrial-gray">Mining Operations Director</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in p-8 bg-white shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-construction-yellow fill-current" />
                  ))}
                </div>
                <p className="text-industrial-gray mb-6 italic">
                  "Outstanding agricultural infrastructure development. Our irrigation systems have increased productivity by 300%. Highly recommended."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-industrial-black">ST</span>
                  </div>
                  <div>
                    <div className="font-bold text-industrial-black">Sarah Tendai</div>
                    <div className="text-sm text-industrial-gray">Agricultural Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in p-8 bg-white shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-construction-yellow fill-current" />
                  ))}
                </div>
                <p className="text-industrial-gray mb-6 italic">
                  "Professional, reliable, and experienced. Tartech built our processing plant to the highest international standards. Exceptional work."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-construction-yellow rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-industrial-black">DC</span>
                  </div>
                  <div>
                    <div className="font-bold text-industrial-black">David Chitongo</div>
                    <div className="text-sm text-industrial-gray">Plant Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-construction-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-in text-4xl sm:text-5xl font-black text-industrial-black mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="animate-fade-in text-xl text-industrial-black mb-8 max-w-3xl mx-auto">
            Get in touch with Zimbabwe's leading industrial contractor. Our expert team is ready to deliver excellence for your next construction, mining, or agricultural project.
          </p>
          <div className="animate-fade-in flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-industrial-black text-construction-yellow hover:bg-gray-800 font-bold text-xl px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Phone className="mr-3 h-6 w-6" />
                GET FREE QUOTE
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-3 border-industrial-black text-industrial-black hover:bg-industrial-black hover:text-construction-yellow font-bold text-xl px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                VIEW ALL SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
