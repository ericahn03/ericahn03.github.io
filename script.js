// Title fade-in
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
  
  // Projects animate in staggered
  anime({
    targets: '.project-card',
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(300, {start: 1000}),
    easing: 'easeOutCubic'
  });
  