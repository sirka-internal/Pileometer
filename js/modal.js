  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');
  const overlay = document.getElementById('modal-overlay');

  document.querySelectorAll('.brick-pile-list-button').forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modalId;
      const template = document.getElementById(`modal-template-${modalId}`);
      if (template) {
        modalBody.innerHTML = template.innerHTML;
        modal.style.display = 'flex';

        setTimeout(() => modal.classList.add('show'), 10);
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      modalBody.innerHTML = '';
    }, 300);
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });