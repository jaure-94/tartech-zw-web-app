import { Link, useLocation } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

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
    <div className="w-full bg-red-500 text-white p-4 text-lg font-bold">
      BREADCRUMBS TEST - Location: {location} - Segments: {pathSegments.join(', ')}
    </div>
  );
}