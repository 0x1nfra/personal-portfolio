# Personal Portfolio Website - Product Requirements Document

## 1. Overview

This document outlines the requirements for a personal portfolio website for a freelance web developer targeting Malaysian small businesses. The site will showcase services, display testimonials, and provide a contact mechanism.

## 2. Objectives

- Establish a strong online presence for the freelancer
- Showcase services and pricing to potential clients
- Display client testimonials to build credibility
- Provide an easy way for potential clients to get in touch
- Demonstrate technical proficiency through a well-designed, functional website

## 3. Target Audience

- Small business owners in Malaysia seeking affordable web solutions
- Entrepreneurs looking to establish or improve their online presence
- Potential clients who value professional yet cost-effective services

## 4. Tech Stack

- **Framework:** Next.js 15 (React 19)
- **CMS:** Payload CMS 3
- **Database:** SQLite (via `@payloadcms/db-sqlite`)
- **Styling:** Tailwind CSS (v4) with custom configuration
- **UI Components:** Radix UI primitives, custom component library
- **Deployment:** Payload Cloud (plugin: `@payloadcms/payload-cloud`)
- **State Management:** Zustand (planned integration)
- **Email Service:** Resend (planned integration)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Image Processing:** Sharp
- **Testing:** Vitest (unit), Playwright (E2E)
- **Language:** TypeScript
- **Package Manager:** pnpm

## 5. Core Features

### 5.1. Homepage

- Hero section with:
  - Developer introduction and value proposition
  - Call-to-action buttons (Hire Me, View Work)
  - Key statistics (Projects, Experience, Satisfaction)
  - Professional headshot with availability indicator
- Testimonials carousel with:
  - Client quotes and ratings
  - Client information (name, title, company)
  - Auto-rotation with manual controls
- Services section with:
  - Tiered service offerings (Business Website, Website + Content Manager, Shopify Storefront)
  - Feature lists for each service
  - Pricing information
  - "Most Popular" indicator
  - Call-to-action buttons
- Contact section with:
  - Contact form (Name, Email, Message)
  - Form validation and submission handling

### 5.2. Services Page

- Detailed breakdown of each service package
- Comparison table of features and pricing
- Frequently asked questions section
- Consultation scheduling mechanism (planned)

### 5.3. Projects/Portfolio Page

- Gallery of completed projects
- Case studies with results and testimonials
- Filtering capabilities by service type or industry

### 5.4. About Page

- Personal story and background
- Skills and expertise showcase
- Professional headshot and contact information

### 5.5. Contact Page

- Dedicated contact form
- Alternative contact methods (email, social media)
- Simple map integration for location (if applicable)

### 5.6. Admin Dashboard (Payload CMS)

- Content management for:
  - Homepage testimonials
  - Services details and pricing
  - Project/portfolio entries
  - General site settings
- User authentication for admin access

## 6. Functional Requirements

### 6.1. User-Facing Functionality

- Responsive design for all device sizes
- Fast loading times and performance optimization
- Accessible navigation and content structure
- Form validation for contact submissions
- Smooth animations and transitions
- SEO-optimized content and structure

### 6.2. Admin Functionality

- Secure login to admin dashboard
- Intuitive interface for content updates
- Media upload and management
- Real-time content preview
- User role management (admin)

### 6.3. Integration Requirements

- Zustand for state management (planned)
- Resend for email sending (planned)
- Analytics integration (planned)
- Social media link integration

## 7. Non-Functional Requirements

- **Performance:** Page load times under 3 seconds
- **Security:** Secure handling of form data and admin access
- **Scalability:** Ability to handle traffic growth
- **Maintainability:** Clean, well-documented codebase
- **Browser Compatibility:** Support for modern browsers (Chrome, Firefox, Safari, Edge)

## 8. Future Enhancements

- Blog section for sharing technical knowledge and industry insights
- Newsletter signup and management
- Client portal for project updates and communication
- Advanced project filtering and search
- Multi-language support