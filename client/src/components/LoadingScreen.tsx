import React, { useEffect } from 'react';
import tartechLogo from '@assets/tartech-logo-symbol_1754996014881.png';

interface LoadingScreenProps {
  title: string;
  subtitle?: string;
  onComplete?: () => void;
}

export default function LoadingScreen({ title, subtitle = "TARTECH CONTRACTING", onComplete }: LoadingScreenProps) {
  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(onComplete, 100);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-50 bg-industrial-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 border-4 border-construction-yellow/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-construction-yellow border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 bg-construction-yellow/10 rounded-full flex items-center justify-center">
              <img 
                src={tartechLogo} 
                alt="Tartech Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          <p className="text-construction-yellow/80 text-sm font-medium tracking-wider">{subtitle}</p>
        </div>
        
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
          <div className="w-2 h-2 bg-construction-yellow rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
        </div>
      </div>
    </div>
  );
}
