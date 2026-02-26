# Reverse Engineering Design Document

**Website Analyzed:** Square (squareup.com/us/en)

---

## PHASE 1: WEBSITE STRUCTURE ANALYSIS

### 1.1 Global Information Architecture

**Top-Level Navigation (Primary Header)**

**Header Structure:**

- Logo (Left aligned)
- **Primary Nav:**
  - Business Types
  - Products
  - Hardware
  - Software
  - Why Square
  - Pricing
  - Resources
- **Secondary Nav (Right):**
  - Sign In
  - Support
  - Get Started (Primary CTA Button)

**Behavior:**

- Sticky header after scroll threshold (~40–60px)
- Background transitions from transparent → white
- Subtle shadow added on scroll

### 1.2 Homepage Structure (Top to Bottom Order)

**Section 1 — Hero Section**

- Large headline (bold, minimal words)
- Supporting subtext
- Primary CTA (Get Started)
- Secondary CTA (Contact Sales / Learn More)
- Product imagery or interactive hardware visuals
- High contrast layout
- **Goal:** Immediate clarity + product positioning

**Section 2 — Product Ecosystem Overview**

- Grid layout of Square solutions
- Icon-based cards
- Hover interaction
- Brief descriptions
- **Goal:** Introduce modular product suite

**Section 3 — Industry-Based Segmentation**

- Tabs or categorized blocks:
  - Retail
  - Restaurants
  - Services
  - Large Businesses
- **Goal:** Personalization entry point

**Section 4 — Feature Deep Dive**

- Split layout (image left, content right)
- Alternating layout blocks
- Supporting stats
- **Goal:** Demonstrate capability depth

**Section 5 — Hardware Showcase**

- Device-focused imagery
- Floating UI overlays
- Horizontal product scroll (on desktop)

**Section 6 — Social Proof**

- Business testimonials
- Logos of known brands
- Impact statistics

**Section 7 — Pricing Overview**

- Entry-level transparency
- CTA to explore pricing

**Section 8 — Final Conversion Block**

- Strong CTA
- High-contrast background
- Minimal distraction

### 1.3 Footer Structure

- Multi-column structured footer:
  - Products
  - Solutions
  - Resources
  - Company
  - Developers
  - Legal
- Country selector
- Social icons
- High-density information architecture.

### 1.4 Conversion Flow

**Funnel Structure**

- Awareness → Hero clarity
- Consideration → Ecosystem + Industry match
- Validation → Testimonials + stats
- Decision → Pricing + CTA
- Conversion → Account signup

**CTA Placement Logic**

- Primary CTA appears:
  - Hero
  - Mid-page ecosystem section
  - Before pricing
  - Final section
- Sticky CTA behavior on mobile

**Scroll Depth Psychology**

- High visual density above the fold
- Medium content blocks in mid-scroll
- CTA spike at 70% scroll depth
- Reduced friction near bottom

---

## PHASE 2: VISUAL DESIGN SYSTEM BREAKDOWN

### 2.1 Typography System

**Font Family**

- Proprietary Square Sans (likely custom geometric sans-serif)
- Fallback: system-ui, Helvetica, Arial

**Font Weights**

- 400 (Regular)
- 500 (Medium)
- 600 (SemiBold)
- 700 (Bold)

**Heading Hierarchy**

- H1: Large (48–64px desktop)
- H2: 36–42px
- H3: 24–28px
- Body: 16–18px
- Microcopy: 14px

**Line Spacing**

- Headlines: 1.1–1.2
- Body: 1.5–1.6
- Letter spacing:
  - Slight negative tracking for headlines
  - Neutral tracking for body

### 2.2 Color System

**Primary Colors**

- Black (#000000)
- White (#FFFFFF)

**Accent**

- Soft blues
- Light grays
- Occasional gradient overlays

**Hover States**

- Button invert (black → white)
- Subtle underline animations
- Shadow elevation

**Background System**

- Large white blocks
- Light gray alternating sections
- No dark mode default on homepage

### 2.3 Spacing System

**Container**

- Max-width: ~1200–1280px
- Centered
- 24px side padding

**Section Padding**

- 80–120px vertical spacing

**Grid**

- 12-column grid desktop
- 6-column tablet
- 1-column mobile

**Breakpoints**

- Mobile: < 640px
- Tablet: 768px
- Desktop: 1024px+
- Large: 1440px+

### 2.4 UI Component System

**Buttons**

- **Variants:**
  - Primary (black bg / white text)
  - Secondary (outlined)
  - Text link style
- **Hover:**
  - Color invert
  - 200–300ms transition
  - Ease-out cubic-bezier

**Cards**

- Rounded corners (~8px)
- Light border
- Shadow on hover
- Lift effect (translateY -4px)

**Forms**

- Minimal style
- Bottom border focus effect
- High contrast input states

**Nav Dropdowns**

- Mega menu
- Grid structured
- Soft fade + slight upward motion

---

## PHASE 3: ANIMATION & INTERACTION ANALYSIS

### 3.1 Animation Types

**On Load**

- Hero fade-in
- Image stagger reveal

**On Scroll**

- Slide-up fade
- Staggered card animation
- Subtle parallax on product imagery

**On Hover**

- Card elevation
- Button invert
- Icon translation

### 3.2 Animation Style

- Fade + TranslateY (20–40px)
- Scale from 0.98 → 1
- Stagger delay: 80–120ms
- Smooth cubic-bezier(0.4, 0, 0.2, 1)

### 3.3 Likely Tech Stack

- React-based architecture
- CSS modules or internal design system
- Custom animation engine or CSS + IntersectionObserver
- Possibly GSAP for complex sequences
- No heavy 3D WebGL usage on homepage.

### 3.4 Micro-Interactions

- Sticky header transform
- CTA button hover invert
- Logo hover subtle opacity
- Link underline slide animation

---

## PHASE 4: CONTENT & COPY STRUCTURE

**Headline Formula**

- Short + Bold + Direct Value
- Example structure: *"Power your business with integrated tools."*

**Subheadline Pattern**

- Clarifies category
- Emphasizes ease
- Reinforces scalability

**CTA Writing Style**

- Action-oriented
- Low friction
- "Get Started"
- "See Pricing"
- "Contact Sales"

**Emotional Triggers**

- Simplicity
- Control
- Growth
- Reliability

**Trust Signals**

- Stats
- Recognizable business logos
- Transparent pricing
- Enterprise credibility language

---

## PHASE 5: PERFORMANCE & TECH ESTIMATION

**Likely Stack**

- React or internal SPA framework
- Edge-cached content
- CDN distributed assets
- Optimized SVG + WebP imagery

**Optimization Strategy**

- Lazy loading images
- IntersectionObserver for animations
- Minimal JS blocking
- Server-side rendering likely

---

## PHASE 6: REBUILD DOCUMENT (Implementation Ready)

### 6.1 Tech Stack (Implementation)

| Category | Choice |
|----------|--------|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | TailwindCSS |
| **UI Components** | ShadCN UI |
| **Animation** | Framer Motion |
| **Advanced Motion (Optional)** | GSAP |
| **CMS (Optional)** | Sanity |
| **Hosting** | Vercel |
| **Analytics** | Google Analytics (GA4) |
| **Image Optimization** | Next.js Image |
| **Smooth Scroll (Optional)** | Lenis |

Use this stack for all RR POS website development. Prefer Framer Motion for section/scroll animations; add GSAP only for complex sequences. Use Next.js `Image` for all imagery; add Lenis if smooth scroll is required.

### 6.2 File Structure

```
/app
  /page.tsx
/components
  /Hero.tsx
  /ProductGrid.tsx
  /IndustryTabs.tsx
  /FeaturesSplit.tsx
  /HardwareShowcase.tsx
  /Testimonials.tsx
  /PricingPreview.tsx
  /FinalCTA.tsx
  /Navbar.tsx
  /Footer.tsx
/lib
  /animations.ts
/styles
  globals.css
```

### 6.3 Motion Implementation Example (Framer Motion)

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
```

**Stagger:**

```tsx
transition={{ staggerChildren: 0.1 }}
```

### 6.4 Tailwind Example (Button)

```html
className="bg-black text-white px-6 py-3 rounded-md 
hover:bg-white hover:text-black border border-black 
transition-all duration-300 ease-out"
```

### 6.5 Responsive Implementation Notes

- Stack split sections vertically on mobile
- Reduce section padding to 60px
- Collapse mega menu into accordion
- Sticky CTA at bottom on mobile

---

## Final Summary for Frontend Team

This is a:

- **High-clarity**
- **Modular**
- **Conversion-optimized**
- **Motion-enhanced**
- **Enterprise-grade** SaaS marketing website

**Primary success factor:** Consistency + restraint + premium motion discipline.
