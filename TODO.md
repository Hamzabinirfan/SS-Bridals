# TODO

## Plan for Indian Ethnic Wear E-commerce React Frontend (UI only)

### 1) Project setup
- Add Tailwind configuration (tailwind.config + postcss config) and global styles for premium theme.
- Add fonts (Poppins + Playfair Display) via CSS imports.

### 2) App architecture
- Replace App.jsx with Router-based layout.
- Create pages: Home, Shop, ProductDetails, Category, Cart, Wishlist, About, Contact, FAQ, Privacy, Terms, NotFound.
- Create layouts: MainLayout with sticky Navbar and responsive Footer.

### 3) Components (reusable)
- Navbar (logo, search, categories menu, cart/wishlist icons).
- Footer (premium links, newsletter).
- HeroSlider (Swiper).
- ProductCard, CategoryCard.
- Breadcrumb, Pagination.
- FilterSidebar (UI only).
- Modal QuickView.
- Toast notification UI.
- LoadingSkeleton.

### 4) Data + state (frontend only)
- Add dummy JSON data under src/data (products, categories, reviews).
- Add wishlist + cart state using React context (no auth).

### 5) Animations + interactions
- Page transitions + hover effects using Framer Motion.
- Image zoom on hover.
- Add to cart / wishlist interactions with toast.

### 6) Styling
- Apply premium color palette: white/beige/maroon/gold.
- Ensure responsive 3–4 columns on Shop and product grid layout elsewhere.

### 7) Verification
- Run `npm run dev` and ensure routes render.
- Smoke-test add to cart, wishlist, quick view modal UI.

