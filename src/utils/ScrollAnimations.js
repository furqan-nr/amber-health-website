/**
 * Simple ScrollAnimations - Safe and minimal
 * Only provides basic functionality without breaking the website
 */
class ScrollAnimations {
  constructor() {
    // Simple initialization that won't break anything
    this.initBasicEffects();
  }

  initBasicEffects() {
    // Only add basic hover effects and simple transitions
    this.setupHoverEffects();
    this.setupHeroCircleMovement();
  }

  setupHoverEffects() {
    // Add simple hover effects to elements that need them
    document.addEventListener('DOMContentLoaded', () => {
      // Basic hover scale effects
      const hoverElements = document.querySelectorAll('.hover-scale');
      hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          element.style.transform = 'scale(1.05)';
        });
        element.addEventListener('mouseleave', () => {
          element.style.transform = 'scale(1)';
        });
      });

      // Basic hover float effects
      const floatElements = document.querySelectorAll('.hover-float');
      floatElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          element.style.transform = 'translateY(-5px)';
        });
        element.addEventListener('mouseleave', () => {
          element.style.transform = 'translateY(0)';
        });
      });
    });
  }

  setupHeroCircleMovement() {
    // Add scroll-based movement to hero section circles
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.updateHeroCircles();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateHeroCircles() {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const heroRect = heroSection.getBoundingClientRect();
    const scrollY = window.pageYOffset;
    
    // Only move circles when hero section is in view
    if (heroRect.bottom > 0 && heroRect.top < window.innerHeight) {
      // Calculate scroll progress relative to the hero section
      const heroHeight = heroRect.height;
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - heroRect.top) / (windowHeight + heroHeight)));
      
      // Move circles with different speeds and directions, but keep them within bounds
      const circles = document.querySelectorAll('.hero-circle');
      circles.forEach((circle, index) => {
        // Different movement patterns for each circle
        const speed = (index + 1) * 0.5; // Different speeds for each circle
        const direction = index % 2 === 0 ? 1 : -1; // Alternate directions
        
        // Calculate movement using sine wave for smooth motion
        const maxMovement = 20; // Reduced for smoother effect
        const movementX = Math.sin(scrollProgress * Math.PI * 2 + index * 2) * maxMovement * speed * direction;
        const movementY = Math.cos(scrollProgress * Math.PI * 1.5 + index) * maxMovement * speed * 0.7;
        
        // Apply the transform
        circle.style.transform = `translateX(${movementX}px) translateY(${movementY}px)`;
        
        // Add subtle opacity change based on scroll
        const opacity = 0.15 + (0.15 * Math.abs(Math.sin(scrollProgress * Math.PI + index)));
        circle.style.opacity = opacity;
      });
    } else {
      // Reset circles when hero section is out of view
      const circles = document.querySelectorAll('.hero-circle');
      circles.forEach((circle, index) => {
        circle.style.transform = 'translateX(0px) translateY(0px)';
        // Reset to original opacity
        if (index === 0) circle.style.opacity = '0.3';
        if (index === 1) circle.style.opacity = '0.25';
        if (index === 2) circle.style.opacity = '0.2';
      });
    }
  }
}

// Safe initialization
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
});

export default ScrollAnimations;
