
document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('[data-gallery-item]'));
  const box = document.getElementById('lightbox');
  if (!box || !cards.length) return;
  const img = document.getElementById('lightboxImage');
  const count = document.getElementById('lightboxCount');
  let current = 0;

  function openAt(index){
    current = index;
    const card = cards[current];
    img.src = card.dataset.full || card.dataset.src;
    img.alt = card.dataset.title || '';
    count.textContent = `${current + 1} / ${cards.length}`;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeBox(){
    box.classList.remove('open');
    document.body.style.overflow = '';
  }
  function step(delta){
    current = (current + delta + cards.length) % cards.length;
    openAt(current);
  }

  cards.forEach((card, index) => {
    card.addEventListener('click', () => openAt(index));
  });

  document.getElementById('lightboxClose')?.addEventListener('click', closeBox);
  document.getElementById('lightboxPrev')?.addEventListener('click', () => step(-1));
  document.getElementById('lightboxNext')?.addEventListener('click', () => step(1));
  box.addEventListener('click', (e) => { if (e.target === box) closeBox(); });
  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') closeBox();
    if (e.key === 'ArrowRight') step(-1);
    if (e.key === 'ArrowLeft') step(1);
  });
});
