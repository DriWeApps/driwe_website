**what images, icons, text (content)** and **which common styling/theme files** we should prepare *before* we start coding. No files — just a thorough, actionable inventory and copy/asset guidelines so we can review & finalize everything step-by-step.

---

# 1) Project folder conventions (how we'll *store* assets before building)

Use this canonical layout (we’ll keep images & icons inside each page folder; common CSS/theme in `/theme`):

```
/assets
  /pages
    /home
      /images
      /icons
      content.md  (or content.json)
    /about
      /images
      /icons
      content.md
    ...
    /driver-signup
  /common
    /images        (global hero / OG / partners)
    /icons         (ui icons, social, payment)
    /illustrations (system illustrations, Lottie JSON refs)
/theme
  tokens.css     (colors, shadows, glass tokens)
  typography.css
  glass.css
  animations.js  (animation presets names / parameters)
  tailwind.config.js    (if Tailwind)
  fonts/ (woff2)
README-asset-plan.md     (this document)
```

Naming convention: `{page}-{purpose}-{variant}.{ext}`
Examples: `home-hero-day-01@2x.webp`, `driver-headshot-ramesh-1.webp`, `icon-ride-24.svg`, `og-home.webp`.

File formats recommended:

* **Icons:** SVG (primary), fallback 32px PNG for legacy
* **Photos:** WEBP or AVIF (responsive srcset) + 2x versions for retina
* **Illustrations / micro animations:** Lottie JSON or lightweight SVG animations
* **Large background hero:** 1920×1080 (webp), provide 1280 and 640 variants
* **Map tiles / screenshots:** static webp + optional vector overlays (SVG)

Accessibility: every image needs `alt` text and role (decorative vs informative). Use descriptive alt that matches copy.

---

# 2) Common / theme assets (single common folder)

These go in `/assets/common` or `/theme` and should be finalised before pages:

**Theme tokens**

* brand colors: `--brand-500`, `--brand-600`, `--accent`, `--glass-bg`, `--glass-border`
* semantic tokens: `--success`, `--warning`, `--danger`, `--muted`
* gradients: `--hero-gradient`, `--cta-gradient`

**Typography**

* Primary font (e.g., Inter/Work Sans) — woff2 files + fallback stack/ poppins based fonts
* Sizes: H1..H4, body, small, caption tokens

**Glassmorphism tokens**

* `backdrop-filter: blur(14px)`, glass color (rgba), border radius tokens, soft shadows

**Animation presets**

* `motion-presets.json` (only metadata: name/easing/duration)

  * `heroEntrance` (GSAP timeline config)
  * `floatingIconLoop`
  * `cardStagger`
  * `smoothScrollOffset`
* Lottie library references & sizes
* Lenis / ScrollSmoother config sample values

**Icons**

* UI icon set (outline, filled): 24px, 32px, 48px — store in `/assets/common/icons/` can use lucide-react
* Payment icons (Visa/MC/UPI), social icons, app store badges (SVG) from the sources

**Images**

* global OG images (for SEO), hero fallback, partner logos (SVG)
* placeholder avatars / default vehicle silhouettes or vectors

**Utilities**

* small sprite sheet or svg-sprite for tiny icons (if not using inline svg)

---

# 3) Page-by-page asset & content inventory (folders + suggested copy + art direction)

> For each page  give: folder path, image & icon list (with art direction & alt text), essential text (headline/subhead/cta + 3 bullets), SEO meta + suggested animations.

---

## Page 1 — Home

**Folder**: `/assets/pages/home/`

**Images**

* `home-hero-city-day.webp` — wide city street at golden hour (1920×1080). Alt: “DriWe cab on city street at dusk”.
* `home-hero-cab-illustration.svg` — stylised cab vector for hero overlay (transparent).
* `app-screens/ios-1.webp`, `app-screens/android-1.webp` — app screenshots (mockphones).
* `stat-icon-rides.svg`, `stat-icon-drivers.svg`, `stat-icon-cities.svg` — tiny icons for live counters.
* `testimonial-1.webp`, `testimonial-2.webp` — headshots (cropped 1:1).
* `partners-logos.svg` — horizontal stacked.

**Icons**

* `ic-book-24.svg`, `ic-drive-24.svg`, `ic-download-24.svg`, `ic-tracking-24.svg`

**Content (suggested)**

* H1: “Rides that move you — every day, every moment.”
* Sub: “Fast local cabs, reliable drivers and easy payments. Download app & book in 30s.”
* CTA Primary: “Book a ride” — CTA Secondary: “Become a driver”
* 3 bullets: “Live tracking”, “Transparent fares”, “24/7 support”

**SEO**

* Title: “DriWe — Book Cabs & Goods Transport | Fast, Trusted Rides”
* Meta desc: 140–155 chars summarizing app & CTA.
* OG image: `home-og.webp`

**Animations**

* GSAP scroll-trigger hero entrance (large image parallax), floating cab micro loop (Motion One), app-screens stagger (Framer Motion).

**Notes**

* Live counters use small Lottie or animated number counters. Design hero with glass header overlay.

---

## Page 2 — About DriWe

**Folder**: `/assets/pages/about/`

**Images**

* `founder-1.webp`, `founder-2.webp` (leadership portraits)
* `timeline-step-2018.webp` (milestone visuals)
* `growth-map.webp` — simplified map showing expansion

**Icons**

* `ic-mission.svg`, `ic-vision.svg`, `ic-values.svg`

**Content**

* H1: “Our mission: safer, smarter mobility”
* Sub: short origin story (2–3 paragraphs)
* Team bios: name, title, 1-line quote
* Milestones: year + one-liner

**Animations**

* Timeline reveals via Framer Motion stagger + small parallax map zoom (GSAP). Image mask reveal for founder portraits.

**SEO**

* Title: “About DriWe — Our Story, Team & Milestones”
* OG image: `about-og.webp`

**Inspiration**: Ola/Uber style About pages with leadership and milestones. ([Olacabs][4], [Uber][5])

---

## Page 3 — Services

**Folder**: `/assets/pages/services/`

**Images**

* `service-cab.webp`, `service-bike.webp`, `service-auto.webp`, `service-goods.webp`
* `usecase-commute.webp`, `usecase-outstation.webp`

**Icons**

* `ic-economy.svg`, `ic-premium.svg`, `ic-outstation.svg`, `ic-goods.svg`

**Content**

* H1: “Rides, deliveries and more”
* Sub: Describe 3–4 service tiers
* Each service: title, 2-line description, fare example

**Animations**

* Service cards hover tilt + shadow (Motion One), GSAP stagger entry or a defined story.

**Notes**

* Include a small “compare plans” modal with pricing micro-animation and features.

---

## Page 4 — Why Choose DriWe?

**Folder**: `/assets/pages/why/`

**Images**

* `benefit-1.webp` (driver flexibility), `benefit-2.webp` (transparent fares)
* small badges: `badge-certified.svg`, `badge-insurance.svg`

**Icons**

* `ic-earn.svg`, `ic-safety.svg`, `ic-support.svg`

**Content**

* H1: “Why riders and drivers prefer DriWe”
* Split copy: left = drivers, right = customers (3 bullets each)
* CTAs: “Join as driver”, “Book a ride”

**Animations**

* Split-screen reveal with parallax icons (GSAP), benefit wheel interactive (Framer Motion).

---

## Page 5 — How It Works — Customers

**Folder**: `/assets/pages/how-customers/`

**Images**

* `how-step-1.webp` (pickup), `how-step-2.webp` (in-ride), `how-step-3.webp` (payment)
* `map-path-demo.webp` — simplified tracking path

**Icons**

* `ic-step-1.svg`, `ic-step-2.svg`, `ic-step-3.svg`

**Content**

* Steps (4): 1) Book → 2) Driver arrives → 3) Track → 4) Pay & rate
* Short how-to video (poster image) — `how-quick-tutorial.webp`

**Animations**

* Cab icon follows path animation on the map (GSAP path tween). Step cards reveal sequentially.

**Inspiration**: Uber’s how-it-works pages. ([Uber][6])

---

## Page 6 — How It Works — Drivers

**Folder**: `/assets/pages/how-drivers/`

**Images**

* `driver-onboarding-1.webp` (document upload mock), `driver-earnings.webp`

**Icons**

* `ic-kyc.svg`, `ic-onboard.svg`, `ic-online.svg`, `ic-earn.svg`

**Content**

* H1: “Drive with DriWe”
* Steps: Signup → KYC → Go online → Earn & withdraw
* Mini earnings estimator screenshot

**Animations**

* Multi-step progress slider (Framer Motion), upload button progress animation.

---

## Page 7 — Safety & Security

**Folder**: `/assets/pages/safety/`

**Images**

* `safety-alert.webp` (SOS UI), `driver-screening.webp`, `insurance.webp`

**Icons**

* `ic-sos.svg`, `ic-bg-check.svg`, `ic-insurance.svg`, `ic-verified.svg`

**Content**

* H1: “Your safety is our top priority”
* Items: driver background checks, in-app SOS, insurance coverage, live tracking
* Short FAQ bullets for safety

**Animations**

* Pinned GSAP section with icons glowing; SOS pulsate animation.

**Notes**

* Include small interactive "safety checklist" download.

---

## Page 8 — Support Centre

**Folder**: `/assets/pages/support/`

**Images**

* `support-hero.webp`, `help-article-thumb-1.webp`

**Icons**

* `ic-faq.svg`, `ic-chat.svg`, `ic-phone.svg`

**Content**

* Searchable FAQ intro text; sample popular Q & A
* Contact options: chat, call, email, WhatsApp

**Animations**

* Smooth accordion expand; floating chat icon idle wiggle.

---

## Page 9 — Contact DriWe

**Folder**: `/assets/pages/contact/`

**Images**

* `office-building.webp` (hero), `map-pin.webp` (map pin illustration)

**Icons**

* `ic-location.svg`, `ic-phone.svg`, `ic-mail.svg`

**Content**

* H1: “Talk to us”
* Contact form fields microcopy
* Regional offices list

**Animations**

* Map pin drop animation; form field glow on focus.

---

## Page 10 — Driver Sign-Up

**Folder**: `/assets/pages/driver-signup/`

**Images**

* `signup-hero.webp`, `doc-upload-illustration.svg`

**Icons**

* `ic-upload.svg`, `ic-check.svg`, `ic-clock.svg`

**Content**

* Multi-step form copy for each step (simple microcopy)
* CTAs: “Start sign-up” / “Track application”

**Animations**

* Form step slider, progress percent animation.

---

## Page 11 — Terms & Conditions

**Folder**: `/assets/pages/terms/`

**Images**

* Minimal — decorative pattern, `legal-graphic.svg` (optional)

**Icons**

* `ic-anchor.svg` for section anchors

**Content**

* Full T\&C text (keep minimal animation — anchor links only)

**Animations**

* Smooth internal anchor scrolling.

---

## Page 12 — Privacy Policy

**Folder**: `/assets/pages/privacy/`

**Images**

* decorative icons only

**Content**

* Privacy text with expandable sections for key points

**Animations**

* Gentle fade-ins for sections

---

## Page 13 — Ride Tracker Demo

**Folder**: `/assets/pages/ride-tracker/`

**Images**

* `tracker-map.webp`, `tracker-cab-frames` (small animated sprite frames)
* `day-night-sky.webp` (for day-to-night lighting effect)

**Icons**

* `ic-eta.svg`, `ic-driver.svg`, `ic-route.svg`

**Content**

* Short demo copy and sample simulated trip data

**Animations**

* Cab icon moves along path, lighting shifts from day → night (ambient color change). Use GSAP timeline + CSS variables.

---

## Page 14 — Driver Leaderboard

**Folder**: `/assets/pages/leaderboard/`

**Images**

* `leader-avatar-1.webp`, `leader-avatar-2.webp`, trophy-svg

**Icons**

* `ic-trophy.svg`, `ic-medal.svg`

**Content**

* Headline & explanation of leaderboard metrics
* Filter controls (city, week/month)

**Animations**

* Card hover lighting & entrance stagger. Draggable scoreboard (Framer Motion drag).

---

## Page 15 — City Coverage Map

**Folder**: `/assets/pages/cities/`

**Images**

* `cities-map.svg` (interactive vector), `city-hero-<city>.webp` thumbnails

**Icons**

* `ic-city-marker.svg`, `ic-hub.svg`

**Content**

* H1: “Where we operate”
* City cards with stats (rides/day, drivers)

**Animations**

* Map pins pulse, auto-zoom to highlighted hub.

---

## Page 16 — Dynamic Pricing Visualizer

**Folder**: `/assets/pages/pricing-visualizer/`

**Images**

* `pricing-graph-spark.webp` (decorative), `pricing-bg.webp`

**Icons**

* `ic-slider.svg`, `ic-curve.svg`

**Content**

* Short explainer: base fare, distance, demand multiplier
* Interactive slider labels and sample fare

**Animations**

* Animated curves (canvas or SVG path tween), live recalculation microcopy.

---

## Page 17 — User Stories Board

**Folder**: `/assets/pages/stories/`

**Images**

* user story thumbnails (3–9 images), mini video posters
* `story-hero.webp`

**Icons**

* `ic-like.svg`, `ic-share.svg`

**Content**

* Short lead-in + user story cards (quote, name, city)

**Animations**

* Masonry reveal, hover depth shadows, video lightbox with smooth open.

---

## Page 18 — Tech Behind DriWe

**Folder**: `/assets/pages/tech/`

**Images**

* `arch-diagram.svg` (animated layers), `realtime-illustration.webp`

**Icons**

* `ic-servers.svg`, `ic-encryption.svg`, `ic-realtime.svg`

**Content**

* Simple explanation of tracking stack, payments, matching algorithm (non-sensitive)
* CTA: “Partners / Developers”

**Animations**

* Step-by-step reveal of architecture; animated data flow lines (SVG stroke offset).

---

## Page 19 — Sustainability Initiatives

**Folder**: `/assets/pages/sustainability/`

**Images**

* `ev-fleet.webp`, `carbon-offset-graphic.svg`, `tree-planting.webp`

**Icons**

* `ic-leaf.svg`, `ic-ev.svg`

**Content**

* H1: “Greener rides, cleaner cities”
* Programs: EV adoption, carbon offsets, green partnerships

**Animations**

* Scroll-triggered background transition from gray city → clean skyline (CSS var animation).

---

# 4) Microcopy & SEO patterns (global)

* Button CTAs: “Book a ride”, “Get the app”, “Become a driver”, “Start sign-up”.
* Short success messages: “Booked — driver arriving in X mins”, “KYC submitted — check email”.
* Error messages: “We couldn't verify that document. Try another image (JPG/PNG)”
* SEO Templates:

  * Page title pattern: `DriWe — {PageName} | Fast & Trusted Rides`
  * Meta description: 140–155 characters; include city when relevant.

---

# 5) Iconography & illustration style guide

* **Icon style**: 2x stroke weight options — use **outline** for neutral UI, **filled** for active states.
* **Illustrations**: Minimal flat illustrations with 2–3 accent colors from brand palette.
* **Photography**: Real drivers & riders (authentic, diverse), mild color grade to match brand palette. If stock photos used, prefer editorial-style candid shots.

---

# 6) Accessibility & performance rules (must-haves)

* All images: compressed (WebP/AVIF), `srcset` for 1x/2x; lazy-load `loading="lazy"` except hero.
* Icons: inline SVG for color accessibility and stroke animation.
* Text contrast: WCAG AA for body; H1 ideally AA/AAA.
* Motion: Respect `prefers-reduced-motion` — provide non-animated fallback.
* SEO: structured data for Organization, LocalBusiness where applicable.

---

# 7) Animation & cinematic hints (assets that need to be created)

* **Small Lottie files**: badge-reveal, SOS pulse, small loader — store in `/assets/common/illustrations/`
* **SVG paths**: cab-route path (for tracking demo) — vector saved in `/assets/pages/ride-tracker/`
* **Light gradients** and CSS variables: for day → night lighting changes
* **Sprite frames** (if using sprite-based micro animation) — small frame set for cab animation

---

# 8) Example content snippets (you can copy/paste into each page content.md)

Home hero example:

* H1: “Rides that move you — every day, every moment.”
* Sub: “Fast local cabs, reliable drivers, and transparent fares. Book instantly or join as a driver.”
* CTA1: “Book a ride” — CTA2: “Become a driver”
* Microcopy under CTAs: “Available on iOS & Android • Cashless payments • 24/7 support”

Safety snippet:

* H2: “Safety-first features”
* Bullet: “All drivers undergo background checks and identity verification.”
* Bullet: “One-tap SOS and 24/7 support.”
* CTA: “Learn about our safety measures”

---

# 9) Sources & inspiration (why we included certain assets)

* Ola’s features & app booking flows — inspiration for service tiers, Ola Play and diverse vehicle types. ([Olacabs][1])
* Uber — safety language, business/driver pages, “how it works” microcopy and CTA patterns. ([Uber][2])
* Rapido — bike/auto options, feature list and app-first CTAs. ([Rapido][3])

---

# 10) Next steps — finalize assets & copy (what I need from you)

Before I start scaffolding the project, please confirm these choices (pick one option each or add details):

1. **Photography style:** (A) Real, candid driver & rider photos (recommended) or (B) Flat illustrations/characters (more stylised).
2. **Icon style:** (A) Outline (thin stroke) or (B) Filled (bolder) — and sizes (24px primary).
3. **Brand colors / logo:** Share brand hexes and logo (or say “use sample palette” and I’ll provide one).
4. **Tone of voice:** (A) Friendly & energetic (B) Professional & formal (C) Playful & youthful
5. **Languages:** English only or add regional languages?
6. **Must-have pages:** confirm if we keep pages 1–19 or revert to strict 12 only.

After you confirm those, I’ll produce a finalized `assets-checklist.json` (just metadata — not files) and a ready-to-use `content.json` for each page containing the final headings, subheads, bullets, image filenames and alt text so you can review before I start the Next.js project.

---



[1]: https://www.olacabs.com/features "Cab Features - Ola Cabs"
[2]: https://www.uber.com/ "Explore the Uber Platform | Uber United States"
[3]: https://rapido.bike/Bangalore/main-page "Rapido Bike Taxi, Auto, & Cabs"
[4]: https://www.olacabs.com/about "About us | Car rental | car hire | taxi India | olacabs.com"
[5]: https://www.uber.com/us/en/about "About Us - Uber"
[6]: https://www.uber.com/us/en/ride/how-it-works "What Is Uber and How Do You Use it?"
