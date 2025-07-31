import { Link, useLocation } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive: boolean;
}

const routeLabels: Record<string, string> = {
  'services': 'Services',
  'mining': 'Mining',
  'construction': 'Construction',
  'agriculture': 'Agriculture',
  'about': 'About Us',
  'contact': 'Contact Us'
};

export function Breadcrumbs() {
  const [location] = useLocation();

  // Don't show breadcrumbs on home page
  if (location === '/') {
    return null;
  }

  const pathSegments = location.split('/').filter(segment => segment !== '');
  
  // If no path segments, don't show breadcrumbs
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [];

  // Always add Home as first item
  breadcrumbs.push({
    label: 'Home',
    href: '/',
    isActive: false
  });

  // Build breadcrumb trail
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;
    
    breadcrumbs.push({
      label: routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: currentPath,
      isActive: isLast
    });
  });

  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2 flex-shrink-0" />
                )}
                
                {item.isActive ? (
                  <span className="flex items-center font-medium text-industrial-black">
                    {index === 0 && <Home className="h-4 w-4 mr-1" />}
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href}>
                    <span className="flex items-center text-industrial-gray hover:text-construction-yellow transition-colors duration-200 cursor-pointer">
                      {index === 0 && <Home className="h-4 w-4 mr-1" />}
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}