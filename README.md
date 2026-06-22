# Ħmira — Website

A premium, mobile-first marketing site for **Ħmira**, a chef-led ftira &amp;
focaccia shop in San Ġwann, Malta. Designed around the brand's brown &amp; cream
palette with an artisanal, boutique-Mediterranean feel and a conversion focus on
**menu views, WhatsApp orders, and store visits**.

## Highlights

- **Single-page, mobile-first** layout — no build step, pure HTML/CSS/JS.
- **Sections:** hero, chef story (Chef Francesco · MasterChef Malta), signature
  menu, "Why Ħmira" value props (fresh local ingredients &amp; handcrafted
  focaccia), gallery, social proof, and a visit/contact block with map.
- **Conversion-first:** sticky nav order button, floating WhatsApp FAB, and
  WhatsApp / call CTAs throughout (`wa.me/35699372799`).
- **Premium UX:** elegant `Fraunces` + `Jost` type pairing, scroll-reveal
  animations, marquee strips, hero parallax, hover motion — all respecting
  `prefers-reduced-motion`.
- **Bespoke food photography** generated for the brand (warm, moody, chef-led).

## Structure

```
index.html        Markup & content
css/styles.css    Design system (tokens), layout, components, responsive, motion
js/main.js        Nav state, mobile drawer, scroll reveal, parallax, FAB, fallbacks
assets/           Local image assets (optional)
```

## Running

It's a static site — just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes on imagery

The food and chef photography is served from a CDN. The graceful fallback in
`js/main.js` keeps the layout looking intentional (warm brown gradient) if any
image fails to load. To fully self-host, download the images into `assets/` and
swap the `src` URLs in `index.html` to the local paths.

## Brand details

- **Name:** Ħmira (Maltese for *yeast*) · Est. 2025
- **Location:** Triq Tal Balal, San Ġwann, Malta
- **Phone / WhatsApp:** +356 9937 2799
- **Hours:** Tue–Sun from 7am · Closed Mondays
- **Palette:** deep brown `#3a2417` · terracotta `#b5683c` · cream `#f6efe2`
