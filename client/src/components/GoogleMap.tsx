import { useEffect, useRef } from 'react';
import tartechLogoSymbol from '@assets/tartech-logo-symbol_1755071044733.png';

interface GoogleMapProps {
  address: string;
  className?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export function GoogleMap({ address, className = "" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initializeMap();
      return;
    }

    // Set up global callback
    window.initMap = initializeMap;

    const showFallbackMap = () => {
      if (mapRef.current) {
        const isMobile = window.innerWidth < 768;
        mapRef.current.innerHTML = `
          <div class="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center" style="min-height: 250px;">
            <div class="flex flex-col items-center justify-center h-full p-${isMobile ? '3' : '4 sm:p-6 md:p-8'} text-center max-w-${isMobile ? 'xs' : 'sm'}">
              <div class="w-${isMobile ? '10 h-10' : '12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20'} bg-construction-yellow rounded-full flex items-center justify-center mb-${isMobile ? '2' : '3 sm:mb-4 md:mb-6'}">
                <svg class="w-${isMobile ? '5 h-5' : '6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'} text-industrial-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 class="font-bold text-${isMobile ? 'sm' : 'base sm:text-lg md:text-xl'} text-industrial-black mb-${isMobile ? '1' : '1 sm:mb-2 md:mb-3'}">Tartech Contracting</h3>
              <p class="text-${isMobile ? 'xs' : 'xs sm:text-sm md:text-base'} text-gray-600 mb-${isMobile ? '2' : '2 sm:mb-3 md:mb-4'} leading-tight">6 Beryl Road, Msasa<br>Harare, Zimbabwe</p>
              <div class="space-y-${isMobile ? '0.5' : '1 sm:space-y-2'} text-${isMobile ? 'xs' : 'xs sm:text-sm'} text-gray-500 mb-${isMobile ? '3' : '3 sm:mb-4 md:mb-6'}">
                <p>📍 Msasa Industrial Area</p>
                <p>🚗 Major highway access</p>
              </div>
              <a 
                href="https://www.google.com/maps/search/6+beryl+road+msasa+harare+zimbabwe" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center px-${isMobile ? '3 py-2' : '4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3'} bg-construction-yellow text-industrial-black text-${isMobile ? 'xs' : 'xs sm:text-sm md:text-base'} font-medium rounded-lg hover:bg-yellow-500 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg class="w-${isMobile ? '3 h-3' : '3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5'} mr-${isMobile ? '1' : '1 sm:mr-2 md:mr-3'}" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                ${isMobile ? 'Open Map' : 'Open in Google Maps'}
              </a>
            </div>
          </div>
        `;
      }
    };

    // Load Google Maps API through server endpoint
    fetch('/api/maps-config')
      .then(response => response.json())
      .then(data => {
        if (!data.apiKey) {
          throw new Error('No API key provided');
        }
        
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${data.apiKey}&callback=initMap&libraries=places&loading=async`;
        script.async = true;
        script.defer = true;
        
        script.onerror = () => {
          console.error('Failed to load Google Maps API');
          showFallbackMap();
        };
        
        document.head.appendChild(script);
      })
      .catch(error => {
        console.error('Failed to get Maps API key:', error);
        showFallbackMap();
      });

    function initializeMap() {
      if (!mapRef.current) return;
      
      if (!window.google || !window.google.maps) {
        console.error('Google Maps API not loaded');
        showFallbackMap();
        return;
      }

      try {
        // Default coordinates for Harare, Zimbabwe as fallback
        const defaultLocation = { lat: -17.8292, lng: 31.0522 };

        // Create map with default location
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 15,
          center: defaultLocation,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#2d2d2d" }]
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#eeeeee" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#c9c9c9" }]
            }
          ],
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true
        });

        // Create geocoder
        const geocoder = new window.google.maps.Geocoder();
        
        // Geocode the address
        geocoder.geocode({ address: address }, (results: any, status: any) => {
          if (status === 'OK' && results[0]) {
            const location = results[0].geometry.location;
            map.setCenter(location);
            
            // Create custom marker
            const marker = new window.google.maps.Marker({
              position: location,
              map: map,
              title: 'Tartech Contracting',
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#FFD700',
                fillOpacity: 1,
                strokeColor: '#2d2d2d',
                strokeWeight: 2
              }
            });

            // Create info window with mobile-responsive content
            const isMobile = window.innerWidth < 768;
            
            const infoWindow = new window.google.maps.InfoWindow({
              maxWidth: isMobile ? 200 : 320,
              disableAutoPan: false,
              content: `
                <div style="padding: ${isMobile ? '6px' : '12px'}; width: ${isMobile ? '180px' : '300px'}; text-align: ${isMobile ? 'left' : 'center'}; position: relative;">
                  <div style="display: flex; align-items: flex-start; gap: ${isMobile ? '6px' : '8px'};">
                    <img src="${tartechLogoSymbol}" alt="Tartech Logo" style="width: ${isMobile ? '20px' : '32px'}; height: ${isMobile ? '20px' : '32px'}; flex-shrink: 0; margin-top: 2px;" />
                    <div style="flex: 1; min-width: 0;">
                      <h3 style="font-weight: bold; font-size: ${isMobile ? '12px' : '16px'}; color: #333; margin: 0 0 ${isMobile ? '2px' : '4px'} 0; line-height: 1.2; overflow: hidden;">Tartech Contracting</h3>
                      <p style="color: #666; font-size: ${isMobile ? '10px' : '14px'}; margin: 0 0 ${isMobile ? '2px' : '4px'} 0; line-height: 1.2; word-wrap: break-word;">6 Beryl Road, Msasa<br>Harare, Zimbabwe</p>
                      <div style="font-size: ${isMobile ? '9px' : '12px'}; color: #999;">
                        <span>Industrial Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              `
            });

            // Add click event to marker
            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });

            // Add styling and functionality for info window close button
            const styleInfoWindow = () => {
              setTimeout(() => {
                // Look for all possible close button selectors
                const closeButtonSelectors = [
                  'button[title="Close"]',
                  '.gm-ui-hover-effect',
                  '[data-value="Close"]',
                  '.gm-control-active',
                  'img[src*="close"]',
                  '.gm-infowindow button'
                ];
                
                let closeButton: HTMLElement | null = null;
                
                // Try each selector
                for (const selector of closeButtonSelectors) {
                  const elements = document.querySelectorAll(selector);
                  for (let i = 0; i < elements.length; i++) {
                    const element = elements[i] as HTMLElement;
                    // Check if it's likely a close button
                    if (element.title?.toLowerCase().includes('close') || 
                        element.getAttribute('data-value') === 'Close' ||
                        element.innerHTML.includes('×') ||
                        element.innerHTML.includes('close')) {
                      closeButton = element;
                      break;
                    }
                  }
                  if (closeButton) break;
                }
                
                console.log('Found close button:', closeButton);
                
                if (closeButton) {
                  // Style the button with proper centering
                  closeButton.style.position = 'absolute';
                  closeButton.style.right = isMobile ? '8px' : '10px';
                  closeButton.style.top = isMobile ? '6px' : '8px';
                  closeButton.style.width = isMobile ? '20px' : '24px';
                  closeButton.style.height = isMobile ? '20px' : '24px';
                  closeButton.style.opacity = '0.9';
                  closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  closeButton.style.borderRadius = '50%';
                  closeButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
                  closeButton.style.cursor = 'pointer';
                  closeButton.style.zIndex = '1001';
                  closeButton.style.border = '1px solid #ccc';
                  closeButton.style.display = 'flex';
                  closeButton.style.alignItems = 'center';
                  closeButton.style.justifyContent = 'center';
                  closeButton.style.fontSize = isMobile ? '14px' : '16px';
                  closeButton.style.fontWeight = 'bold';
                  closeButton.style.lineHeight = '1';
                  closeButton.style.textAlign = 'center';
                  
                  // Remove existing event listeners and add new ones
                  closeButton.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Close button clicked');
                    infoWindow.close();
                  };
                  
                  // Also try addEventListener
                  closeButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Close button event listener triggered');
                    infoWindow.close();
                  });
                } else {
                  console.warn('Close button not found, trying alternative approach');
                  // Add our own close button if we can't find the default one
                  const infoContent = document.querySelector('.gm-style-iw-d');
                  if (infoContent) {
                    const customCloseBtn = document.createElement('button');
                    customCloseBtn.innerHTML = '×';
                    customCloseBtn.style.position = 'absolute';
                    customCloseBtn.style.right = isMobile ? '8px' : '10px';
                    customCloseBtn.style.top = isMobile ? '6px' : '8px';
                    customCloseBtn.style.width = isMobile ? '20px' : '24px';
                    customCloseBtn.style.height = isMobile ? '20px' : '24px';
                    customCloseBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    customCloseBtn.style.border = '1px solid #ccc';
                    customCloseBtn.style.borderRadius = '50%';
                    customCloseBtn.style.cursor = 'pointer';
                    customCloseBtn.style.fontSize = isMobile ? '14px' : '16px';
                    customCloseBtn.style.color = '#333';
                    customCloseBtn.style.zIndex = '1001';
                    customCloseBtn.style.display = 'flex';
                    customCloseBtn.style.alignItems = 'center';
                    customCloseBtn.style.justifyContent = 'center';
                    customCloseBtn.style.fontWeight = 'bold';
                    customCloseBtn.style.lineHeight = '1';
                    customCloseBtn.style.textAlign = 'center';
                    
                    customCloseBtn.onclick = () => {
                      console.log('Custom close button clicked');
                      infoWindow.close();
                    };
                    
                    infoContent.appendChild(customCloseBtn);
                  }
                }
              }, 100);
            };

            // Listen for info window open events
            infoWindow.addListener('domready', styleInfoWindow);

            // Auto-open info window
            setTimeout(() => {
              infoWindow.open(map, marker);
            }, 1000);

          } else {
            console.warn('Geocoding failed:', status);
            // If geocoding fails, still show the map with default location
            const marker = new window.google.maps.Marker({
              position: defaultLocation,
              map: map,
              title: 'Tartech Contracting - Harare, Zimbabwe',
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#FFD700',
                fillOpacity: 1,
                strokeColor: '#2d2d2d',
                strokeWeight: 2
              }
            });
          }
        });

      } catch (error) {
        console.error('Error initializing map:', error);
        showFallbackMap();
      }
    }

    return () => {
      // Cleanup handled by browser
    };
  }, [address]);

  return (
    <div className={`w-full h-full ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ 
          width: '100%',
          height: '100%',
          minHeight: 'inherit'
        }}
      />
    </div>
  );
}