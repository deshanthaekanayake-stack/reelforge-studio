/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║          REELFORGE STUDIO — SITE CONFIGURATION               ║
 * ║                                                                ║
 * ║  Single source of truth for every piece of business, contact, ║
 * ║  social, and SEO data used across the site.                   ║
 * ║                                                                ║
 * ║  Change a value here → it updates everywhere automatically:   ║
 * ║  navigation, hero, contact page, footer, floating buttons,    ║
 * ║  SEO meta tags, Open Graph tags, and Schema.org markup.        ║
 * ║                                                                ║
 * ║  Load order in index.html:                                    ║
 * ║    1. siteConfig.js   ← this file                             ║
 * ║    2. logoConfig.js                                            ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const SITE_CONFIG = {

  // ── Core business identity ───────────────────────────────────────
  business: {
    name:       'ReelForge Studio',
    legalName:  'ReelForge Studio Co., Ltd.',
    // Brand name is split for the two-tone logo text fallback
    // (namePart1 in white, namePart2 in italic gold).
    namePart1:  'Reel',
    namePart2:  'Forge',
    slogan:     'Cinematic Marketing for Ambitious Businesses',
    foundingYear: 2023,
  },

  // ── Website / canonical info ─────────────────────────────────────
  website: {
    url:    'https://reelforge-studio.vercel.app',
    domain: 'reelforge-studio.vercel.app',
  },

  // ── SEO metadata ──────────────────────────────────────────────────
  seo: {
    title:       'ReelForge Studio — AI Cinematic Commercials & Branding',
    description: 'ReelForge Studio creates cinematic AI-powered commercials, websites, branding and monthly content for cafés, restaurants, hotels, gyms, real estate, supermarkets and more.',
    keywords:    'AI commercials, cinematic video production, business branding, social media content, website design, ReelForge Studio, Vietnam video production',
    author:      'ReelForge Studio',
    // Reuses the existing nav logo asset as a working default OG image.
    // Swap in a dedicated 1200×630 image any time — only this line changes.
    ogImage:     'https://reelforge-studio.vercel.app/logo-dark.png',
    twitterCard: 'summary_large_image',
    themeColor:  '#080808',
  },

  // ── Hero section copy ─────────────────────────────────────────────
  hero: {
    headline:   'Cinematic Ads For\nEvery Business',
    headlineEm: 'Every Business',
    sub:        'AI-powered commercials, websites and brand content —\nproduced in days, not months.',
    ctaPrimary:   { label: 'View Our Work', href: '#niches' },
    ctaSecondary: { label: 'Get Free Quote', href: '#contact' },
  },

  // ── Direct contact channels ───────────────────────────────────────
  contact: {
    email:        'hello@reelforge.studio',
    mailtoUrl:    'mailto:hello@reelforge.studio',

    whatsapp:     { display: '+84 90 123 4567' },
    whatsappUrl:  'https://wa.me/84901234567',

    zalo:         { display: '+84 90 123 4567' },
    zaloUrl:      'https://zalo.me/84901234567',

    address:       'Ho Chi Minh City, Vietnam',
    responseTime:  '24 hours',
  },

  // ── Social media profiles ─────────────────────────────────────────
  // Used in the footer, the contact page, and Schema.org "sameAs".
  // Leave a url empty ('') to automatically hide that icon everywhere.
  social: {
    facebook:  { url: 'https://facebook.com/reelforgestudio',   label: 'Facebook'  },
    instagram: { url: 'https://instagram.com/reelforgestudio',  label: 'Instagram' },
    tiktok:    { url: 'https://tiktok.com/@reelforgestudio',    label: 'TikTok'    },
    youtube:   { url: 'https://youtube.com/@reelforgestudio',   label: 'YouTube'   },
  },

  // ── Contact form dropdown options ─────────────────────────────────
  serviceOptions: [
    'AI Commercial Video',
    'Business Website Design',
    'Banner & Social Media Design',
    'Logo & Brand Identity',
    'Monthly Content Package',
    'Custom Solution',
  ],
  budgetOptions: [
    'Under $500',
    '$500 – $1,500',
    '$1,500 – $5,000',
    '$5,000+',
  ],

  // ── Asset directories (video/thumbnail manifest) ──────────────────
  assets: {
    videoDir: 'videos/',
    thumbDir: 'thumbnails/',
  },

  // ── Hero carousel / portfolio manifest ────────────────────────────
  // Single source of truth for the hero background loop, the
  // Featured Commercials grid, and the lightbox. Missing video/thumb
  // files fall back to themed gradient placeholders automatically.
  portfolio: [
    { video: 'coffee.mp4',      thumb: 'coffee.jpg',      ph: 'ph-coffee',      label: 'Coffee Shop'  },
    { video: 'restaurant.mp4',  thumb: 'restaurant.jpg',  ph: 'ph-restaurant',  label: 'Restaurant'   },
    { video: 'hotel.mp4',       thumb: 'hotel.jpg',       ph: 'ph-hotel',       label: 'Luxury Hotel' },
    { video: 'gym.mp4',         thumb: 'gym.jpg',         ph: 'ph-gym',         label: 'Luxury Gym'   },
    { video: 'realestate.mp4',  thumb: 'realestate.jpg',  ph: 'ph-realestate',  label: 'Real Estate'  },
    { video: 'supermarket.mp4', thumb: 'supermarket.jpg', ph: 'ph-supermarket', label: 'Supermarket'  },
  ],

};

// Freeze to prevent accidental mutation at runtime
Object.freeze(SITE_CONFIG.business);
Object.freeze(SITE_CONFIG.website);
Object.freeze(SITE_CONFIG.seo);
Object.freeze(SITE_CONFIG.hero.ctaPrimary);
Object.freeze(SITE_CONFIG.hero.ctaSecondary);
Object.freeze(SITE_CONFIG.hero);
Object.freeze(SITE_CONFIG.contact.whatsapp);
Object.freeze(SITE_CONFIG.contact.zalo);
Object.freeze(SITE_CONFIG.contact);
Object.freeze(SITE_CONFIG.social.facebook);
Object.freeze(SITE_CONFIG.social.instagram);
Object.freeze(SITE_CONFIG.social.tiktok);
Object.freeze(SITE_CONFIG.social.youtube);
Object.freeze(SITE_CONFIG.social);
Object.freeze(SITE_CONFIG.serviceOptions);
Object.freeze(SITE_CONFIG.budgetOptions);
Object.freeze(SITE_CONFIG.assets);
Object.freeze(SITE_CONFIG.portfolio);
Object.freeze(SITE_CONFIG);

// ── Explicit global exposure ────────────────────────────────────────
// Classic (non-module) scripts already attach top-level `const` to
// `window` automatically, but we set this explicitly so SITE_CONFIG
// stays reliably available even if this file is ever loaded as an ES
// module, bundled, or wrapped by a build tool that scopes top-level
// declarations locally instead of globally.
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}

// If this file is ever converted to an ES module, uncomment:
// export default SITE_CONFIG;
