document.addEventListener("DOMContentLoaded", () => {
  // ✅ Initialize Particles.js
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 120,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#ffffff" },
      shape: { type: "edge" },
      opacity: { value: 0.8 },
      size: { value: 4, random: true },
      move: {
        enable: true,
        speed: 0.35,
        direction: "none",
        out_mode: "bounce"
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.3,
        width: 1
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.6
          }
        }
      }
    },
    retina_detect: true
  });

  console.log("✅ Particles.js initialized");

  document.addEventListener("mousemove", (e) => {
    const root = document.documentElement;
    const offsetX = (e.clientX / window.innerWidth - 0.5) * 20;
    const offsetY = (e.clientY / window.innerHeight - 0.5) * 20;
  
    root.style.setProperty("--parallax-x", `${offsetX}px`);
    root.style.setProperty("--parallax-y", `${offsetY}px`);
  });

  // Title animations
  anime({
    targets: '#title',
    opacity: [0, 1],
    translateY: [-50, 0],
    easing: 'easeOutExpo',
    duration: 1500
  });

  anime({
    targets: '#subtitle',
    opacity: [0, 1],
    translateY: [-20, 0],
    delay: 500,
    easing: 'easeOutExpo',
    duration: 1200
  });

  anime({
    targets: '.project-card',
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(300, { start: 1000 }),
    easing: 'easeOutCubic'
  });

  // Theme toggle
  const body = document.body;
  const switchThumb = document.getElementById("switch-thumb");
  const themeIcon = document.getElementById("theme-icon");
  let isDark = body.classList.contains("dark");

  document.getElementById("theme-switch").addEventListener("click", () => {
    isDark = !isDark;
    body.classList.toggle("dark", isDark);
    body.classList.toggle("light", !isDark);

    anime({
      targets: switchThumb,
      left: isDark ? "30px" : "2px",
      duration: 300,
      easing: "easeInOutQuad"
    });

    themeIcon.innerHTML = isDark ? "🌙" : "☀️";
    themeIcon.style.opacity = 1;

    anime({
      targets: themeIcon,
      translateY: [-10, -40],
      opacity: [1, 0],
      duration: 800,
      easing: "easeOutCubic"
    });
  });

  // Project card click bounce
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      anime({
        targets: card,
        scale: [
          { value: 0.95, duration: 100, easing: 'easeOutQuad' },
          { value: 1, duration: 300, easing: 'easeOutElastic(1, .8)' }
        ]
      });
    });
  });

  // Parallax scroll animations
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = 200;

    anime.set('#title', {
      translateY: -Math.min(scrollY, maxScroll) * 0.12
    });

    anime.set('#subtitle', {
      translateY: -Math.min(scrollY, maxScroll) * 0.20
    });

    anime.set('.cta-button', {
      translateY: -Math.min(scrollY, maxScroll) * 0.1
    });

    anime.set('.hero-bg', {
      translateY: scrollY * 0.35
    });

    anime.set('.hero-bg-deep', {
      translateY: scrollY * 0.15,
      scale: 1 + scrollY * 0.0003
    });

    anime.set('.glass-box', {
      translateY: -scrollY * 0.1
    });
  });
});
