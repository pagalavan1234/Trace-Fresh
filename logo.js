/* ===== Trace Fresh logo (recreated from the supplied badge) =====
   To use your own PNG instead, replace LOGO_SVG with:
   const LOGO_SVG = '<img src="assets/logo.png" alt="Trace Fresh logo" style="width:100%">';
*/
const LOGO_SVG = `
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trace Fresh logo">
  <defs>
    <path id="arcTop" d="M 66 200 A 134 134 0 0 1 334 200"/>
    <path id="arcBottom" d="M 92 200 A 108 108 0 0 0 308 200"/>
  </defs>
  <!-- rings -->
  <circle cx="200" cy="200" r="190" fill="none" stroke="#0B5C4D" stroke-width="4"/>
  <circle cx="200" cy="200" r="178" fill="none" stroke="#7BA30F" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round"/>
  <circle cx="200" cy="200" r="158" fill="none" stroke="#0B5C4D" stroke-width="4"/>

  <!-- curved text -->
  <text font-family="Inter,Arial,sans-serif" font-weight="800" font-size="30" letter-spacing="8" fill="#0B5C4D">
    <textPath href="#arcTop" startOffset="50%" text-anchor="middle">TRACE FRESH</textPath>
  </text>
  <text font-family="Inter,Arial,sans-serif" font-weight="500" font-size="22" letter-spacing="6" fill="#0B5C4D">
    <textPath href="#arcBottom" startOffset="50%" text-anchor="middle">EAT HEALTHY</textPath>
  </text>

  <!-- side band -->
  <line x1="18" y1="162" x2="112" y2="162" stroke="#0B5C4D" stroke-width="3"/>
  <line x1="18" y1="238" x2="112" y2="238" stroke="#0B5C4D" stroke-width="3"/>
  <line x1="288" y1="162" x2="382" y2="162" stroke="#0B5C4D" stroke-width="3"/>
  <line x1="288" y1="238" x2="382" y2="238" stroke="#0B5C4D" stroke-width="3"/>
  <text x="66" y="207" font-family="Inter,Arial,sans-serif" font-weight="800" font-size="18" letter-spacing="4" fill="#0B5C4D">ESTD</text>
  <text x="290" y="207" font-family="Inter,Arial,sans-serif" font-weight="800" font-size="18" letter-spacing="4" fill="#0B5C4D">2026</text>

  <!-- produce -->
  <g fill="none" stroke="#7BA30F" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M140 132c-14-4-22-14-20-22 10 2 18 10 20 22z"/>
    <path d="M150 124c-4-16 2-30 12-34 2 14-2 26-12 34z"/>
    <path d="M168 118c0-14 6-24 16-26 2 12-4 22-16 26z"/>
    <path d="M186 116c4-12 14-18 22-16-4 10-12 16-22 16z"/>
    <path d="M176 128c-6-8 0-20 8-18 2 8-2 14-8 18z"/>
    <path d="M204 118c6-12 16-14 24-8-6 8-14 12-24 8z"/>
    <path d="M226 122c8-8 16-6 18 2-6 4-12 4-18-2z"/>
    <path d="M248 130c10-2 16 4 16 12-8 2-14 0-16-12z"/>
    <path d="M262 118c-2-12 4-18 10-14 0 8-4 12-10 14z"/>
    <path d="M270 136c6-8 14-8 16 0-6 6-12 6-16 0z"/>
  </g>
  <!-- basket -->
  <g fill="none" stroke="#7BA30F" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M120 168h160l-4 76H124z"/>
    <path d="M120 168h160"/>
    <path d="M176 168c0-30 48-30 48 0"/>
  </g>
</svg>`;

/* Small mark used in the header */
const MARK_SVG = `
<svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
  <circle cx="22" cy="22" r="21" fill="#0B5C4D"/>
  <path d="M22 9c-6 0-9 6-9 11 0 7 5 13 9 13s9-6 9-13c0-5-3-11-9-11z" fill="none" stroke="#7BA30F" stroke-width="2.5"/>
  <path d="M22 16v16" stroke="#7BA30F" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;
