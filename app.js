/* ===================================================
   FIRST TACTICAL PROJECTS — app.js
   =================================================== */

// --- NAV: scroll effect & mobile toggle ---
(function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }

  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      mobile.classList.toggle('open');
      toggle.textContent = mobile.classList.contains('open') ? '✕' : '☰';
    });
  }
})();

// --- FADE-IN on scroll ---
(function () {
  const targets = document.querySelectorAll(
    '.pillar, .project-card, .step, .team-card, .stat, .cred, .project-detail-specs'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80 * i);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
})();

// --- CONTACT FORM: client-side validation & feedback ---
(function () {
  const form = document.getElementById('contactForm');
  const notice = document.getElementById('formNotice');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value;
    const message = form.querySelector('#message').value.trim();
    const consent = form.querySelector('#consent').checked;

    // Basic validation
    if (!name || !email || !subject || !message || !consent) {
      showNotice('error', 'Please complete all required fields and confirm your consent before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotice('error', 'Please enter a valid email address.');
      return;
    }

    // Simulate successful submission (replace with real endpoint when ready)
    // e.g. fetch('/api/contact', { method: 'POST', body: new FormData(form) })
    showNotice('success', 'Thank you for your enquiry. A member of the FTP team will be in touch within two business days.');
    form.reset();
  });

  function showNotice(type, message) {
    notice.textContent = message;
    notice.className = 'form-notice ' + type;
    notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
})();

// --- SMOOTH SCROLL for anchor links (e.g. projects.html#forss) ---
(function () {
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  }
})();
