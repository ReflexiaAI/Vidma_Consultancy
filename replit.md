# LegalConsult Pro

## Overview

LegalConsult Pro is a modern legal consulting platform built as a full-stack web application. The project serves as a professional legal services website with consultation request functionality, featuring a contemporary design and robust form handling capabilities. The application presents legal services, team information, client testimonials, and provides an interactive contact form for potential clients to request consultations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with a comprehensive design system using CSS custom properties
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support (configured but using in-memory storage currently)
- **Validation**: Zod schemas for request/response validation
- **Session Management**: Express sessions with PostgreSQL session store support
- **Development**: Hot module replacement via Vite integration

### Data Storage
- **Current Implementation**: In-memory storage using Map data structures for development
- **Configured Database**: PostgreSQL with Drizzle ORM (ready for production deployment)
- **Schema**: Defined database tables for users and consultation requests with proper relationships
- **Migration Support**: Drizzle Kit for database schema migrations

### API Design
- **Architecture**: RESTful API endpoints following standard HTTP conventions
- **Endpoints**: 
  - POST /api/consultation-requests (create consultation request)
  - GET /api/consultation-requests (list all requests)
  - GET /api/consultation-requests/:id (get specific request)
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Validation**: Request body validation using Zod schemas
- **Logging**: Custom request/response logging middleware for API monitoring

## External Dependencies

### Database Services
- **PostgreSQL**: Primary database (configured via Drizzle with Neon serverless support)
- **Connection**: Environment-based DATABASE_URL configuration

### UI and Styling
- **Radix UI**: Headless UI components for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for enhanced user experience

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Backend bundling for production builds
- **Replit Integration**: Development environment plugins for Replit platform

### Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for both frontend and backend
- **Drizzle Zod**: Integration between Drizzle ORM and Zod schemas

### Additional Libraries
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing solution
- **Class Variance Authority**: Utility for building variant-based component APIs
- **Date-fns**: Date manipulation and formatting utilities