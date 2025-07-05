/**
 * ScrollAnimations - Safe animation controller that won't break the website
 * Only applies animations when specifically requested, not globally
 */
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    // Only initialize if user wants animations and hasn't disabled them
    if (this.shouldEnableAnimations()) {
      this.setupIntersectionObserver();
      this.setupScrollEffects();
      this.setupParallax();
      this.setupCounters();
    }
  }

  shouldEnableAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if there are any animation elements on the page
    const hasAnimationElements = document.querySelector('[class*="scroll-trigger"], [class*="animate-"], .counter, .typewriter, .circle-grow, .morph-shape');
    
    return !prefersReducedMotion && hasAnimationElements;
  }

  // Intersection Observer for scroll triggers
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Add triggered class for animations that need it
          this.triggerElementAnimation(entry.target);
          
          // Unobserve after triggering to prevent repeated animations
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Only observe elements that need animation
    this.observeAnimationElements(observer);
  }

  observeAnimationElements(observer) {
    // Observe scroll trigger elements
    document.querySelectorAll('.scroll-trigger, .scroll-trigger-left, .scroll-trigger-right').forEach(el => {
      observer.observe(el);
    });
    
    // Observe special animation elements
    document.querySelectorAll('.circle-grow, .morph-shape, .draw-line, .typewriter, .counter').forEach(el => {
      observer.observe(el);
    });
    
    // Observe elements with animation classes
    document.querySelectorAll('[class*="animate-fadeInUp"], [class*="animate-slideIn"], [class*="animate-revealCard"], [class*="animate-bounceIn"], [class*="animate-fadeInScale"], [class*="animate-flipIn"]').forEach(el => {
      observer.observe(el);
    });
  }

  triggerElementAnimation(element) {
    // Add triggered class based on animation type
    const animationClasses = [
      'animate-fadeInUp', 'animate-fadeInUp-delay-1', 'animate-fadeInUp-delay-2',
      'animate-slideInLeft', 'animate-slideInRight', 'animate-slideInRight-delay-1', 'animate-slideInRight-delay-2',
      'animate-revealCard', 'animate-revealCard-delay-1', 'animate-revealCard-delay-2',
      'animate-bounceIn', 'animate-fadeInScale', 'animate-flipIn', 'animate-flipIn-delay-1', 'animate-flipIn-delay-2'
    ];
    
    animationClasses.forEach(className => {
      if (element.classList.contains(className)) {
        element.classList.add('triggered');
      }
    });
    
    // Special handling for different animation types
    if (element.classList.contains('circle-grow')) {
      element.classList.add('animate-circleGrow', 'triggered');
    }
    
    if (element.classList.contains('morph-shape')) {
      element.classList.add('animate-morphShape', 'triggered');
    }
    
    if (element.classList.contains('draw-line')) {
      element.classList.add('animate-drawLine', 'triggered');
    }
    
    if (element.classList.contains('typewriter')) {
      this.typeText(element);
    }
    
    if (element.classList.contains('counter')) {
      this.animateCounter(element);
    }
  }

  // Parallax scrolling effects
  setupParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          this.updateParallax(scrolled);
          this.updateCircleScale(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateParallax(scrolled) {
    const rate = scrolled * -0.3;
    const rateFast = scrolled * -0.5;

    document.querySelectorAll('.animate-parallaxSlow').forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });

    document.querySelectorAll('.animate-parallaxFast').forEach(element => {
      element.style.transform = `translateY(${rateFast}px)`;
    });
  }

  // Dynamic circle scaling
  updateCircleScale(scrollPosition) {
    document.querySelectorAll('.scroll-circle').forEach(circle => {
      const rect = circle.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(window.innerHeight / 2 - centerY);
      const maxDistance = window.innerHeight / 2;
      const scale = Math.max(0.5, 1 - (distanceFromCenter / maxDistance) * 0.3);
      
      circle.style.transform = `scale(${scale})`;
    });
  }

  // Animated counters
  setupCounters() {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('.counter').forEach(counter => {
      counterObserver.observe(counter);
    });
  }

  animateCounter(element) {
    const target = parseInt(element.dataset.target);
    if (!target) return;
    
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      element.textContent = Math.floor(current);
      
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  // Typewriter effect
  typeText(element) {
    const text = element.dataset.text;
    const speed = parseInt(element.dataset.speed) || 50;
    if (!text) return;
    
    let i = 0;
    element.textContent = '';
    element.style.borderRight = '2px solid #333';
    
    const timer = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(() => {
          element.style.borderRight = 'none';
        }, 1000);
      }
    }, speed);
  }

  // Scroll-based effects
  setupScrollEffects() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.updateScrollEffects();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Update progress bars based on scroll
    document.querySelectorAll('.scroll-progress').forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      bar.style.width = `${progress * 100}%`;
    });
    
    // Rotate elements based on scroll
    document.querySelectorAll('.scroll-rotate').forEach(element => {
      const rotation = scrolled * 0.05;
      element.style.transform = `rotate(${rotation}deg)`;
    });
  }

  // Manual trigger methods
  static triggerAnimation(element, animationClass) {
    element.classList.add(animationClass, 'triggered');
  }
  
  static removeAnimation(element, animationClass) {
    element.classList.remove(animationClass, 'triggered');
  }
}

// Add utility functions for manual triggers
window.triggerRipple = (element) => {
  element.classList.add('animate-ripple', 'triggered');
  setTimeout(() => {
    element.classList.remove('animate-ripple', 'triggered');
  }, 1500);
};

window.addGlowEffect = (element) => {
  element.classList.add('animate-glowPulse', 'triggered');
};

window.removeGlowEffect = (element) => {
  element.classList.remove('animate-glowPulse', 'triggered');
};

// Auto-initialize when DOM is ready - but only if user wants animations
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimations();
});

export default ScrollAnimations;
