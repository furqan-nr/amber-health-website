# Amber Health - Mental Health Solutions for Music Industry

A modern, responsive React website built with TypeScript, Vite, and Tailwind CSS.

## ✨ Recent Improvements

### 🏗️ **Modular Architecture**
- **Broke down monolithic component** into reusable section components
- **Organized code structure** with proper separation of concerns
- **Created custom hooks** for scroll behavior and active section detection

### 🧭 **Enhanced Navigation**
- **Smooth scrolling** to sections when clicking navigation links
- **Active section highlighting** based on scroll position
- **Mobile-responsive menu** with hamburger toggle
- **Sticky header** with backdrop blur effect

### 📱 **Better User Experience**
- **Hover animations** on cards and interactive elements
- **Smooth transitions** and micro-interactions
- **Mobile-first responsive design**
- **Improved accessibility** with proper navigation structure

### 🎨 **Visual Enhancements**
- **Consistent animations** (scale transforms, smooth transitions)
- **Fixed CSS duplication** in Tailwind configuration
- **Better spacing and typography** consistency
- **Enhanced card hover states**

## 🗂️ **New Project Structure**

```
src/
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx     # Smart navigation with scroll detection
│   │   ├── Footer.tsx         # Reusable footer component
│   │   └── index.ts          # Layout exports
│   ├── sections/
│   │   ├── HeroSection.tsx    # Landing hero section
│   │   ├── AboutSection.tsx   # About/team section
│   │   ├── ServicesSection.tsx # Services cards
│   │   ├── ApproachSection.tsx # Company approach
│   │   ├── ResearchSection.tsx # Research CTA
│   │   ├── TestimonialsSection.tsx # Client testimonials
│   │   ├── ArticlesSection.tsx # Latest articles
│   │   ├── ContactSection.tsx # Contact information
│   │   └── index.ts          # Section exports
│   └── ui/                   # Reusable UI components
├── hooks/
│   └── useActiveSection.ts   # Custom hook for scroll navigation
├── screens/
│   └── MacbookPro/
│       └── MacbookPro.tsx    # Main page component (now clean!)
└── lib/
    └── utils.ts              # Utility functions
```

## 🚀 **Key Features**

### Navigation System
- **Smart active section detection** using Intersection Observer
- **Smooth scrolling** with proper offset calculations
- **Mobile hamburger menu** for better mobile experience
- **Responsive design** that works on all screen sizes

### Component Architecture
- **Modular sections** that can be easily rearranged or modified
- **Reusable components** following React best practices
- **Clean separation** between layout, sections, and UI components
- **Type-safe** with TypeScript throughout

### Performance Optimizations
- **Efficient scroll listeners** with proper cleanup
- **Optimized animations** using CSS transforms
- **Lazy loading ready** component structure
- **Bundle splitting** potential with modular architecture

## 🛠️ **Getting Started**

### Prerequisites
- [Node.js](https://nodejs.org/en/) (Latest LTS version recommended)

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 🌐 Development Server
After running `npm run dev`, the application will be available at:
- **Local**: http://localhost:5173/ (or next available port)

## 🎯 **Navigation Behavior**

The website now features intelligent navigation:

1. **Click any navigation item** → Smoothly scrolls to that section
2. **Scroll through sections** → Navigation automatically highlights current section
3. **Mobile menu** → Responsive hamburger menu for mobile devices
4. **Smooth animations** → All interactions feel polished and professional

## 🔧 **Technical Stack**

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** for accessible UI components
- **Lucide React** for icons
- **Custom hooks** for scroll behavior

## 📋 **What Was Fixed**

1. ❌ **Before**: One massive 500+ line component
   ✅ **After**: 8 focused, reusable section components

2. ❌ **Before**: No navigation functionality - just decorative links
   ✅ **After**: Fully functional navigation with smooth scrolling

3. ❌ **Before**: No indication of current section
   ✅ **After**: Active section highlighting based on scroll position

4. ❌ **Before**: Duplicate CSS imports
   ✅ **After**: Clean, organized CSS structure

5. ❌ **Before**: Poor mobile experience
   ✅ **After**: Responsive design with mobile navigation menu

## 🎨 **Design System**

The website follows a consistent design system with:
- **Color palette**: Yellow to red gradients with gray neutrals
- **Typography**: Bold, impactful headings with readable body text
- **Spacing**: Consistent padding and margins using Tailwind classes
- **Animations**: Subtle hover effects and smooth transitions
- **Layout**: Responsive grid system that works on all devices

---

This refactored codebase is now maintainable, scalable, and provides an excellent user experience with smooth navigation and responsive design.
