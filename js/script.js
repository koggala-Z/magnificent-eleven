
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
  }, 3500);
});

document.getElementById('hamburger').onclick = () => {
  document.getElementById('navLinks').classList.toggle('open');
};

document.querySelectorAll('section[id]').forEach(section => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const link = document.querySelector(`nav a[href="#${e.target.id}"]`);
      if (e.isIntersecting) {
        link.classList.add('active');
        e.target.classList.add('visible');
      } else {
        link.classList.remove('active');
      }
    });
  }, { threshold: 0.3 });
  observer.observe(section);
});

const fullModal  = document.getElementById('fullModal'),
      modalTitle = document.getElementById('modalTitle'),
      modalText  = document.getElementById('modalText'),
      closeBtn   = document.querySelector('.modal-close');

document.querySelectorAll('.gallery-item .more').forEach(btn => {
  btn.addEventListener('click', () => {
    const fig   = btn.closest('figure'),
          title = fig.querySelector('h3').textContent,
          full  = btn.dataset.full;
    modalTitle.textContent = title;
    modalText.innerHTML = btn.dataset.full;

    fullModal.setAttribute('aria-hidden', 'false');
  });
});

closeBtn.addEventListener('click', () => {
  fullModal.setAttribute('aria-hidden', 'true');
});

fullModal.addEventListener('click', e => {
  if (e.target === fullModal) {
    fullModal.setAttribute('aria-hidden', 'true');
  }
});


document.querySelectorAll('.timeline-item').forEach(item => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        item.classList.add('in-view');
        observer.unobserve(item);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(item);
});


const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
