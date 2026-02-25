# ecommerce

Accessible Disability Aids Marketplace.

If you are completely new to this codebase, start here 👇

## 0) Current Project State
This repository now includes an initial Next.js + TypeScript + Tailwind scaffold, plus product planning docs. Dependencies still need installation in your environment to run preview.

Available docs:
- `docs/accessible-disability-aids-marketplace-brd.md`
- `docs/implementation-slice-v1.md`

---

## 1) What You Should Do *Before* Writing Code (Beginner Path)
Follow this order exactly:

1. **Read the BRD first (15-20 min)**
   - Understand roles: customer, vendor, admin.
   - Understand must-have accessibility requirements (WCAG 2.2 AA).

2. **Read the implementation slice (10 min)**
   - See the project split into small phases.
   - Do not try to build everything at once.

3. **Lock your MVP scope (10 min)**
   For your first coding sprint, build only:
   - App shell (header/footer)
   - Homepage
   - Product listing
   - Product detail
   - Cart (local state)

4. **Decide stack + folder structure (10 min)**
   Recommended default:
   - Frontend: Next.js + TypeScript + Tailwind
   - Backend/Auth/Data: Firebase
   - Search: Algolia (later phase)

5. **Define accessibility checklist before coding (5 min)**
   - One `h1` per page
   - Keyboard reachable controls
   - Form labels/ARIA
   - Visible focus states

---

## 2) “Preview” Expectation Right Now
Preview is available after installing dependencies:

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

---

## 3) Suggested 7-Day Starter Plan
### Day 1
- Initialize app scaffold.
- Add shared layout, theme tokens, typography.

### Day 2
- Build accessible header/footer and homepage sections.

### Day 3
- Build product listing and basic filters.

### Day 4
- Build product detail page with accessible quantity selector.

### Day 5
- Build cart page (add/remove/update quantities).

### Day 6
- Add Firebase auth skeleton and route guards.

### Day 7
- QA pass for keyboard-only navigation + contrast + labels.

---

## 4) Definition of “Ready to Start Coding”
You are ready when all are true:
- [ ] You understand first-sprint scope (MVP only).
- [ ] You selected framework + folder conventions.
- [ ] You created an accessibility checklist.
- [ ] You have a first preview command (`npm run dev` or equivalent).

---

## 5) First PR You Should Create
Create your first implementation PR with:
1. App scaffold
2. Global layout
3. Header/footer
4. Homepage shell
5. Accessibility baseline (focus + labels)

Keep PR small. Don’t include payments/search/vendor/admin yet.

---

## 6) Quick Mentoring Notes (Vibe Coder Mode)
- Build in thin vertical slices.
- Ship one working flow before broadening scope.
- Accessibility is not a final step; apply it from component 1.
- If a task feels big, split it into smaller “today-shippable” chunks.

---

## 7) Feature-by-Feature Collaboration (How to Assign Me Work)
We can now split work safely one feature at a time.

Use this workflow doc:
- `docs/feature-intake-and-delivery-workflow.md`

When you send a feature brief, I’ll handle it end-to-end:
- plan → code → checks → preview steps → your next actions → open questions.

