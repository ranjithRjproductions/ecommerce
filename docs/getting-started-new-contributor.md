# Getting Started (New to This Codebase)

This guide is for first-time contributors who want a safe, low-risk way to start building.

## Step 1 — Read the Product Requirements
1. Read `docs/accessible-disability-aids-marketplace-brd.md`.
2. Highlight:
   - Required pages for customer flow.
   - Vendor/admin features (later phases).
   - Accessibility non-negotiables.

## Step 2 — Pick a First Build Target
Start with only customer MVP pages:
- Homepage
- Product listing
- Product detail
- Cart

Do **not** start with:
- Rewards
- Admin reports
- Vendor document pipeline
- Payment gateway production wiring

## Step 3 — Create the App Scaffold
Choose your frontend stack (recommended: Next.js + TypeScript).

Expected output of this step:
- A running dev server
- First browser preview
- Basic app routing

## Step 4 — Build Accessibility Baseline First
Before adding complex business logic, set:
- Semantic HTML layout
- Landmark regions
- Focus-visible styles
- Form label helpers
- Error message patterns tied to fields

## Step 5 — Use Phased Delivery
Use `docs/implementation-slice-v1.md` and execute one slice at a time.

Rule:
- One slice = one PR
- Keep each PR reviewable in under 30 minutes

## Step 6 — QA Checklist for Every PR
- Keyboard-only navigation works.
- One H1 per page.
- Color contrast at AA level.
- All interactive elements have accessible names.
- Empty/loading/error states exist.

## Step 7 — Recommended Team Rhythm
- Morning: define 1–2 outcomes
- Midday: ship one end-to-end thin slice
- End of day: record blockers + next action in PR notes

---

## What to Do Right Now
1. Create scaffold PR.
2. Add global layout + header/footer.
3. Share first preview URL/screenshot.
4. Then begin homepage + product list.
