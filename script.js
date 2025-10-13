// Altura Ads - Interactive JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.createElement("div");
  mobileMenu.className =
    "fixed inset-0 bg-white/95 backdrop-blur-md z-40 mobile-menu md:hidden";
  mobileMenu.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full space-y-8">
            <button id="close-mobile-menu" class="absolute top-4 right-4 text-gray-600 hover:text-blue-600">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <a href="#services" class="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" class="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" class="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">Contact</a>
        </div>
    `;
  document.body.appendChild(mobileMenu);

  // Mobile menu event listeners
  mobileMenuBtn?.addEventListener("click", () => {
    mobileMenu.classList.add("open");
  });

  document
    .getElementById("close-mobile-menu")
    ?.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });

  // Close mobile menu when clicking on links
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Add scroll animation classes to elements (only service cards, not stat cards)
  const animateElements = document.querySelectorAll(
    ".service-card"
  );
  animateElements.forEach((el, index) => {
    el.classList.add("fade-in-on-scroll");
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  // Parallax effect for hero section - improved smoothness
  const heroSection = document.querySelector("section:first-of-type");
  if (heroSection) {
    let ticking = false;
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.3; // Reduced speed for smoother effect
      heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      ticking = false;
    }
    
    function requestParallaxTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    
    window.addEventListener("scroll", requestParallaxTick, { passive: true });
  }

  // Hero title is now static, no typing animation

  // Counter animation for stats - Start immediately when page loads
  const statNumbers = document.querySelectorAll(".text-2xl.font-bold.text-white");
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
      start += increment;
      if (start < target) {
        if (target >= 1000000000) {
          // For billions, count from 1 to 999 quickly, then show B+
          const currentValue = Math.floor(start / 1000000000);
          if (currentValue >= 2) {
            element.textContent = "2B+";
          } else if (currentValue >= 1) {
            element.textContent = "1B+";
          } else {
            // Show rapid counting from 1 to 999
            const rapidCount = Math.floor(start / 20000000); // Faster increment
            element.textContent = Math.min(rapidCount + 1, 999);
          }
        } else {
          element.textContent = Math.floor(start).toLocaleString();
        }
        requestAnimationFrame(updateCounter);
      } else {
        if (target >= 1000000000) {
          element.textContent = "2B+";
        } else {
          element.textContent = target.toLocaleString();
        }
      }
    }

    updateCounter();
  };

  // Start counter animations when page loads
  window.addEventListener('load', () => {
    statNumbers.forEach((stat) => {
      const text = stat.textContent;
      let target = 0;

      if (text.includes("2B")) target = 2000000000;
      else if (text.includes("100")) target = 100;
      else if (text.includes("14")) target = 14;

      if (target > 0) {
        // Reset to 0 first
        stat.textContent = "0";
        // Start animation after a short delay
        setTimeout(() => {
          animateCounter(stat, target);
        }, 500);
      }
    });
  });

  // Floating animation for service icons
  const serviceIcons = document.querySelectorAll(".service-icon");
  serviceIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
  });

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    ballX += (mouseX - ballX) * speed;
    ballY += (mouseY - ballY) * speed;

    // Create cursor trail element if it doesn't exist
    let cursorTrail = document.getElementById("cursor-trail");
    if (!cursorTrail) {
      cursorTrail = document.createElement("div");
      cursorTrail.id = "cursor-trail";
      cursorTrail.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: linear-gradient(135deg, #3b82f6, #6366f1);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: 0.3;
                transition: opacity 0.3s ease;
            `;
      document.body.appendChild(cursorTrail);
    }

    cursorTrail.style.left = ballX - 10 + "px";
    cursorTrail.style.top = ballY - 10 + "px";

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hide cursor trail on mobile
  if (window.innerWidth <= 768) {
    const cursorTrail = document.getElementById("cursor-trail");
    if (cursorTrail) cursorTrail.style.display = "none";
  }

  // Scroll to top button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
    `;
  scrollToTopBtn.className =
    "fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 pointer-events-none z-50";
  scrollToTopBtn.style.transform = "translateY(100px)";
  document.body.appendChild(scrollToTopBtn);

  // Show/hide scroll to top button
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.pointerEvents = "auto";
      scrollToTopBtn.style.transform = "translateY(0)";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.pointerEvents = "none";
      scrollToTopBtn.style.transform = "translateY(100px)";
    }
  });

  // Scroll to top functionality
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    // Animate hero section elements
    const heroElements = document.querySelectorAll(".animate-fade-in-up > *");
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 200);
    });
  });

  // Contact form enhancement (even though we removed the form, this could be useful for future)
  const contactEmail = document.querySelector('a[href^="mailto:"]');
  if (contactEmail) {
    contactEmail.addEventListener("click", (e) => {
      // Add a subtle animation to the email link
      contactEmail.style.transform = "scale(0.95)";
      setTimeout(() => {
        contactEmail.style.transform = "scale(1)";
      }, 150);
    });
  }

  // Add hover effects to cards
  const cards = document.querySelectorAll(".service-card, .stat-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });

  // Performance optimization: Throttle scroll events
  let ticking = false;

  function updateOnScroll() {
    // Your scroll-based animations here
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick);

  // Add entrance animations for sections (excluding stats section)
  const sections = document.querySelectorAll("section:not(#stats)");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = `opacity 0.8s ease ${
      index * 0.1
    }s, transform 0.8s ease ${index * 0.1}s`;
  });

  // Animate sections on scroll
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Process steps animation
  const processSteps = document.querySelectorAll('.process-step');
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  processSteps.forEach((step) => {
    processObserver.observe(step);
  });
});

// Utility function for smooth animations
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Removed floating particles for cleaner design
