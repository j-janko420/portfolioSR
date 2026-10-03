document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const filterButtons = document.querySelectorAll('.filter-bar button');
  const cards = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      cards.forEach((card) => {
        const shouldShow = filter === 'all' || card.dataset.category === filter;
        card.style.display = shouldShow ? 'block' : 'none';
      });
    });
  });
});
