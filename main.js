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

  // Contact form — posts to Web3Forms (form-to-email, no backend of our own).
  // Configuration (access key, receiving address) lives in a comment above
  // the <form> in contact.html, not here.
  //
  // TEST-INSTRUCTIES (handmatig controleren vóór livegang):
  // Desktop:
  //  - Leeg verzenden: browser toont natieve validatiemeldingen bij Naam,
  //    Organisatie, Zakelijk e-mailadres, Uw vraagstuk en de privacy-checkbox.
  //  - Ongeldig e-mailadres (zonder "@"): browser blokkeert verzenden.
  //  - Alle verplichte velden + privacy-checkbox correct invullen en
  //    versturen: succesmelding verschijnt, formulier wordt geleegd, geen
  //    paginaherlaad en geen gegevens in de URL (POST via fetch).
  //  - Devtools-netwerk op "Offline" zetten en opnieuw versturen: foutmelding
  //    verschijnt met verwijzing naar contact@aymere.nl.
  // Mobiel (get bijv. 320–414px breed):
  //  - Alle velden/labels/meldingen blijven leesbaar, geen horizontale
  //    scroll, toetsenbord toont het juiste type (e-mail, telefoon).
  // Spam:
  //  - Vul het onzichtbare "botcheck"-veld (bijv. via devtools) en verstuur:
  //    de aanvraag wordt NIET naar Web3Forms gestuurd, maar de gebruiker
  //    ziet alsnog de succesmelding (zodat een bot niet leert dat hij is
  //    gedetecteerd).
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    var submitBtn = form.querySelector('button[type="submit"]');
    var note = form.querySelector('[data-form-note]');
    var successFallback = 'Bedankt voor uw bericht. We hebben uw aanvraag ontvangen en nemen zo spoedig mogelijk contact met u op.';
    var errorFallback = 'Het bericht kon niet worden verzonden. Probeer het opnieuw of stuur een e-mail naar contact@aymere.nl.';

    var showNote = function (text, isError) {
      if (!note) return;
      note.textContent = text;
      note.classList.toggle('form-note--error', !!isError);
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Honeypot: a real visitor never fills this hidden field.
      var honeypot = form.querySelector('[name="botcheck"]');
      if (honeypot && honeypot.value) {
        showNote((window.AYMERE_T && window.AYMERE_T('contact.form.success')) || successFallback, false);
        form.reset();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data && data.success) {
            showNote((window.AYMERE_T && window.AYMERE_T('contact.form.success')) || successFallback, false);
            form.reset();
          } else {
            showNote((window.AYMERE_T && window.AYMERE_T('contact.form.error')) || errorFallback, true);
          }
        })
        // Only a generic notice is shown/logged here — no form field values
        // or response bodies are written to the console.
        .catch(function () {
          showNote((window.AYMERE_T && window.AYMERE_T('contact.form.error')) || errorFallback, true);
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
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
