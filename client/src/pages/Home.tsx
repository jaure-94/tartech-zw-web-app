import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Bolt, Calculator, Mountain, HardHat, Tractor, ArrowRight, ChevronDown, Shield, Award, Users, Clock, CheckCircle, Star, Phone, Drill, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollAnimations } from '@/components/ScrollAnimations';
import bulldozerImage from '@assets/bulldozer-2195329_1920_1753976237868.jpg';
import tartechLogoSymbol from '@assets/tartech-logo-symbol_1754996014881.png';

export default function Home() {
  const logoSliderRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Tartech Contracting - Engineering Excellence in Harsh Environments';
    
    // Simulate loading time and then hide loader
    const loadingTimer = setTimeout(() => {
      import('@/lib/gsap').then(({ gsap, initParallaxEffect }) => {
        // Animate loading screen out
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            setIsLoading(false);
            
            // Start hero animations after loading screen is gone and DOM is ready
            setTimeout(() => {
              // Wait for DOM to be fully ready
              if (document.readyState === 'complete') {
                initHeroAnimations(gsap, initParallaxEffect);
              } else {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    initHeroAnimations(gsap, initParallaxEffect);
                  }, 100);
                });
              }
            }, 500);
          }
        });
      });
    }, 2000); // Show loader for 2 seconds

    const initHeroAnimations = (gsap: any, initParallaxEffect: any) => {
      console.log('Starting hero animations initialization');
      
      // Function to wait for elements to be available
      const waitForElements = (selector: string, maxAttempts = 10): Promise<NodeListOf<Element>> => {
        return new Promise((resolve, reject) => {
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
      
      heroElements.forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        console.log(`Setting initial state for element ${index}:`, htmlEl.className);
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
        
        // Remove any animation delay classes to prevent CSS conflicts
        htmlEl.classList.forEach(className => {
          if (className.includes('animate-') && !className.includes('delay') && !className.includes('card-')) {
            htmlEl.classList.remove(className);
          }
        });
      });
      
      // Letter stagger animation for main heading
      const headingTexts = [
        document.querySelector('.hero-heading-text-1'),
        document.querySelector('.hero-heading-text-2'),
        document.querySelector('.hero-heading-text-3')
      ];
      
      console.log('Found heading texts:', headingTexts.map(el => el?.textContent));
      
      headingTexts.forEach((headingText, lineIndex) => {
        if (headingText) {
          // Split text into individual characters
          const text = headingText.textContent || '';
          console.log(`Processing heading ${lineIndex + 1}: "${text}"`);
          const chars = text.split('').map(char => 
            char === ' ' ? '<span class="char-space">&nbsp;</span>' : `<span class="char inline-block">${char}</span>`
          );
          headingText.innerHTML = chars.join('');
        }
      });
      
      // Check if chars were created
      const chars = document.querySelectorAll('.char');
      console.log('Created character spans:', chars.length);
      
      // PHASE 1: First make heading visible, then animate letters
      heroTimeline.set('h1', { opacity: 1 });
      
      heroTimeline.fromTo('.char', 
        {
          opacity: 0,
          y: -60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: "power3.out",
          stagger: {
            amount: 3.0,
            from: "start"
          },
          onComplete: () => {
            console.log('Heading animation completed');
          }
        }
      );
      
      // PHASE 2: Wait for heading to complete, then animate everything else sequentially
      // Re-query elements to ensure they still exist
      const delay3Elements = document.querySelectorAll('.animate-slide-up-delay-3');
      const delay4Elements = document.querySelectorAll('.animate-slide-up-delay-4');
      const delay5Elements = document.querySelectorAll('.animate-slide-up-delay-5');
      const card1Elements = document.querySelectorAll('.animate-slide-left-card-1');
      const card2Elements = document.querySelectorAll('.animate-slide-left-card-2');
      const card3Elements = document.querySelectorAll('.animate-slide-left-card-3');
      
      console.log('Elements found for animation:', {
        delay3: delay3Elements.length,
        delay4: delay4Elements.length,
        delay5: delay5Elements.length,
        card1: card1Elements.length,
        card2: card2Elements.length,
        card3: card3Elements.length
      });
      
      console.log('Card elements found:', {
        card1: card1Elements,
        card2: card2Elements,
        card3: card3Elements
      });
      
      // Debug: Check if cards are being found on mobile vs desktop
      const allCards = document.querySelectorAll('[class*="animate-slide-left-card"]');
      console.log('All card elements found:', allCards.length);
      allCards.forEach((card, index) => {
        console.log(`Card ${index + 1} classes:`, card.className);
      });
      
      // Animate paragraph AND cards simultaneously right after heading completes
      
      // Animate subtitle/paragraph (delay-3) - Start immediately after heading
      if (delay3Elements.length > 0) {
        heroTimeline.fromTo(delay3Elements, 
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => console.log('Paragraph animated')
          },
          "+=0.5" // Start 0.5s after heading completes
        );
      }
      
      // Animate cards at the SAME TIME as paragraph (using same timing label)
      if (card1Elements.length > 0) {
        heroTimeline.fromTo(card1Elements, 
          {
            opacity: 0,
            x: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => console.log('Card 1 animated')
          },
          "-=0.8" // Start at same time as paragraph
        );
      }
      
      if (card2Elements.length > 0) {
        heroTimeline.fromTo(card2Elements, 
          {
            opacity: 0,
            x: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => console.log('Card 2 animated')
          },
          "-=0.6" // Start 0.2s after card 1 (overlapping with paragraph)
        );
      }
      
      if (card3Elements.length > 0) {
        heroTimeline.fromTo(card3Elements, 
          {
            opacity: 0,
            x: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => console.log('Card 3 animated')
          },
          "-=0.4" // Start 0.2s after card 2 (still overlapping with paragraph)
        );
      }
      
      // Animate stats (delay-4) - After paragraph and cards
      if (delay4Elements.length > 0) {
        heroTimeline.fromTo(delay4Elements, 
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => console.log('Stats animated')
          },
          "+=0.3"
        );
      }
      
      // Animate CTA button (delay-5) - After stats
      if (delay5Elements.length > 0) {
        heroTimeline.fromTo(delay5Elements, 
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => console.log('CTA animated')
          },
          "+=0.3"
        );
      }
      
      initParallaxEffect();
      });
    };

    // Auto-scroll functionality
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
      clearTimeout(loadingTimer);
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isAutoScrolling]);

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
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading-screen fixed inset-0 z-50 bg-industrial-black flex items-center justify-center">
          <div className="text-center">
            {/* Animated Logo/Brand */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-4 border-construction-yellow/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-construction-yellow border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-2 bg-construction-yellow/10 rounded-full flex items-center justify-center p-4">
                  <img 
                    src={tartechLogoSymbol} 
                    alt="Tartech Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">TARTECH</h2>
              <p className="text-construction-yellow/80 text-sm font-medium tracking-wider">CONTRACTING</p>
            </div>
            
            {/* Loading Animation */}
            <div className="flex items-center justify-center space-x-1">
              <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
              <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
              <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
            </div>
            
            <p className="text-gray-400 text-sm mt-4 font-light">Loading...</p>
          </div>
        </div>
      )}
      
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center bg-gradient-to-br from-industrial-black via-gray-900 to-industrial-black overflow-hidden">
        {/* Advanced Background Layer */}
        <div className="absolute inset-0">
          {/* Primary Background Image */}
          <img 
            src={bulldozerImage} 
            alt="Heavy industrial bulldozer and excavator equipment at construction site with dramatic sky" 
            className="hero-parallax-image w-full h-[120%] object-cover opacity-35 animate-zoom-in"
            onError={(e) => {
              e.currentTarget.src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080";
            }}
          />
          
          {/* Enhanced Dynamic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 animate-fade-in"></div>
          
          {/* Subtle Depth Layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
          
          {/* Ultra-Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-1">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.08" className="text-white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>
          
          {/* Minimal Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 bg-construction-yellow/20 rounded-full animate-float-slow"></div>
            <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-white/15 rounded-full animate-float-medium"></div>
            <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-construction-yellow/15 rounded-full animate-float-fast"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white/12 rounded-full animate-float-slow"></div>
            <div className="absolute top-1/2 left-2/3 w-0.5 h-0.5 bg-construction-yellow/25 rounded-full animate-float-medium"></div>
          </div>
          
          {/* Minimal Accent Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-16 h-px bg-gradient-to-r from-construction-yellow/15 to-transparent animate-slide-right"></div>
            <div className="absolute bottom-1/3 right-0 w-12 h-px bg-gradient-to-l from-white/10 to-transparent animate-slide-left"></div>
          </div>
        </div>
        
        {/* Cinematic Content Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
            
            {/* Main Content Section - Full width on mobile/tablet */}
            <div className="w-full lg:col-span-7 flex flex-col space-y-8 md:space-y-10 lg:space-y-12 pb-20 md:pb-24 lg:pb-0">

              
              {/* Enhanced Headlines Structure */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="relative pt-16 pb-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight opacity-0">
                      <span className="hero-heading-text-1 block text-white font-black mb-2">
                        INDUSTRIAL
                      </span>
                      <span className="hero-heading-text-2 block text-construction-yellow drop-shadow-2xl filter brightness-110 font-black mb-2">
                        EXCELLENCE
                      </span>
                      <span className="hero-heading-text-3 block text-white/85 font-black">
                        IN ZIMBABWE
                      </span>
                    </h1>
                    <div className="absolute -bottom-0.5 left-0 w-24 h-0.5 bg-construction-yellow/25 rounded-full"></div>
                    <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-construction-yellow/90 via-construction-yellow to-construction-yellow/90 animate-expand-width rounded-full shadow-lg shadow-construction-yellow/40"></div>
                  </div>
                </div>
                
                <div className="animate-slide-up-delay-3 space-y-6 max-w-3xl">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-light leading-tight tracking-wide">
                    Leading contractor delivering <span className="font-semibold text-white/95">world-class solutions</span> across Zimbabwe's most demanding industrial sectors
                  </h2>
                  
                  <div className="space-y-5">
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300/90 font-light leading-relaxed max-w-2xl">
                      Over a decade of unwavering commitment to safety, innovation, and excellence across multiple industrial domains.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center text-construction-yellow font-medium text-sm px-3 py-1.5 bg-gradient-to-r from-construction-yellow/8 to-construction-yellow/12 rounded-lg border border-construction-yellow/15">
                        <div className="w-1.5 h-1.5 bg-construction-yellow rounded-full mr-2"></div>
                        Construction
                      </span>
                      <span className="inline-flex items-center text-construction-yellow font-medium text-sm px-3 py-1.5 bg-gradient-to-r from-construction-yellow/8 to-construction-yellow/12 rounded-lg border border-construction-yellow/15">
                        <div className="w-1.5 h-1.5 bg-construction-yellow rounded-full mr-2"></div>
                        Mining
                      </span>
                      <span className="inline-flex items-center text-construction-yellow font-medium text-sm px-3 py-1.5 bg-gradient-to-r from-construction-yellow/8 to-construction-yellow/12 rounded-lg border border-construction-yellow/15">
                        <div className="w-1.5 h-1.5 bg-construction-yellow rounded-full mr-2"></div>
                        Agriculture
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Premium Statistics Display */}
              <div className="animate-slide-up-delay-4 py-4 md:py-6">
                <div className="bg-gradient-to-r from-white/6 to-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/15 p-4 md:p-6 shadow-2xl">
                  <div className="grid grid-cols-3 gap-3 md:gap-6">
                    <div className="text-center group cursor-default">
                      <div className="relative">
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-construction-yellow mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">20+</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-0.5 bg-gradient-to-r from-construction-yellow/70 to-construction-yellow/90 rounded-full group-hover:w-8 md:group-hover:w-12 transition-all duration-500 shadow-md shadow-construction-yellow/25"></div>
                      </div>
                      <div className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-300 uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold mt-2 md:mt-3">Projects Delivered</div>
                    </div>
                    <div className="text-center group cursor-default">
                      <div className="relative">
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-construction-yellow mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">100%</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-0.5 bg-gradient-to-r from-construction-yellow/70 to-construction-yellow/90 rounded-full group-hover:w-8 md:group-hover:w-12 transition-all duration-500 shadow-md shadow-construction-yellow/25"></div>
                      </div>
                      <div className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-300 uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold mt-2 md:mt-3">Safety Record</div>
                    </div>
                    <div className="text-center group cursor-default">
                      <div className="relative">
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-construction-yellow mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">10+</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-0.5 bg-gradient-to-r from-construction-yellow/70 to-construction-yellow/90 rounded-full group-hover:w-8 md:group-hover:w-12 transition-all duration-500 shadow-md shadow-construction-yellow/25"></div>
                      </div>
                      <div className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-300 uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold mt-2 md:mt-3">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Premium Industrial CTA Button - Flex Column Item */}
              <div className="animate-slide-up-delay-5 flex justify-center md:justify-start">
                <Link href="/contact">
                  <button className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-9 md:py-4 lg:px-10 lg:py-5 text-base sm:text-lg md:text-xl lg:text-xl font-black text-industrial-black bg-construction-yellow rounded-xl border-2 border-construction-yellow overflow-hidden shadow-2xl hover:shadow-construction-yellow/40 transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-construction-yellow/30 hover:border-white/20">
                    
                    {/* Animated Background Layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-construction-yellow via-safety-orange to-construction-yellow bg-size-200 animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Industrial Grid Pattern */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 20 20">
                        <defs>
                          <pattern id="btn-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-industrial-black"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#btn-grid)" />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="relative flex items-center justify-center z-10">
                      <Phone className="mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7 group-hover:rotate-12 group-hover:text-white transition-all duration-500" />
                      <span className="tracking-wider font-black group-hover:text-white transition-colors duration-300">GET IN TOUCH</span>
                      
                      {/* Arrow indicator */}
                      <div className="ml-2 w-0 group-hover:w-5 transition-all duration-500 overflow-hidden">
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 text-industrial-black group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Industrial accent lines */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-industrial-black/20 to-transparent group-hover:via-white/40 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-industrial-black/20 to-transparent group-hover:via-white/40 transition-all duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Visual Excellence */}
            <div className="lg:col-span-5 relative hidden lg:block">
              {/* Premium Feature Cards */}
              <div className="space-y-4">
                {/* Safety Card */}
                <div className="animate-slide-left-card-1 bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:from-white/12 hover:to-white/8 hover:border-construction-yellow/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-construction-yellow/10">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-construction-yellow/15 rounded-2xl border border-construction-yellow/30 group-hover:bg-construction-yellow/25 transition-all duration-300">
                      <Shield className="w-7 h-7 text-construction-yellow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">Zero Accident Policy</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Industry-leading safety protocols and risk management</p>
                    </div>
                  </div>
                </div>
                
                {/* Innovation Card */}
                <div className="animate-slide-left-card-2 bg-gradient-to-r from-white/6 to-white/3 backdrop-blur-xl border border-white/15 rounded-2xl p-6 hover:from-white/10 hover:to-white/6 hover:border-safety-orange/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-safety-orange/10 ml-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-safety-orange/15 rounded-2xl border border-safety-orange/30 group-hover:bg-safety-orange/25 transition-all duration-300">
                      <Award className="w-7 h-7 text-safety-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">Certified Excellence</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">ISO & NSSA certified quality operations</p>
                    </div>
                  </div>
                </div>
                
                {/* 24/7 Support Card */}
                <div className="animate-slide-left-card-3 bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:from-white/12 hover:to-white/8 hover:border-construction-yellow/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-construction-yellow/10">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-construction-yellow/15 rounded-2xl border border-construction-yellow/30 group-hover:bg-construction-yellow/25 transition-all duration-300">
                      <Clock className="w-7 h-7 text-construction-yellow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">Always Available</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">Round-the-clock technical support coverage</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sophisticated Ambient Effects */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-radial from-construction-yellow/4 via-construction-yellow/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-radial from-white/3 via-construction-yellow/3 to-transparent rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-1/3 -right-12 w-32 h-32 bg-gradient-radial from-construction-yellow/3 to-transparent rounded-full blur-xl animate-pulse"></div>
              
              {/* Depth Enhancement */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Positioned for flex-column layout */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-8 left-1/2 transform -translate-x-1/2 text-center group cursor-pointer" onClick={scrollToServices}>
          <div className="animate-bounce">
            <div className="text-white/75 text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 uppercase tracking-[0.25em] group-hover:text-construction-yellow transition-colors duration-300">Discover Our Expertise</div>
            <div className="relative">
              <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-construction-yellow/50 rounded-full mx-auto relative group-hover:border-construction-yellow/80 transition-all duration-300 shadow-lg shadow-construction-yellow/10">
                <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-construction-yellow/70 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 group-hover:bg-construction-yellow animate-scroll-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Overview */}
      <section id="our-expertise" className="py-20 bg-light-industrial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
              OUR <span className="text-construction-yellow">EXPERTISE</span>
            </h2>
            <p className="animate-fade-in text-sm sm:text-base md:text-lg text-industrial-gray max-w-3xl mx-auto leading-relaxed">
              Over a decade of delivering industrial-grade solutions across Zimbabwe's most demanding sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Borehole Drilling Card */}
            <Card className="service-card-hover animate-fade-in bg-gradient-to-br from-white to-gray-50/30 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:border-construction-yellow/60 hover:shadow-construction-yellow/20 transition-all duration-500 backdrop-blur-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Industrial borehole drilling rig equipment in operation" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <CardContent className="p-6">
                <div className="text-construction-yellow text-5xl mb-3">
                  <Drill className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-industrial-black mb-3">BOREHOLE DRILLING</h3>
                <p className="text-industrial-gray mb-5">
                  Professional borehole drilling services with rotary air percussion and mud drilling techniques for water access and industrial applications.
                </p>
                <Link href="/services">
                  <span className="inline-flex items-center text-construction-yellow font-bold hover:text-safety-orange transition-colors duration-300 cursor-pointer">
                    LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            {/* Mining Card */}
            <Card className="service-card-hover animate-fade-in bg-gradient-to-br from-white to-gray-50/30 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:border-construction-yellow/60 hover:shadow-construction-yellow/20 transition-all duration-500 backdrop-blur-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Large mining excavator operating in open pit mine" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <CardContent className="p-6">
                <div className="text-construction-yellow text-5xl mb-3">
                  <Mountain className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-industrial-black mb-3">MINING OPERATIONS</h3>
                <p className="text-industrial-gray mb-5">
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
            <Card className="service-card-hover animate-fade-in bg-gradient-to-br from-white to-gray-50/30 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:border-construction-yellow/60 hover:shadow-construction-yellow/20 transition-all duration-500 backdrop-blur-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Construction site with tower cranes and building framework" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <CardContent className="p-6">
                <div className="text-construction-yellow text-5xl mb-3">
                  <HardHat className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-industrial-black mb-3">CONSTRUCTION</h3>
                <p className="text-industrial-gray mb-5">
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
            <Card className="service-card-hover animate-fade-in bg-gradient-to-br from-white to-gray-50/30 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:border-construction-yellow/60 hover:shadow-construction-yellow/20 transition-all duration-500 backdrop-blur-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Large agricultural tractor working in expansive field" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <CardContent className="p-6">
                <div className="text-construction-yellow text-5xl mb-3">
                  <Tractor className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-industrial-black mb-3">AGRICULTURE</h3>
                <p className="text-industrial-gray mb-5">
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
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
              WHY CHOOSE <span className="text-construction-yellow">TARTECH</span>
            </h2>
            <p className="animate-fade-in text-sm sm:text-base md:text-lg text-industrial-gray max-w-3xl mx-auto leading-relaxed">
              Three decades of excellence in Zimbabwe's most demanding industrial environments, backed by cutting-edge equipment and unwavering commitment to safety.
            </p>
          </div>
          
          <div className="animate-fade-in">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="safety" className="border border-gray-200 rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 bg-gradient-to-r from-white to-gray-50 hover:from-construction-yellow/10 hover:to-construction-yellow/5 transition-all duration-300 text-left [&[data-state=open]]:bg-construction-yellow/10">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-industrial-black" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base md:text-xl font-bold text-industrial-black">SAFETY FIRST</h3>
                      <p className="text-xs sm:text-sm text-industrial-gray">Our commitment to zero-incident operations</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-5 md:px-8 md:pb-6 bg-white">
                  <div className="pl-8 sm:pl-12 md:pl-16 space-y-3 md:space-y-4">
                    <p className="text-sm md:text-base text-industrial-gray leading-relaxed">
                      Zero-incident safety record with comprehensive training and international safety protocols. Our commitment to safety goes beyond compliance – it's ingrained in every aspect of our operations.
                    </p>
                    <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-industrial-gray">
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> International safety certifications and standards</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> Regular safety training and equipment updates</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> 24/7 safety monitoring and incident prevention</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="excellence" className="border border-gray-200 rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 bg-gradient-to-r from-white to-gray-50 hover:from-construction-yellow/10 hover:to-construction-yellow/5 transition-all duration-300 text-left [&[data-state=open]]:bg-construction-yellow/10">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-industrial-black" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base md:text-xl font-bold text-industrial-black">PROVEN EXCELLENCE</h3>
                      <p className="text-xs sm:text-sm text-industrial-gray">Award-winning quality and innovation</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-5 md:px-8 md:pb-6 bg-white">
                  <div className="pl-8 sm:pl-12 md:pl-16 space-y-3 md:space-y-4">
                    <p className="text-sm md:text-base text-industrial-gray leading-relaxed">
                      Industry awards and certifications recognizing our commitment to quality and innovation. Our excellence is measured not just by what we build, but how we build it.
                    </p>
                    <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-industrial-gray">
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> Zimbabwe Engineering Excellence Awards</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> ISO 9001 Quality Management certification</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> Industry leadership in sustainable practices</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="team" className="border border-gray-200 rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 bg-gradient-to-r from-white to-gray-50 hover:from-construction-yellow/10 hover:to-construction-yellow/5 transition-all duration-300 text-left [&[data-state=open]]:bg-construction-yellow/10">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-industrial-black" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base md:text-xl font-bold text-industrial-black">EXPERT TEAM</h3>
                      <p className="text-xs sm:text-sm text-industrial-gray">Decades of specialized experience</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-5 md:px-8 md:pb-6 bg-white">
                  <div className="pl-8 sm:pl-12 md:pl-16 space-y-3 md:space-y-4">
                    <p className="text-sm md:text-base text-industrial-gray leading-relaxed">
                      Highly skilled professionals with decades of experience in harsh industrial environments. Our team combines local knowledge with international expertise.
                    </p>
                    <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-industrial-gray">
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> Certified engineers and project managers</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> Specialized heavy equipment operators</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> Continuous professional development programs</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery" className="border border-gray-200 rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <AccordionTrigger className="px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 bg-gradient-to-r from-white to-gray-50 hover:from-construction-yellow/10 hover:to-construction-yellow/5 transition-all duration-300 text-left [&[data-state=open]]:bg-construction-yellow/10">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-construction-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-industrial-black" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base md:text-xl font-bold text-industrial-black">ON-TIME DELIVERY</h3>
                      <p className="text-xs sm:text-sm text-industrial-gray">Reliable project completion</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-5 md:px-8 md:pb-6 bg-white">
                  <div className="pl-8 sm:pl-12 md:pl-16 space-y-3 md:space-y-4">
                    <p className="text-sm md:text-base text-industrial-gray leading-relaxed">
                      Consistent project completion within deadlines and budget constraints. Our proven project management methodology ensures predictable outcomes.
                    </p>
                    <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-industrial-gray">
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> 95% on-time delivery rate across all projects</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> Advanced project scheduling and monitoring</li>
                      <li className="flex items-center"><CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-construction-yellow mr-2 md:mr-3 flex-shrink-0" /> Transparent communication and progress reporting</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
              WE ARE GOOD AT <span className="text-construction-yellow">SOLVING PROBLEMS</span>
            </h2>
            <p className="animate-fade-in text-sm sm:text-base md:text-lg text-industrial-gray max-w-3xl mx-auto leading-relaxed">
              From the depths of Zimbabwe's mines to expansive agricultural lands, we deliver specialized solutions across every major industrial sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Mining Industry */}
            <div className="animate-slide-in-left md:col-span-1 xl:col-span-1">
              <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden group cursor-pointer h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Massive dump trucks and excavators working in Zimbabwe open pit gold mine" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-6 lg:p-8 text-white flex-1 flex flex-col">
                  <Mountain className="h-12 w-12 text-construction-yellow mb-2" />
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">MINING SECTOR</h3>
                  <ul className="space-y-2 text-gray-200 mb-6 flex-1">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Gold & Platinum Extraction</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Open-Pit Operations</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Underground Mining</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Environmental Rehabilitation</li>
                  </ul>
                  <Link href="/services/mining" className="mt-auto">
                    <Button className="w-full bg-construction-yellow text-industrial-black hover:bg-white font-bold">
                      LEARN MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            {/* Construction Industry */}
            <div className="animate-fade-in md:col-span-1 xl:col-span-1">
              <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden group cursor-pointer h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Modern industrial building construction with steel framework and cranes in Zimbabwe" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-6 lg:p-8 text-white flex-1 flex flex-col">
                  <HardHat className="h-12 w-12 text-construction-yellow mb-2" />
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">CONSTRUCTION</h3>
                  <ul className="space-y-2 text-gray-200 mb-6 flex-1">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Industrial Facilities</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Commercial Buildings</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Heavy Foundations</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Structural Steelwork</li>
                  </ul>
                  <Link href="/services/construction" className="mt-auto">
                    <Button className="w-full bg-construction-yellow text-industrial-black hover:bg-white font-bold">
                      LEARN MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            {/* Agriculture Industry */}
            <div className="animate-slide-in-right md:col-span-2 xl:col-span-1">
              <Card className="bg-white/10 backdrop-blur-sm border-0 overflow-hidden group cursor-pointer h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                    alt="Large combine harvester and modern agricultural equipment in Zimbabwe farmland" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-6 lg:p-8 text-white flex-1 flex flex-col">
                  <Tractor className="h-12 w-12 text-construction-yellow mb-2" />
                  <h3 className="text-xl lg:text-2xl font-bold mb-4">AGRICULTURE</h3>
                  <ul className="space-y-2 text-gray-200 mb-6 flex-1">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Irrigation Systems</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Storage Facilities</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Farm Mechanization</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-construction-yellow mr-2 flex-shrink-0" /> Infrastructure Development</li>
                  </ul>
                  <Link href="/services/agriculture" className="mt-auto">
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
          <div className="text-center mb-12 md:mb-16">
            <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
              CLIENT <span className="text-construction-yellow">TESTIMONIALS</span>
            </h2>
            <p className="animate-fade-in text-sm sm:text-base md:text-lg text-industrial-gray max-w-3xl mx-auto leading-relaxed">
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

      {/* Trusted Clients Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
              TRUSTED BY <span className="text-construction-yellow">INDUSTRY LEADERS</span>
            </h2>
            <p className="animate-fade-in text-sm sm:text-base md:text-lg text-industrial-gray max-w-2xl mx-auto leading-relaxed">
              Partnering with Zimbabwe's most respected organizations across public and private sectors
            </p>
          </div>
          
          {/* Client Logos Slider */}
          <div className="relative">
            {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
            <button 
              onClick={() => scrollLogos('left')}
              className="hidden sm:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 hover:border-construction-yellow/50 rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
              aria-label="Scroll logos left"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-industrial-black group-hover:text-construction-yellow transition-colors duration-300" />
            </button>
            
            <button 
              onClick={() => scrollLogos('right')}
              className="hidden sm:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 hover:border-construction-yellow/50 rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
              aria-label="Scroll logos right"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-industrial-black group-hover:text-construction-yellow transition-colors duration-300" />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-hidden">
              <div 
                ref={logoSliderRef}
                className="flex space-x-4 sm:space-x-6 items-center py-6 sm:py-8 px-4 sm:px-8 md:px-16 lg:px-20 overflow-x-scroll scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
              {/* City of Harare */}
              <div className="flex-shrink-0 group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-48 sm:w-60 md:w-72 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center border border-gray-100 group-hover:border-construction-yellow/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-industrial-black font-black text-sm sm:text-lg md:text-xl">CH</span>
                  </div>
                  <h3 className="text-industrial-black font-bold text-sm sm:text-base md:text-lg text-center">City of Harare</h3>
                </div>
              </div>
              
              {/* City of Marondera */}
              <div className="flex-shrink-0 group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-48 sm:w-60 md:w-72 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center border border-gray-100 group-hover:border-construction-yellow/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-industrial-black font-black text-sm sm:text-lg md:text-xl">CM</span>
                  </div>
                  <h3 className="text-industrial-black font-bold text-sm sm:text-base md:text-lg text-center">City of Marondera</h3>
                </div>
              </div>
              
              {/* Bikita Minerals */}
              <div className="flex-shrink-0 group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-48 sm:w-60 md:w-72 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center border border-gray-100 group-hover:border-construction-yellow/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Drill className="text-industrial-black h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-industrial-black font-bold text-sm sm:text-base md:text-lg text-center">Bikita Minerals</h3>
                </div>
              </div>
              
              {/* Ministry of Transport */}
              <div className="flex-shrink-0 group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-48 sm:w-60 md:w-72 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center border border-gray-100 group-hover:border-construction-yellow/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-industrial-black font-black text-xs sm:text-sm md:text-sm">MOT</span>
                  </div>
                  <h3 className="text-industrial-black font-bold text-xs sm:text-sm md:text-lg text-center leading-tight">Min of Transport<br/>Department of Roads</h3>
                </div>
              </div>
              
              {/* Freda Rebecca Mines */}
              <div className="flex-shrink-0 group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-48 sm:w-60 md:w-72 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center border border-gray-100 group-hover:border-construction-yellow/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mountain className="text-industrial-black h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-industrial-black font-bold text-sm sm:text-base md:text-lg text-center">Freda Rebecca Mines</h3>
                </div>
              </div>
              
              {/* Bindura Nickel Corporation */}
              <div className="flex-shrink-0 group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-48 sm:w-60 md:w-72 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center border border-gray-100 group-hover:border-construction-yellow/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-industrial-black font-black text-xs sm:text-sm md:text-sm">BNC</span>
                  </div>
                  <h3 className="text-industrial-black font-bold text-xs sm:text-sm md:text-lg text-center leading-tight">Bindura Nickel<br/>Corporation</h3>
                </div>
              </div>
              
              {/* Khaya Cement */}
              <div className="flex-shrink-0 group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-48 sm:w-60 md:w-72 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center border border-gray-100 group-hover:border-construction-yellow/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <HardHat className="text-industrial-black h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-industrial-black font-bold text-sm sm:text-base md:text-lg text-center">Khaya Cement</h3>
                </div>
              </div>
              
              {/* Zimplats */}
              <div className="flex-shrink-0 group">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-48 sm:w-60 md:w-72 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center border border-gray-100 group-hover:border-construction-yellow/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-construction-yellow to-construction-yellow/80 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-industrial-black font-black text-sm sm:text-lg md:text-xl">ZP</span>
                  </div>
                  <h3 className="text-industrial-black font-bold text-sm sm:text-base md:text-lg text-center">Zimplats</h3>
                </div>
              </div>

            </div>
            </div>
            
            {/* Gradient Overlays for Smooth Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 lg:py-24 bg-construction-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-industrial-black mb-4 md:mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="animate-fade-in text-sm sm:text-base md:text-lg lg:text-xl text-industrial-black mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Get in touch with Zimbabwe's leading industrial contractor. Our expert team is ready to deliver excellence for your next construction, mining, or agricultural project.
          </p>
          <div className="animate-fade-in flex justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-industrial-black text-construction-yellow hover:bg-gray-800 font-bold text-sm sm:text-base md:text-lg lg:text-xl px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Phone className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                GET IN TOUCH
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
