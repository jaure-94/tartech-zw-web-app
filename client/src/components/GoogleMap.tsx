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
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initializeMap();
      return;
    }

    // Set up global callback
    window.initMap = initializeMap;

    // Load Google Maps API - we'll handle the API key through server endpoint
    const script = document.createElement('script');
    
    // Fetch API key from server
    fetch('/api/maps-config')
      .then(response => response.json())
      .then(data => {
        script.src = `https://maps.googleapis.com/maps/api/js?key=${data.apiKey}&callback=initMap&libraries=places`;
        document.head.appendChild(script);
      })
      .catch(error => {
        console.error('Failed to get Maps API key:', error);
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
              <div class="text-center p-4">
                <div class="text-red-500 text-lg mb-2">⚠️</div>
                <p class="text-gray-600 text-sm">Unable to load map</p>
                <p class="text-gray-500 text-xs mt-1">API configuration error</p>
              </div>
            </div>
          `;
        }
      });

    return () => {
      // Cleanup function - handled by browser automatically
    };
  }, []);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    // Create geocoder
    const geocoder = new window.google.maps.Geocoder();
    
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
        },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "on" }]
        }
      ],
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true
    });

    mapInstanceRef.current = map;

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
            fillColor: '#FFD700', // Construction yellow
            fillOpacity: 1,
            strokeColor: '#2d2d2d', // Industrial black
            strokeWeight: 2
          }
        });

        // Create info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-bold text-lg text-gray-800 mb-1">Tartech Contracting</h3>
              <p class="text-gray-600 text-sm mb-2">${address}</p>
              <div class="flex items-center space-x-4 text-xs text-gray-500">
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
  };

  return (
    <div className={`w-full h-full min-h-[300px] rounded-lg overflow-hidden ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ minHeight: '300px' }}
      />
    </div>
  );
}