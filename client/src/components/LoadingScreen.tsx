import { useEffect, useState } from 'react';
import tartechLogoSymbol from '@assets/tartech-logo-symbol_1755071044733.png';

interface LoadingScreenProps {
  isVisible: boolean;
  onLoadingComplete: () => void;
  duration?: number;
}

export default function LoadingScreen({ isVisible, onLoadingComplete, duration = 2000 }: LoadingScreenProps) {
  useEffect(() => {
    if (!isVisible) return;

    const loadingTimer = setTimeout(() => {
      import('@/lib/gsap').then(({ gsap }) => {
        // Animate loading screen out
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            onLoadingComplete();
          }
        });
      });
    }, duration);

    return () => clearTimeout(loadingTimer);
  }, [isVisible, onLoadingComplete, duration]);

  if (!isVisible) return null;

  return (
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
  );
}