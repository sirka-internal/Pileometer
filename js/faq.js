document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const currentFaq = question.parentElement;
    const currentAnswer = currentFaq.querySelector('.faq-answer');
    const currentIcon = question.querySelector('img');

    document.querySelectorAll('.faq-list').forEach(faq => {
      const answer = faq.querySelector('.faq-answer');
      const icon = faq.querySelector('img');
      if (faq !== currentFaq) {
        faq.classList.remove('active');
        answer.style.maxHeight = null;
        if (icon) icon.src = 'img/ic_baseline-plus.svg';
      }
    });

    const isActive = currentFaq.classList.contains('active');
    if (isActive) {
      currentFaq.classList.remove('active');
      currentAnswer.style.maxHeight = null;
      currentIcon.src = 'img/ic_baseline-plus.svg';
    } else {
      currentFaq.classList.add('active');
      currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
      currentIcon.src = 'img/ic_baseline-minus.svg';
    }
  });
});