import { useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import NotFoundPage from './pages/NotFoundPage'
import StaticInfoPage from './pages/StaticInfoPage'

import QuickViewModal from './components/ui/QuickViewModal'
import ToastStack from './components/ui/ToastStack'

function AnimatedRoutes({ onQuickView, onAddToCart, onToggleWishlist, wishlistedIds, cart, setCart }) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={
              <HomePage
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlistedIds={wishlistedIds}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <ShopPage
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlistedIds={wishlistedIds}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetailsPage
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlistedIds={wishlistedIds}
              />
            }
          />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route
            path="/wishlist"
            element={
              <WishlistPage
                wishlistedIds={wishlistedIds}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
              />
            }
          />

          <Route
            path="/about"
            element={
              <StaticInfoPage title="About Us">
                <p className="text-slate-700 leading-7">
                  Ss Bridals brings you thoughtfully designed, ready-to-wear ladies suits — crafted with
                  premium fabric, detailed embroidery and a finish made for everyday elegance and festive
                  celebrations alike.
                </p>
              </StaticInfoPage>
            }
          />
          <Route
            path="/contact"
            element={
              <StaticInfoPage title="Contact">
                <p className="text-slate-700 leading-7">
                  Have a question about sizing, an order, or a custom request? Reach out to us anytime.
                </p>
                <div className="mt-5 space-y-2 text-slate-700">
                  <div>👤 Owner: Daniyal</div>
                  <div>
                    💬{' '}
                    <a
                      href="https://wa.me/919811403097"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-maroon hover:underline"
                    >
                      WhatsApp: +91 98114 03097
                    </a>
                  </div>
                  <div>
                    📍 69G7+G3Q, Hospital Rd, near Veterinary Hospital, Shahjada Market, Naya Bazar,
                    Babhnauli, Siwan, Bihar 841226, India
                  </div>
                </div>
                <a
                  href="https://wa.me/919811403097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-6 px-6 py-3 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition font-medium"
                >
                  Chat on WhatsApp
                </a>
              </StaticInfoPage>
            }
          />
          <Route
            path="/faq"
            element={
              <StaticInfoPage title="FAQ">
                <div className="space-y-5">
                  <div>
                    <div className="font-semibold text-slate-900">What sizes are available?</div>
                    <p className="text-slate-700 mt-1">Our suits are available in S, M, L and XL.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Do you offer exchanges?</div>
                    <p className="text-slate-700 mt-1">Yes, easy exchanges are available within 7 days of delivery.</p>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">How long does delivery take?</div>
                    <p className="text-slate-700 mt-1">Orders are typically delivered within 3-5 working days.</p>
                  </div>
                </div>
              </StaticInfoPage>
            }
          />
          <Route
            path="/privacy"
            element={
              <StaticInfoPage title="Privacy Policy">
                <p className="text-slate-700 leading-7">
                  We respect your privacy. Any information you share with Ss Bridals is used only to process
                  your orders and improve your shopping experience, and is never sold to third parties.
                </p>
              </StaticInfoPage>
            }
          />
          <Route
            path="/terms"
            element={
              <StaticInfoPage title="Terms & Conditions">
                <p className="text-slate-700 leading-7">
                  By shopping with Ss Bridals, you agree to our order, payment and exchange policies. Product
                  colors may vary slightly due to photography and screen settings.
                </p>
              </StaticInfoPage>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  const [wishlistedIds, setWishlistedIds] = useState([])
  const [cart, setCart] = useState([])

  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [toasts, setToasts] = useState([])

  const wishlistedSet = useMemo(() => new Set(wishlistedIds), [wishlistedIds])

  function pushToast({ title, message }) {
    const id = String(Date.now()) + Math.random().toString(16).slice(2)
    setToasts((t) => [...t, { id, title, message }])
    window.setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id))
    }, 2600)
  }

  function onToggleWishlist(product) {
    setWishlistedIds((ids) => {
      const next = new Set(ids)
      if (next.has(product.id)) next.delete(product.id)
      else next.add(product.id)
      return Array.from(next)
    })

    pushToast({
      title: 'Wishlist',
      message: wishlistedSet.has(product.id) ? 'Removed from wishlist' : 'Added to wishlist',
    })
  }

  function onAddToCart(product, qty = 1, variant = {}) {
    setCart((c) => {
      const idx = c.findIndex(
        (it) =>
          it.product.id === product.id &&
          it.variant?.size === variant?.size &&
          it.variant?.color === variant?.color
      )
      if (idx >= 0) {
        const next = [...c]
        next[idx] = { ...next[idx], qty: next[idx].qty + qty }
        return next
      }
      return [...c, { product, qty, variant }]
    })

    pushToast({ title: 'Cart', message: `Added ${product.name}` })
  }

  function onQuickView(product) {
    setQuickViewProduct(product)
  }

  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatedRoutes
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          wishlistedIds={wishlistedIds}
          cart={cart}
          setCart={setCart}
        />
      </MainLayout>
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlisted={quickViewProduct ? wishlistedIds.includes(quickViewProduct.id) : false}
      />
      <ToastStack toasts={toasts} />
    </BrowserRouter>
  )
}

export default App
