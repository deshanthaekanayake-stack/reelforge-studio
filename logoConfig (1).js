/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║          REELFORGE STUDIO — LOGO CONFIGURATION              ║
 * ║                                                              ║
 * ║  Single source of truth for all logo and icon assets.       ║
 * ║  Replace any file at the site root and update the path      ║
 * ║  here — every placement on the site updates automatically.  ║
 * ║                                                              ║
 * ║  HOW TO USE                                                  ║
 * ║  1. Drop your new logo files in the site root (next to      ║
 * ║     index.html), or update the paths below to a subfolder.  ║
 * ║  2. Update the path(s) below if filenames change.           ║
 * ║  3. Refresh the browser — every placement updates.          ║
 * ║                                                              ║
 * ║  LOGO PLACEMENT MAP                                          ║
 * ║  Navigation bar  →  logoDark   (white/light logo)           ║
 * ║  Footer          →  logoLight  (dark logo)                  ║
 * ║  Browser tab     →  favicon    (.ico)                       ║
 * ║  Mobile homescreen→ appleTouchIcon (.png, 180×180)          ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * NOTE: This file must be loaded AFTER siteConfig.js.
 *       In index.html, load order is:
 *         1. siteConfig.js
 *         2. logoConfig.js    ← this file
 *         (then the rest of the page scripts)
 */

const LOGO_CONFIG = {

  // ── Navigation bar logo ─────────────────────────────────────────
  // Shown on the transparent/dark nav at the top of every page.
  // Use a version with WHITE or LIGHT text (transparent background).
  nav: {
    src:    'logo-dark.png',
    width:  160,   // px — adjust to match your actual logo proportions
    height:  40,   // px
    alt:    'ReelForge Studio',
  },

  // ── Footer logo ─────────────────────────────────────────────────
  // Shown on the dark footer strip.
  // Use a version with WHITE or LIGHT text (transparent background).
  // If your logo looks the same on dark backgrounds, point both
  // nav.src and footer.src to the same file.
  footer: {
    src:    'logo-light.png',
    width:  140,   // px
    height:  35,   // px
    alt:    'ReelForge Studio',
  },

  // ── Browser tab favicon ─────────────────────────────────────────
  // Displayed in the browser tab and bookmarks.
  // Recommended: .ico (multi-size: 16×16 + 32×32 inside one file).
  favicon: {
    ico:  'favicon.ico',
    png32: 'favicon-32.png',   // PNG fallback for modern browsers
  },

  // ── Mobile / PWA icons ──────────────────────────────────────────
  // Shown when a visitor adds your site to their iPhone/Android homescreen.
  // Recommended size: 180×180 px, no transparency (Apple ignores alpha).
  appleTouchIcon: 'apple-touch-icon.png',

  // ── Browser chrome ──────────────────────────────────────────────
  // Colour of the browser UI chrome on mobile (address bar, tabs).
  // Should match your site's primary background colour.
  themeColor: '#080808',

  // ── Fallback text logo ──────────────────────────────────────────
  // Displayed only if the logo image fails to load.
  // Values are read from siteConfig.js (business.namePart1/2).
  fallback: {
    showText:   true,       // true = show text logo if image fails
    forceText:  false,      // true = always use text, never show image
  },

};

// Freeze to prevent accidental mutation at runtime
Object.freeze(LOGO_CONFIG.nav);
Object.freeze(LOGO_CONFIG.footer);
Object.freeze(LOGO_CONFIG.favicon);
Object.freeze(LOGO_CONFIG);

// ── Explicit global exposure (see siteConfig.js for rationale) ──────
if (typeof window !== 'undefined') {
  window.LOGO_CONFIG = LOGO_CONFIG;
}

// If this file is ever converted to an ES module, uncomment:
// export default LOGO_CONFIG;
