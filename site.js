// Entrada suave dos blocos ao rolar e aba atual visível na barra.
document.documentElement.classList.add('js');
addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => io.observe(el));
  } else items.forEach((el) => el.classList.add('in'));
  const cur = document.querySelector('.tabs [aria-current="page"]');
  if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
});
