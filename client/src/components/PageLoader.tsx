import { useEffect } from 'react';

interface PageLoaderProps {
  children: React.ReactNode;
  enableHeroAnimation?: boolean;
  onAnimationComplete?: () => void;
}

export default function PageLoader({ 
  children, 
  enableHeroAnimation = false,
  onAnimationComplete
}: PageLoaderProps) {

  useEffect(() => {
    if (!enableHeroAnimation) return;

    console.log('Starting page animations initialization');
    
    const initializeAnimations = async () => {
      try {
        // Dynamic import to avoid initial bundle size
        const { gsap } = await import('@/lib/gsap');
        
        // Find all elements with animation classes
        const heroElements = document.querySelectorAll('[class*="animate-"]');
        console.log('Found hero elements:', heroElements.length);

        if (heroElements.length === 0) {
          console.log('No animated elements found, skipping animation setup');
          onAnimationComplete?.();
          return;
        }

        // Set initial states for animated elements
        const animationElements = {
          delay3: document.querySelectorAll('.animate-slide-up-delay-3'),
          delay4: document.querySelectorAll('.animate-slide-up-delay-4'),
          delay5: document.querySelectorAll('.animate-slide-up-delay-5'),
          card1: document.querySelectorAll('.animate-slide-left-card-1'),
          card2: document.querySelectorAll('.animate-slide-left-card-2'),
          card3: document.querySelectorAll('.animate-slide-left-card-3'),
        };

        // Set initial states
        const allAnimatedElements = [
          ...Array.from(animationElements.delay3),
          ...Array.from(animationElements.delay4),
          ...Array.from(animationElements.delay5),
          ...Array.from(animationElements.card1),
          ...Array.from(animationElements.card2),
          ...Array.from(animationElements.card3),
        ];

        allAnimatedElements.forEach((el, index) => {
          if (el instanceof HTMLElement) {
            console.log(`Setting initial state for element ${index}:`, el.className);
            gsap.set(el, { 
              opacity: 0, 
              y: 50, 
              x: el.className.includes('card') ? -100 : 0 
            });
          }
        });

        console.log('Elements found for animation:', {
          delay3: animationElements.delay3.length,
          delay4: animationElements.delay4.length,
          delay5: animationElements.delay5.length,
          card1: animationElements.card1.length,
          card2: animationElements.card2.length,
          card3: animationElements.card3.length,
        });

        // Create animation timeline
        const timeline = gsap.timeline({ 
          delay: 0.5,
          onComplete: () => {
            console.log('Page animations completed');
            onAnimationComplete?.();
          }
        });

        // Cards animation
        if (animationElements.card1.length > 0) {
          timeline.to(animationElements.card1, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => console.log('Card 1 animated')
          });
        }

        // Paragraph animation (delay-3)
        if (animationElements.delay3.length > 0) {
          timeline.to(animationElements.delay3, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => console.log('Paragraph animated')
          }, "-=0.5");
        }

        // Second card
        if (animationElements.card2.length > 0) {
          timeline.to(animationElements.card2, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => console.log('Card 2 animated')
          }, "-=0.7");
        }

        // Third card  
        if (animationElements.card3.length > 0) {
          timeline.to(animationElements.card3, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => console.log('Card 3 animated')
          }, "-=0.8");
        }

        // Stats animation (delay-4)
        if (animationElements.delay4.length > 0) {
          timeline.to(animationElements.delay4, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => console.log('Stats animated')
          }, "-=0.6");
        }

        // CTA animation (delay-5)
        if (animationElements.delay5.length > 0) {
          timeline.to(animationElements.delay5, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => console.log('CTA animated')
          }, "-=0.4");
        }

      } catch (error) {
        console.error('Error initializing animations:', error);
        onAnimationComplete?.();
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeAnimations, 100);
    
    return () => clearTimeout(timer);
  }, [enableHeroAnimation, onAnimationComplete]);

  return <>{children}</>;
}