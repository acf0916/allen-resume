// Slides-inspired hero animation
const slides = [
  {
    title: "Technical Writer",
    desc: "Transforming complex information into clear, user-friendly content for global audiences.",
    color: "var(--slide-bg1)"
  },
  {
    title: "Technical Support & Gaming Support",
    desc: "Expert in technical and gaming support, delivering solutions and documentation for diverse platforms.",
    color: "var(--slide-bg2)"
  },
  {
    title: "Sales & Web Content Management",
    desc: "Driving sales and managing web content with precision, creativity, and strategic insight.",
    color: "var(--slide-bg3)"
  },
  {
    title: "Bold Portfolio",
    desc: "A proven record of excellence in documentation, support, and digital content management.",
    color: "var(--slide-bg4)"
  }
];

let current = 0;
let timer = null;

function showSlide(idx) {
  document.querySelectorAll('.slide').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

function startAutoplay() {
  timer = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
  if (timer) clearInterval(timer);
}

document.addEventListener('DOMContentLoaded', function() {
  // Build slides
  const container = document.querySelector('.slides-container');
  slides.forEach((slide, i) => {
    const el = document.createElement('div');
    el.className = 'slide' + (i === 0 ? ' active' : '');
    el.innerHTML = `
      <div class="slide-title">${slide.title}</div>
      <div class="slide-desc">${slide.desc}</div>
      <div class="slide-number">${String(i+1).padStart(2,'0')}</div>
    `;
    container.appendChild(el);
  });

  // Nav controls
  document.querySelector('.slide-btn.next').addEventListener('click', function() {
    stopAutoplay(); nextSlide(); startAutoplay();
  });
  document.querySelector('.slide-btn.prev').addEventListener('click', function() {
    stopAutoplay(); prevSlide(); startAutoplay();
  });

  startAutoplay();
});
