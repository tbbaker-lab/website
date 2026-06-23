(() => {
  const nav = document.getElementById('main-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('#year').forEach(el => el.textContent = String(new Date().getFullYear()));

  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveal.forEach(el => observer.observe(el));
  } else reveal.forEach(el => el.classList.add('visible'));

  const countdown = document.querySelector('.countdown');
  if (countdown) {
    const target = new Date(countdown.dataset.release).getTime();
    const fields = {
      days: document.getElementById('days'), hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'), seconds: document.getElementById('seconds')
    };
    const status = document.getElementById('countdown-status');
    const update = () => {
      const distance = target - Date.now();
      if (distance <= 0) {
        fields.days.textContent = '00'; fields.hours.textContent = '00';
        fields.minutes.textContent = '00'; fields.seconds.textContent = '00';
        if (status) status.textContent = 'Knockout Crew is available now.';
        return;
      }
      const day = 86400000, hour = 3600000, minute = 60000;
      fields.days.textContent = String(Math.floor(distance / day)).padStart(2, '0');
      fields.hours.textContent = String(Math.floor((distance % day) / hour)).padStart(2, '0');
      fields.minutes.textContent = String(Math.floor((distance % hour) / minute)).padStart(2, '0');
      fields.seconds.textContent = String(Math.floor((distance % minute) / 1000)).padStart(2, '0');
    };
    update(); setInterval(update, 1000);
  }

  const dialog = document.getElementById('lightbox');
  if (dialog) {
    const image = dialog.querySelector('img');
    document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => {
      image.src = button.dataset.image;
      image.alt = button.querySelector('img').alt;
      dialog.showModal();
    }));
    dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  }
})();
