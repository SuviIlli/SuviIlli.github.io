document.addEventListener('DOMContentLoaded', function () {
  const cards = Array.from(document.querySelectorAll('.poster-card'));
  const modal = document.getElementById('posterModal');
  const iframe = document.getElementById('modalIframe');
  const modalDownload = document.getElementById('modalDownload');
  const closeBtn = modal.querySelector('.modal-close');

  function openModal(pdfUrl) {
    iframe.src = pdfUrl;
    modalDownload.href = pdfUrl;
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    iframe.src = '';
    document.documentElement.style.overflow = '';
  }

  cards.forEach(card => {
    const viewBtn = card.querySelector('.view-btn');
    const pdf = card.getAttribute('data-pdf');
    if (viewBtn) viewBtn.addEventListener('click', () => openModal(pdf));
    card.addEventListener('dblclick', () => openModal(pdf));
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
});