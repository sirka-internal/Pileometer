  const footer = document.querySelector('.footer');
  const scrollBtn = document.getElementById('scrollTopBtn');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        scrollBtn.classList.remove('sticky');
      } else {
        scrollBtn.classList.add('sticky');
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );

  observer.observe(footer);

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });