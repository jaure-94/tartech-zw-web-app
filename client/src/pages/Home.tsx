import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Bolt, Calculator, Mountain, HardHat, Tractor, ArrowRight, ChevronDown, Shield, Award, Users, Clock, CheckCircle, Star, Phone, Drill, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import LoadingScreen from '@/components/LoadingScreen';
import bulldozerImage from '@assets/bulldozer-2195329_1920_1753976237868.jpg';
import tartechLogoSymbol from '@assets/tartech-logo-symbol_1754996014881.png';

export default function Home() {
  const logoSliderRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Tartech Contracting - Engineering Excellence in Harsh Environments';
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    let autoScrollInterval: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      if (logoSliderRef.current) {
        autoScrollInterval = setInterval(() => {
          if (logoSliderRef.current && isAutoScrolling) {
            const container = logoSliderRef.current;
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            if (container.scrollLeft >= maxScroll - 10) {
              // Reset to beginning for seamless loop
              container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              // Scroll by one logo width
              container.scrollBy({ left: 300, behavior: 'smooth' });
            }
          }
        }, 4000); // Slow auto-scroll every 4 seconds
      }
    };

    if (isAutoScrolling) {
      // Delay the start to ensure the component is mounted
      setTimeout(startAutoScroll, 1000);
    }

    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isAutoScrolling]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    import('@/lib/gsap').then(({ gsap, initParallaxEffect }) => {
      // Start hero animations after loading screen is gone and DOM is ready
      setTimeout(() => {
        initHeroAnimations(gsap, initParallaxEffect);
      }, 300);
    });
  };

  const initHeroAnimations = (gsap: any, initParallaxEffect: any) => {
    console.log('Starting hero animations initialization');
    
    // Function to wait for elements to be available
    const waitForElements = (selector: string, maxAttempts = 10): Promise<NodeListOf<Element>> => {
      return new Promise((resolve) => {
        let attempts = 0;
        const checkElements = () => {
          const elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            resolve(elements);
          } else if (attempts < maxAttempts) {
            attempts++;
            console.log(`Attempt ${attempts}: Waiting for elements ${selector}...`);
            setTimeout(checkElements, 100);
          } else {
            console.log(`Failed to find elements ${selector} after ${maxAttempts} attempts`);
            resolve(document.querySelectorAll(selector)); // Return empty list
          }
        };
        checkElements();
      });
    };
    
    // Wait for elements and then animate
    Promise.all([
      waitForElements('.animate-slide-up-delay-3, .animate-slide-up-delay-4, .animate-slide-up-delay-5, .animate-slide-left-card-1, .animate-slide-left-card-2, .animate-slide-left-card-3'),
      waitForElements('.hero-heading-text-1, .hero-heading-text-2, .hero-heading-text-3')
    ]).then(([heroElements, headingElements]) => {
      console.log('Found hero elements:', heroElements.length);
      console.log('Found heading elements:', headingElements.length);
      
      // Create master timeline for hero section animations
      const heroTimeline = gsap.timeline();
    
      heroElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Completely disable CSS animations and set GSAP initial state
        htmlEl.style.setProperty('animation', 'none', 'important');
        htmlEl.style.setProperty('opacity', '0', 'important');
        
        // Set different initial transforms for slide-left vs slide-up elements
        if (htmlEl.className.includes('slide-left') || htmlEl.className.includes('card-')) {
          htmlEl.style.setProperty('transform', 'translateX(50px)', 'important');
        } else {
          htmlEl.style.setProperty('transform', 'translateY(30px)', 'important');
        }
        
        htmlEl.style.setProperty('visibility', 'visible', 'important');
        htmlEl.style.setProperty('transition', 'none', 'important');
      });
      
      // Letter stagger animation for main heading
      const headingTexts = [
        document.querySelector('.hero-heading-text-1'),
        document.querySelector('.hero-heading-text-2'),
        document.querySelector('.hero-heading-text-3')
      ].filter(Boolean);

      headingTexts.forEach((heading) => {
        if (heading && heading.textContent) {
          const chars = heading.textContent.split('');
          heading.innerHTML = chars.map(char => 
            char === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${char}</span>`
          ).join('');
        }
      });

      // Animate heading letters
      headingTexts.forEach((heading, headingIndex) => {
        const chars = heading?.querySelectorAll('span');
        if (chars) {
          chars.forEach((char, charIndex) => {
            heroTimeline.to(char, {
              opacity: 1,
              y: 0,
              duration: 0.05,
              ease: "power2.out"
            }, headingIndex * 0.8 + charIndex * 0.03);
          });
        }
      });

      // Animate other hero elements
      heroElements.forEach((el, index) => {
        heroTimeline.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, 2.5 + index * 0.15);
      });

      // Initialize parallax effect
      if (initParallaxEffect) {
        initParallaxEffect();
      }
    });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('our-expertise');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollLogos = (direction: 'left' | 'right') => {
    if (logoSliderRef.current) {
      // Temporarily disable auto-scroll when user interacts
      setIsAutoScrolling(false);
      
      const container = logoSliderRef.current;
      const scrollAmount = 320; // Width of one logo card plus gap
      const currentScroll = container.scrollLeft;
      
      let targetScroll;
      if (direction === 'left') {
        targetScroll = Math.max(0, currentScroll - scrollAmount);
      } else {
        const maxScroll = container.scrollWidth - container.clientWidth;
        targetScroll = Math.min(maxScroll, currentScroll + scrollAmount);
      }
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });

      // Re-enable auto-scroll after 8 seconds of inactivity
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 8000);
    }
  };

  return (
    <div className="min-h-screen">
      <LoadingScreen 
        isVisible={isLoading}
        onLoadingComplete={handleLoadingComplete}
        duration={2000}
      />
      
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black overflow-hidden">
        {/* Advanced Background Layer */}
        <div className="absolute inset-0">
          {/* Primary Background Image */}
          <img 
            src={bulldozerImage} 
            alt="Heavy industrial excavator operating in challenging terrain, representing Tartech's expertise in harsh environments" 
            className="w-full h-full object-cover opacity-40 parallax-bg"
          />
          
          {/* Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0 opacity-20">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Main Heading with Letter Animation */}
            <div className="mb-8 space-y-2">
              <h1 className="hero-heading-text-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                ENGINEERING
              </h1>
              <h1 className="hero-heading-text-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-construction-yellow">EXCELLENCE</span>
              </h1>
              <h1 className="hero-heading-text-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white/90 leading-tight">
                IN HARSH ENVIRONMENTS
              </h1>
            </div>

            {/* Subheading */}
            <p className="animate-slide-up-delay-3 text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-3xl">
              Delivering world-class construction, mining, and agricultural solutions across Zimbabwe with uncompromising quality and technical expertise.
            </p>

            {/* CTA Buttons */}
            <div className="animate-slide-up-delay-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button 
                onClick={scrollToServices}
                size="lg" 
                className="bg-construction-yellow hover:bg-construction-yellow/90 text-industrial-black font-bold text-lg px-8 py-6 h-auto group transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-2 border-white text-white hover:bg-white hover:text-industrial-black font-bold text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-slide-up-delay-5 absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="our-expertise" className="py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-black text-industrial-black mb-6">
              OUR <span className="text-construction-yellow">EXPERTISE</span>
            </h2>
            <p className="animate-slide-up text-xl text-industrial-gray max-w-4xl mx-auto leading-relaxed">
              Three decades of engineering excellence across construction, mining, and agriculture in Zimbabwe's most challenging environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Mining Card */}
            <Card className="animate-slide-left-card-1 group bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 shadow-lg">
              <CardContent className="p-8 lg:p-10 text-center">
                <div className="mb-6 relative">
                  <div className="bg-gradient-to-br from-construction-yellow to-yellow-400 rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mountain className="h-8 w-8 text-industrial-black" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-industrial-black mb-4">MINING OPERATIONS</h3>
                <p className="text-industrial-gray mb-6 leading-relaxed">
                  Comprehensive mining solutions from exploration to production, including dewatering, excavation, and infrastructure development.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-construction-yellow group-hover:text-industrial-black group-hover:border-construction-yellow transition-all duration-300">
                  <Link href="/services/mining">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Construction Card */}
            <Card className="animate-slide-left-card-2 group bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 shadow-lg">
              <CardContent className="p-8 lg:p-10 text-center">
                <div className="mb-6 relative">
                  <div className="bg-gradient-to-br from-construction-yellow to-yellow-400 rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <HardHat className="h-8 w-8 text-industrial-black" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-industrial-black mb-4">CONSTRUCTION</h3>
                <p className="text-industrial-gray mb-6 leading-relaxed">
                  Commercial and industrial construction projects built to withstand Zimbabwe's harsh climate and demanding operational requirements.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-construction-yellow group-hover:text-industrial-black group-hover:border-construction-yellow transition-all duration-300">
                  <Link href="/services/construction">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Agriculture Card */}
            <Card className="animate-slide-left-card-3 group bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 shadow-lg">
              <CardContent className="p-8 lg:p-10 text-center">
                <div className="mb-6 relative">
                  <div className="bg-gradient-to-br from-construction-yellow to-yellow-400 rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Tractor className="h-8 w-8 text-industrial-black" />
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-industrial-black mb-4">AGRICULTURE</h3>
                <p className="text-industrial-gray mb-6 leading-relaxed">
                  Advanced agricultural infrastructure including irrigation systems, borehole drilling, and farm development across Zimbabwe.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-construction-yellow group-hover:text-industrial-black group-hover:border-construction-yellow transition-all duration-300">
                  <Link href="/services/agriculture">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              WHY CHOOSE <span className="text-construction-yellow">TARTECH</span>
            </h2>
            <p className="animate-slide-up text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Proven track record of delivering exceptional results in Zimbabwe's most demanding industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-slide-up text-center group">
              <div className="bg-construction-yellow rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-industrial-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">30+ Years Experience</h3>
              <p className="text-white/70 leading-relaxed">Three decades of proven expertise in harsh environments</p>
            </div>

            <div className="animate-slide-up text-center group">
              <div className="bg-construction-yellow rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-industrial-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Assured</h3>
              <p className="text-white/70 leading-relaxed">ISO-certified processes and uncompromising standards</p>
            </div>

            <div className="animate-slide-up text-center group">
              <div className="bg-construction-yellow rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-industrial-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-white/70 leading-relaxed">Highly trained professionals with specialized expertise</p>
            </div>

            <div className="animate-slide-up text-center group">
              <div className="bg-construction-yellow rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-industrial-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">On-Time Delivery</h3>
              <p className="text-white/70 leading-relaxed">Consistent project completion within deadlines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-black text-industrial-black mb-6">
              PROJECT <span className="text-construction-yellow">SHOWCASE</span>
            </h2>
            <p className="animate-slide-up text-xl text-industrial-gray max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects across Zimbabwe's industrial landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-up group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Large-scale mining operation with heavy machinery"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-industrial-black mb-2">Gold Mine Dewatering</h3>
                  <p className="text-industrial-gray">Complex dewatering system for 200m deep gold mine operation</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Modern industrial facility construction"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-industrial-black mb-2">Industrial Complex</h3>
                  <p className="text-industrial-gray">50,000m² manufacturing facility with specialized infrastructure</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-up group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Modern agricultural irrigation system"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-industrial-black mb-2">Smart Irrigation</h3>
                  <p className="text-industrial-gray">5,000 hectare precision irrigation system with borehole drilling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-slide-up text-4xl md:text-5xl font-black text-industrial-black mb-6">
              TRUSTED BY <span className="text-construction-yellow">INDUSTRY LEADERS</span>
            </h2>
            <p className="animate-slide-up text-xl text-industrial-gray max-w-4xl mx-auto leading-relaxed">
              Partnering with Zimbabwe's leading companies to deliver exceptional industrial solutions.
            </p>
          </div>

          {/* Logo Slider */}
          <div className="relative">
            <div 
              ref={logoSliderRef}
              className="flex overflow-x-auto scrollbar-hide gap-8 pb-4"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {/* Partner Logos */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80 bg-gray-50 border border-gray-200 rounded-xl p-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <img 
                    src={tartechLogoSymbol}
                    alt={`Industry Partner ${index + 1}`}
                    className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => scrollLogos('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-industrial-black" />
            </button>
            <button 
              onClick={() => scrollLogos('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 text-industrial-black" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-industrial">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="animate-slide-up text-4xl md:text-5xl font-black text-industrial-black mb-6">
              FREQUENTLY ASKED <span className="text-construction-yellow">QUESTIONS</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl border-0 shadow-md">
              <AccordionTrigger className="px-6 py-4 text-left font-bold text-industrial-black hover:no-underline">
                What types of mining operations do you support?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-industrial-gray">
                We provide comprehensive mining support including dewatering systems, excavation, infrastructure development, and specialized equipment services for gold, diamond, and mineral mining operations across Zimbabwe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl border-0 shadow-md">
              <AccordionTrigger className="px-6 py-4 text-left font-bold text-industrial-black hover:no-underline">
                How do you ensure project quality and safety?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-industrial-gray">
                All projects follow ISO-certified quality management systems with rigorous safety protocols. Our experienced team conducts regular inspections and maintains strict compliance with Zimbabwe's industrial safety standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl border-0 shadow-md">
              <AccordionTrigger className="px-6 py-4 text-left font-bold text-industrial-black hover:no-underline">
                What is your typical project timeline?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-industrial-gray">
                Project timelines vary based on scope and complexity. Small agricultural projects may take 2-4 weeks, while major mining and construction projects can range from 3-18 months. We provide detailed timeline estimates during the consultation phase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl border-0 shadow-md">
              <AccordionTrigger className="px-6 py-4 text-left font-bold text-industrial-black hover:no-underline">
                Do you provide ongoing maintenance and support?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-industrial-gray">
                Yes, we offer comprehensive maintenance packages and 24/7 support services for all completed projects. Our maintenance programs ensure optimal performance and extend the lifespan of your industrial installations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            READY TO START YOUR <span className="text-construction-yellow">PROJECT?</span>
          </h2>
          <p className="animate-slide-up text-xl text-white/80 mb-10 leading-relaxed">
            Get in touch with our engineering experts for a consultation and detailed project quote.
          </p>
          <div className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-construction-yellow hover:bg-construction-yellow/90 text-industrial-black font-bold text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Quote
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-industrial-black font-bold text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}