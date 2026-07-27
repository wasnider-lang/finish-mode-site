(() => {
  const config = window.FINISH_MODE_CONFIG || {};

  document.querySelectorAll('[data-product-name]').forEach((el) => {
    el.textContent = config.productName || 'Finish Mode';
  });
  document.querySelectorAll('[data-launch-price]').forEach((el) => {
    el.textContent = config.launchPrice || '$9';
  });
  document.querySelectorAll('[data-standard-price]').forEach((el) => {
    el.textContent = config.standardPrice || '$15';
  });

  const checkoutButtons = document.querySelectorAll('[data-checkout]');
  checkoutButtons.forEach((button) => {
    if (config.checkoutUrl) {
      button.href = config.checkoutUrl;
      button.target = '_blank';
      button.rel = 'noopener';
    } else {
      button.href = '#checkout-status';
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const status = document.querySelector('#checkout-status');
        if (status) {
          status.hidden = false;
          status.scrollIntoView({ behavior: 'smooth', block: 'center' });
          status.focus({ preventScroll: true });
        }
      });
    }
  });

  document.querySelectorAll('[data-delivery-provider]').forEach((link) => {
    link.href = config.deliveryProviderUrl || 'https://app.gumroad.com/library';
  });

  document.querySelectorAll('[data-support]').forEach((el) => {
    if (config.supportEmail) {
      el.href = `mailto:${config.supportEmail}?subject=Finish%20Mode%20Support`;
      el.textContent = config.supportEmail;
    } else {
      const parent = el.closest('[data-support-wrap]');
      if (parent) parent.hidden = true;
    }
  });

  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 })
    : null;

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('revealed');
  });
})();
