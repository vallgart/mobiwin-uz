document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     FAQ
  ========================= */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active-state');

      faqItems.forEach(i => i.classList.remove('active-state'));

      if (!isActive) {
        item.classList.add('active-state');
      }
    });
  });


  /* =========================
     BURGER MENU
  ========================= */
  const burgerBtn   = document.querySelector('.toggle-mobile');
  const mobileMenu  = document.querySelector('.mobile-menu');
  const iconUse     = burgerBtn?.querySelector('use');
  const navLinks    = document.querySelectorAll('.nav-mobile a');

  if (burgerBtn && mobileMenu && iconUse) {
    burgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('active');

    const iconId = isOpen ? '#icon-cross' : '#icon-burger';

    iconUse.setAttribute('href', iconId);
    iconUse.setAttribute('xlink:href', iconId);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      iconUse.setAttribute('href', '#icon-burger');
      document.body.style.overflow = '';
    });
  });


  /* =========================
     POPUP
  ========================= */
  const popup      = document.getElementById('popup');
  const popupClose = document.getElementById('popupClose');
  const rulesBtns  = document.querySelectorAll('.rules-open');

  function openPopup() {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }

  rulesBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openPopup();
    });
  });

  popupClose?.addEventListener('click', closePopup);

  popup?.addEventListener('click', e => {
    if (e.target === popup) closePopup();
  });

});
