# RR POS Website — Tech Stack

Single source of truth for technology choices. Use this stack for all development.

---

| Category | Choice | Notes |
|----------|--------|--------|
| **Framework** | Next.js | App Router preferred |
| **Language** | TypeScript | Strict mode recommended |
| **Styling** | TailwindCSS | Utility-first; use design tokens from DESIGN DOC.MD |
| **UI Components** | ShadCN UI | Base components; customize to match RR POS brand |
| **Animation** | Framer Motion | Primary for scroll, hover, page transitions |
| **Advanced Motion (Optional)** | GSAP | Use only for complex sequences if needed |
| **CMS (Optional)** | Sanity | For blog, editable copy, or hardware catalog later |
| **Hosting** | Vercel | Deploy from Git; SSL, edge, serverless included |
| **Analytics** | Google Analytics (GA4) | Conversion events: demo bookings, form submits |
| **Image Optimization** | Next.js Image | All images via `<Image>`; WebP/AVIF where possible |
| **Smooth Scroll (Optional)** | Lenis | Add if smooth scroll behavior is required |

---

## Quick reference

- **PRD.MD** — What we build (requirements, pages, content).
- **DESIGN DOC.MD** — How we design and implement (Square-inspired structure, motion, rebuild notes).
- **TECH-STACK.MD** — What we build it with (this file).

All implementation should align with this stack unless explicitly changed.
