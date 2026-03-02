// Scroll animation observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all animatable elements
document.querySelectorAll(
  '.about-grid, .skill-group, .timeline-card, .project-card, .edu-card, .section-title'
).forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Staggered animation for skill tags
document.querySelectorAll('.skill-group').forEach((group, groupIndex) => {
  group.querySelectorAll('.skill-tag').forEach((tag, tagIndex) => {
    tag.style.transitionDelay = `${(groupIndex * 100) + (tagIndex * 50)}ms`;
  });
});

console.log('👋 Hey! Curioso(a) pelo código? Confira: https://github.com/rodrigocros');
