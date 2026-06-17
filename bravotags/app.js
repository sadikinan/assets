// Sticky header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// How It Works tabs
document.querySelectorAll('.how-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.how-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.how-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// Scroll fade-in
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.feature-card, .tweet, .tpl-card, .plan, .step, .proof-item'
).forEach(el => { el.classList.add('fade-up'); io.observe(el); });

// Signup form
function handleSignup(e) {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  e.target.style.display = 'none';
  document.getElementById('ctaSuccess').style.display = 'block';
}

// Animate demo card name on load
const names = ['COOPER', 'ALEX', 'JORDAN', 'MORGAN', 'SAM'];
const titles = ['Product Designer', 'Founder & CEO', 'Head of Sales', 'Creative Director', 'Engineering Lead'];
const companies = ['@ Vercel', '@ Stripe', '@ Shopify', '@ Linear', '@ Notion'];
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % names.length;
  const nameEl = document.querySelector('.demo-name');
  const titleEl = document.querySelector('.demo-title');
  const compEl = document.querySelector('.demo-company');
  if (nameEl) {
    nameEl.style.opacity = '0';
    titleEl.style.opacity = '0';
    compEl.style.opacity = '0';
    setTimeout(() => {
      nameEl.textContent = names[idx];
      titleEl.textContent = titles[idx];
      compEl.textContent = companies[idx];
      nameEl.style.opacity = '1';
      titleEl.style.opacity = '1';
      compEl.style.opacity = '1';
    }, 300);
  }
}, 3000);

// Smooth transition for demo card text
document.querySelectorAll('.demo-name, .demo-title, .demo-company').forEach(el => {
  el.style.transition = 'opacity 0.3s ease';
});

// Animate view counter
const viewsEl = document.querySelector('.float-badge--views strong');
if (viewsEl) {
  let count = 247;
  setInterval(() => {
    if (Math.random() > 0.6) {
      count += Math.floor(Math.random() * 3) + 1;
      viewsEl.textContent = count;
    }
  }, 2500);
}
