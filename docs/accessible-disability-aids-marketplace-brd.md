# Business Requirements Document (BRD)
## Accessible Disability Aids Marketplace

## 1) Introduction
This product is a unified marketplace for disability aids, connecting customers, vendors, and administrators in a single platform.

Core goals:
- Inclusive buying experience for assistive products.
- Vendor onboarding and compliant product publishing.
- Admin governance for quality and safety.
- Accessibility-first implementation aligned to WCAG 2.2 AA.

Planned integrations:
- Firebase (auth + database + notifications)
- Algolia (search)
- Razorpay placeholder for payments

---

## 2) User Roles
### Guest
- Browse categories and products.
- Use global search.

### Customer
- Manage cart and place orders.
- Track active shipments.
- Manage account details, address book, and login preferences.

### Vendor
- Onboard and manage products.
- Maintain business profile/documents.
- Manage order status and shipment tracking IDs.
- View rewards and performance metrics.

### Admin
- Approve vendors, products, and governance workflows.
- Monitor categories, users, and orders.
- Access operational reporting.

---

## 3) Global UI System
### Header
- Logo
- Search
- Categories navigation
- Cart
- User menu

### Footer
- Accessibility statement
- Contact information

### Visual language
- Typography: Inter / Roboto
- Primary: `#2563EB`
- Secondary: `#14B8A6`
- Neutral grayscale palette for surfaces/text

---

## 4) Accessibility Requirements (WCAG 2.2 AA)
1. Exactly one `<h1>` per page.
2. All interactive controls require accessible names via labels/ARIA.
3. Required fields must be visible and announced programmatically.
4. Complete keyboard support for all functional flows.
5. Focus states and contrast must satisfy AA requirements.
6. Error feedback should be linked to fields and announced to assistive tech.

---

## 5) Customer Experience
### A. Homepage (Public)
- Mission statement and trust cues.
- Category cards/sliders.
- Product discovery modules.
- Sign-in and sign-up call-to-actions.

### B. Customer Home (Authenticated)
- Personalized greeting.
- Category highlights.
- Recommendation blocks.

### C. Product Detail
- Product media and information.
- Accessible quantity selector.
- Add to Cart action.
- Buy Now action.

### D. Cart
- Quantity editing.
- Remove line item.
- Proceed to Buy.

### E. Place Order
- Final order summary.
- Address selection.
- Contact confirmation.
- Place/confirm order.

### F. My Orders
- Tabs: In Progress / Completed.
- Order cards with concise status.
- Access to tracking details.

### G. Order Tracking
- Shipment status timeline.
- Vendor-supplied tracking updates.

### H. Account Settings
- Account info (read-only)
- Address management (multiple, one primary)
- Contact details
- Login info (email update w/ verification flow)
- Logout confirmation dialog

---

## 6) Vendor Module
### A. Vendor Header
- Logo
- Search
- User dropdown

### B. Vendor Dashboard
- Unboard/onboard new products (as defined by business process)
- Manage products
- Business settings
- Rewards
- Orders (same core order lifecycle)

### C. Business Settings
Sections:
- Business info (name/logo/description)
- Business address
- Business contact
- Business documents (Aadhar, PAN, proofs)
- Business orders
- Rewards
- Tracking manager (tracking IDs by order)

### D. Product Management
- Create product
- Edit product
- Stock updates
- Media uploads
- Admin approval gate prior to publishing

### E. Vendor Order Management
- View customer orders
- Update statuses:
  - processing
  - shipped
  - out_for_delivery
  - delivered
- Add/edit tracking IDs

---

## 7) Admin Panel
- Vendor approvals
- Document verification
- Product approvals
- Category management
- User oversight
- Order monitoring
- Reports

---

## 8) Backend Logic
### Authentication
- Firebase Authentication

### Firestore collections
- `users`
- `vendors`
- `business_profiles`
- `vendor_documents`
- `products`
- `categories`
- `carts`
- `orders`
- `tracking_updates`

### Order lifecycle
`created → payment_pending → processing → shipped → out_for_delivery → delivered → completed`

### Additional logic
- Tracking updates nested/linked to orders.
- Cart bound to authenticated user ID.
- Vendor-product relationship enforced.
- Approval pipeline for vendor and product lifecycle.

---

## 9) Search
- Algolia-backed search.
- Synchronize products and categories into search indices.

---

## 10) Payments
- Razorpay integration placeholder.
- Flow:
  1. Generate order ID
  2. Redirect to payment
  3. Persist payment result/status

---

## 11) Notifications
- Email via SendGrid
- SMS placeholder
- Push notifications with Firebase Cloud Messaging (FCM)

---

## 12) Vendor Rewards
- Derived from total sales, fulfillment performance, and ratings.
- Exposed in vendor business settings rewards dashboard.

---

## 13) Error Handling
- Inline field-level validation messages.
- User-friendly network error states.
- Unauthorized/missing-permission users redirected safely.

---

## 14) Edge Cases
- Vendor attempts to delete product tied to active orders.
- Customer checkout with out-of-stock line items.
- Email-change invalidation and re-verification paths.
- Unverified vendor attempts to publish product.

---

## 15) Conclusion
This BRD defines customer, vendor, and admin experiences, along with the supporting backend architecture and lifecycle workflows required to deliver a compliant and scalable disability aids marketplace.
