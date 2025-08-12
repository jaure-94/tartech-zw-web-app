import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// Animation utilities
export const initScrollAnimations = () => {
  // Fade in animations
  gsap.utils.toArray('.animate-fade-in').forEach((element: any) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Slide in from left animations
  gsap.utils.toArray('.animate-slide-in-left').forEach((element: any) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Slide in from right animations
  gsap.utils.toArray('.animate-slide-in-right').forEach((element: any) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

export const initNavbarAnimation = () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: {className: "navbar-scrolled", targets: navbar}
    });
  }
};

export const animateServiceCards = () => {
  document.querySelectorAll('.service-card-hover').forEach(card => {
    card.addEventListener('mouseenter', function(this: HTMLElement) {
      gsap.to(this, {duration: 0.3, y: -8, ease: "power2.out"});
    });
    
    card.addEventListener('mouseleave', function(this: HTMLElement) {
      gsap.to(this, {duration: 0.3, y: 0, ease: "power2.out"});
    });
  });
};

export const smoothScrollTo = (target: string) => {
  const element = document.querySelector(target);
  if (element) {
    gsap.to(window, {duration: 1, scrollTo: element, ease: "power2.inOut"});
  }
};

export const initParallaxEffect = () => {
  const heroImage = document.querySelector('.hero-parallax-image');
  if (heroImage) {
    gsap.to(heroImage, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }
};
