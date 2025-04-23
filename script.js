
document.addEventListener("DOMContentLoaded", async () => {
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  const particleColor = currentTheme === "dark" ? "#ff69b4" : "#ff69b4";

  await tsParticles.load("tsparticles", {
    fullScreen: { 
      enable: false, 
      zIndex: 1
    },
    background: { color: "ff00ff" },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#ff00ff"
      },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 1,
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: particleColor,
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    detectRetina: true
  });

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

  console.log("✅ tsParticles loaded and animated");
});