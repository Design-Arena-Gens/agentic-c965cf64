const filterButtons = Array.from(document.querySelectorAll('.filters__btn'));
const cards = Array.from(document.querySelectorAll('.competence-card'));
const timelineItems = Array.from(document.querySelectorAll('.timeline__item'));

function applyFilter(level) {
  cards.forEach((card) => {
    const cardLevel = card.dataset.level;
    const shouldShow = level === 'all' || cardLevel === level;
    card.classList.toggle('hidden', !shouldShow);
  });

  timelineItems.forEach((item) => {
    const itemLevel = item.dataset.level;
    const shouldShow = level === 'all' || itemLevel === level;
    item.classList.toggle('hidden', !shouldShow);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const level = button.dataset.level;

    filterButtons.forEach((btn) => {
      const isActive = btn === button;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', isActive.toString());
    });

    applyFilter(level);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    document.body.classList.add('animate-ready');
  }
});
