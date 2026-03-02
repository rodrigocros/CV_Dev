// ========================
// DARK MODE TOGGLE
// ========================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ========================
// LANGUAGE TOGGLE (PT / EN)
// ========================
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
let isEnglish = false;

langToggle.addEventListener('click', () => {
  isEnglish = !isEnglish;
  const langPt = document.querySelectorAll('.lang-pt');
  const langEn = document.querySelectorAll('.lang-en');

  langPt.forEach(el => { el.style.display = isEnglish ? 'none' : ''; });
  langEn.forEach(el => { el.style.display = isEnglish ? '' : 'none'; });

  langLabel.textContent = isEnglish ? 'Ver em Português' : 'Ver em Inglês';
});

// ========================
// SCROLL ANIMATIONS
// ========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in, .timeline-item, .project-card').forEach(el => {
  observer.observe(el);
});

console.log('👋 Olá! Curioso(a)? Confira meu GitHub: https://github.com/rodrigocros');
