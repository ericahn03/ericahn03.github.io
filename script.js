// Initial entrance animations
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
    delay: anime.stagger(300, {start: 1000}),
    easing: 'easeOutCubic'
  });
  
  // Dark/Light theme toggle
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  });
  
  // Hover/click animations for project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  // Click pop animation
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
// Animate socials fade + pop in
anime({
  targets: '.socials a',
  opacity: [0, 1],
  scale: [0.5, 1],
  delay: anime.stagger(200, {start: 2000}), // each icon comes one after another
  easing: 'easeOutElastic(1, .8)'
});