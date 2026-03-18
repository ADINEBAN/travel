const reveals = document.querySelectorAll('.reveal');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn?.addEventListener('click', () => menu.classList.toggle('open'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.14 });

reveals.forEach((el) => observer.observe(el));

// 3D tilt effect for cards
const cards = document.querySelectorAll('.tilt');
cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rotateY = ((x / r.width) - 0.5) * 8;
    const rotateX = ((y / r.height) - 0.5) * -8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  });
});
