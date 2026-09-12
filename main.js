// AYMERE — nav interactions
(function () {
  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-nav-toggle]');
  var header = document.querySelector('[data-header]');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    // close drawer on link click
    nav.querySelectorAll('.nav__drawer a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form (stub — not connected to a backend yet)
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('[data-form-note]');
      if (note) { note.textContent = 'Thanks — your question has been noted. We\u2019ll be in touch. (This form is not yet connected; wire it to email or a service before launch.)'; }
      form.reset();
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // "Oplossingen" dropdown (desktop: click-toggle, CSS handles hover)
  var dropdowns = document.querySelectorAll('[data-dropdown]');
  dropdowns.forEach(function (dropdown) {
    var dToggle = dropdown.querySelector('[data-dropdown-toggle]');
    if (!dToggle) return;
    dToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dropdown.getAttribute('data-open') === 'true';
      dropdowns.forEach(function (d) {
        d.setAttribute('data-open', 'false');
        var t = d.querySelector('[data-dropdown-toggle]');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      dropdown.setAttribute('data-open', String(!open));
      dToggle.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', function (e) {
    dropdowns.forEach(function (dropdown) {
      if (dropdown.getAttribute('data-open') === 'true' && !dropdown.contains(e.target)) {
        dropdown.setAttribute('data-open', 'false');
        var t = dropdown.querySelector('[data-dropdown-toggle]');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    dropdowns.forEach(function (dropdown) {
      dropdown.setAttribute('data-open', 'false');
      var t = dropdown.querySelector('[data-dropdown-toggle]');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  });

  // Mobile drawer accordion (Oplossingen group)
  document.querySelectorAll('[data-drawer-group]').forEach(function (group) {
    var gToggle = group.querySelector('[data-drawer-toggle]');
    if (!gToggle) return;
    gToggle.addEventListener('click', function () {
      var open = group.getAttribute('data-open') === 'true';
      group.setAttribute('data-open', String(!open));
      gToggle.setAttribute('aria-expanded', String(!open));
    });
  });
})();
