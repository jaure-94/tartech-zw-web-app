import { useEffect } from 'react';
import { initScrollAnimations, initNavbarAnimation, animateServiceCards } from '@/lib/gsap';

export function ScrollAnimations() {
  useEffect(() => {
    // Initialize all scroll animations
    initScrollAnimations();
    initNavbarAnimation();
    animateServiceCards();

    // Cleanup on unmount
    return () => {
      // GSAP automatically handles cleanup
    };
  }, []);

  return null;
}
