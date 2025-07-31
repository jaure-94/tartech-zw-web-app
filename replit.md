# Tartech Contracting Website

## Overview

This is a modern, industrial-grade business website for Tartech Contracting, a company operating in the construction, agriculture, and mining industries in Zimbabwe. The project is built as a full-stack web application with a React frontend and Express backend, designed to replace an outdated WordPress site with modern design, animations, and technical functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom industrial color scheme (black/yellow palette)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Animations**: GSAP (GreenSock) for scroll-based animations and micro-interactions
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type consistency
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Design**: RESTful API endpoints with proper error handling and validation

### Development Setup
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Development Server**: Express with Vite middleware for hot module replacement
- **TypeScript Configuration**: Shared types between frontend and backend through `/shared` directory
- **Path Aliases**: Configured for clean imports (`@/` for client, `@shared/` for shared types)

## Key Components

### Page Structure
- **Home Page**: Hero section with animated industrial background, value proposition, and call-to-action buttons
- **Services Pages**: Split by industry (Mining, Construction, Agriculture) with dedicated routes
- **About Page**: Company mission/vision with animated timeline
- **Contact Page**: Functional contact form with validation and email integration

### UI Components
- **Navigation**: Responsive navbar with dropdown menus for services
- **Footer**: Company information, service links, and social media
- **Forms**: Contact form with real-time validation using React Hook Form and Zod
- **Cards**: Service cards with hover effects and animations
- **Animations**: Scroll-triggered animations using GSAP and ScrollTrigger

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Contact Submissions**: Stores form submissions with customer details and service inquiries

## Data Flow

1. **Frontend Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle validation using Zod schemas
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Standardized error responses and success messages
5. **State Updates**: TanStack Query handles caching and state synchronization

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **Animation**: GSAP and ScrollTrigger for advanced animations
- **UI Library**: Radix UI primitives for accessible components
- **Form Validation**: Zod for schema validation
- **HTTP Client**: Native fetch API with custom wrapper

### Development Tools
- **Replit Integration**: Configured for Replit development environment
- **Hot Reload**: Vite development server with HMR
- **Error Handling**: Runtime error overlay for development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Database**: Drizzle migrations handle schema updates

### Production Configuration
- **Static Serving**: Express serves frontend assets in production
- **Environment Variables**: Database URL and other secrets via environment
- **Process Management**: Single Node.js process handles both API and static serving

### Hosting Considerations
- **Target Platform**: AWS (as specified in requirements) or similar cloud platform
- **Database**: Neon Database provides managed PostgreSQL
- **Scalability**: Stateless architecture allows for horizontal scaling
- **Performance**: Optimized images, code splitting, and efficient database queries

### Industrial Design Features
- **Color Scheme**: Black/yellow industrial palette with safety orange accents
- **Typography**: Bold, geometric fonts suitable for industrial branding
- **Imagery**: High-resolution construction, mining, and agricultural equipment photos
- **Animations**: Heavy machinery-inspired animations (rotating excavator arms, dust particles)
- **Mobile-First**: Responsive design optimized for mobile devices with sticky navigation

The application is structured to be maintainable, scalable, and aligned with modern web development practices while meeting the specific needs of an industrial contracting company in Zimbabwe.