# AYMERE — Data & Intelligence

Statische website (HTML/CSS/JS). Geen build-stap nodig — dubbelklik `index.html`
om te previewen, of upload de hele map naar je host.

## Pagina's
- `index.html` — Home
- `what-we-do.html` — What we do
- `services.html` — Services
- `how-we-work.html` — How we work
- `about.html` — About
- `contact.html` — Contact
- `styles.css` — design-systeem + alle pagina-styling
- `main.js` — mobiel menu, sticky header, contactformulier
- `assets/logo.svg` — logo (los bestand)

## Je eigen assets erin zetten

**Logo.** Er staat nu een nagebouwd SVG-logo in de header. Wil je het originele
bestand gebruiken? Zet het in `assets/` en vervang in elke pagina het blok
`<svg class="brand__mark"> … </svg>` door:
```html
<img class="brand__mark" src="assets/logo.svg" alt="AYMERE">
```

**Gracht-foto's.** De sfeerbeelden zijn nu warme CSS-gradiënten (placeholder).
Zet je foto's in `assets/` en vervang de placeholder per plek:
- Home hero → element met class `hero__visual canal`
- Services / About sfeerbeeld → `canal--dusk`
- Contact onderaan → `contact-photo canal`

Voorbeeld (voeg een `style` toe aan het element):
```html
<div class="hero__visual" style="background:url('assets/canal-hero.jpg') center/cover"></div>
```

## Contactformulier
Het formulier werkt nu als demo (verstuurt nog niet). Koppel het vóór livegang aan
e-mail of een dienst zoals Formspree/Basin, of aan je eigen backend. Zie
`data-contact-form` in `contact.html` en de handler in `main.js`.

## Fonts
Playfair Display + Lora via Google Fonts (staat al in de `<head>` van elke pagina).

## Kleuren (in styles.css, :root)
- Navy `#17283f` · Navy-deep `#101f36`
- Koper `#a9683a` · Koper-licht (op donker) `#d5a06a`
- Cream `#f4eee2`
