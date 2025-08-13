import { useEffect, useRef } from 'react';

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
        mapRef.current.innerHTML = `
          <div class="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div class="flex flex-col items-center justify-center h-full p-4 sm:p-6 text-center">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-construction-yellow rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <svg class="w-6 h-6 sm:w-8 sm:h-8 text-industrial-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 class="font-bold text-base sm:text-lg text-industrial-black mb-1 sm:mb-2">Tartech Contracting</h3>
              <p class="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">6 Beryl Road, Msasa<br>Harare, Zimbabwe</p>
              <div class="space-y-1 sm:space-y-2 text-xs text-gray-500 mb-3 sm:mb-4">
                <p>📍 Msasa Industrial Area</p>
                <p>🚗 Major highway access</p>
              </div>
              <a 
                href="https://www.google.com/maps/search/6+beryl+road+msasa+harare+zimbabwe" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-construction-yellow text-industrial-black text-xs sm:text-sm font-medium rounded-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Open in Google Maps
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

            // Create info window
            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div style="padding: 8px;">
                  <h3 style="font-weight: bold; font-size: 16px; color: #333; margin-bottom: 4px;">Tartech Contracting</h3>
                  <p style="color: #666; font-size: 14px; margin-bottom: 8px;">${address}</p>
                  <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: #999;">
                    <span>Industrial Excellence</span>
                    <span>•</span>
                    <span>Since 1994</span>
                  </div>
                </div>
              `
            });

            // Add click event to marker
            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });

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
    <div className={`w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ minHeight: '250px' }}
      />
    </div>
  );
}