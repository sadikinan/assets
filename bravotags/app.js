// Sticky header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Live tag customizer
const nameInput  = document.getElementById('c-name');
const phoneInput = document.getElementById('c-phone');
const line3Input = document.getElementById('c-line3');
const preview    = document.getElementById('tagPreview');
const previewTag = document.getElementById('previewTag');

nameInput.addEventListener('input', () => {
  document.getElementById('previewLine1').textContent = nameInput.value.toUpperCase() || 'YOUR PET';
});
phoneInput.addEventListener('input', () => {
  document.getElementById('previewLine2').textContent = phoneInput.value || 'Your Phone';
});
line3Input.addEventListener('input', () => {
  document.getElementById('previewLine3').textContent = line3Input.value;
});

// Color swatches
document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    const bg = swatch.dataset.bg;
    preview.style.background = bg;
  });
});

// Quantity controls
const qtyInput = document.getElementById('c-qty');
document.getElementById('qtyMinus').addEventListener('click', () => {
  if (parseInt(qtyInput.value) > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  if (parseInt(qtyInput.value) < 20) qtyInput.value = parseInt(qtyInput.value) + 1;
});

// Scroll fade-in
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.product-card, .how-step, .review-card, .faq-item, .proof-item, .gallery-item, .service-item'
).forEach(el => { el.classList.add('fade-up'); io.observe(el); });

// Order form
function submitOrder(e) {
  e.preventDefault();
  document.querySelector('.order-form').style.display = 'none';
  document.getElementById('orderSuccess').style.display = 'block';
}

// Newsletter
function subscribeNewsletter(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Joined!';
  btn.disabled = true;
  e.target.querySelector('input').disabled = true;
}

// FAQ icon swap
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    const icon = item.querySelector('.faq-icon');
    icon.textContent = item.open ? '−' : '+';
  });
});
