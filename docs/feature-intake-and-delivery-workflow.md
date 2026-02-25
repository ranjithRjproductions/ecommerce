# Feature Intake + End-to-End Delivery Workflow (Vibe Coder)

Use this whenever you want to split work feature-by-feature.

## How We’ll Work
For each feature you send, I will deliver:
1. **Implementation plan** (small, reviewable steps)
2. **Code changes**
3. **Validation/tests run**
4. **Preview instructions** (how you see it locally)
5. **Your next actions**
6. **Open questions/blockers**

---

## Copy-Paste Feature Brief Template
Use this template when assigning a feature:

```md
## Feature Name

## Goal
(What outcome should this feature achieve?)

## User Role
(Guest / Customer / Vendor / Admin)

## User Story
As a <role>, I want <capability>, so that <benefit>.

## Scope In
- 

## Scope Out
- 

## UI Requirements
- Pages/components involved:
- Required fields:
- States (empty/loading/error/success):

## Accessibility Requirements
- Keyboard behavior:
- Screen reader expectations:
- ARIA labels/roles needed:

## Data + Backend
- Firestore collections touched:
- API endpoints/functions:
- Validation rules:

## Acceptance Criteria
- [ ]
- [ ]

## Preview Expectations
- What exactly you want to visually verify:

## Constraints
- Time limit:
- Tech constraints:
```

---

## My End-to-End Output Format (What You’ll Receive)
For each feature, I will return:

1. **Plan**
   - Short implementation sequence.

2. **What I changed**
   - Files changed.
   - Why each file changed.

3. **How to run/preview**
   - Exact commands.
   - Local URL.
   - What to click/test.

4. **Validation**
   - Tests/checks run.
   - Any warnings and why.

5. **Your next action**
   - Small concrete checklist for you.

6. **Questions for you**
   - Any decisions needed from product/business side.

---

## Definition of Done Per Feature
A feature is done when:
- Acceptance criteria are satisfied.
- Accessibility checks for that feature pass.
- Error/empty/loading states are handled.
- Preview path is documented and reproducible.

---

## First Feature Recommendation
Start with:
**“App shell + accessible header/footer + homepage skeleton”**

Reason:
- Enables first visual preview quickly.
- Creates reusable layout foundation for all next features.
- Keeps first implementation low-risk.
