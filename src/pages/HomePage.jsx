import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { FiTruck, FiShield, FiRefreshCw, FiGift } from 'react-icons/fi'

import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'
import { reviews } from '../data/reviews'

const perks = [
  { icon: FiTruck, title: 'Fast Delivery', desc: 'Delivered in 3-5 working days' },
  { icon: FiShield, title: 'Premium Fabric', desc: 'Quality checked before dispatch' },
  { icon: FiRefreshCw, title: 'Easy Exchange', desc: 'Hassle-free within 7 days' },
  { icon: FiGift, title: 'Gift Wrapping', desc: 'Available on every order' },
]

export default function HomePage({ onQuickView, onAddToCart, onToggleWishlist, wishlistedIds }) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-beige/40 via-white to-white">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-beige/80 bg-white/70 backdrop-blur">
                      <span className="w-2 h-2 rounded-full bg-maroon" />
                      <span className="text-sm text-slate-700">{p.badge} • Ready to Wear</span>
                    </div>
                    <h1 className="font-heading text-maroon text-4xl sm:text-5xl lg:text-6xl mt-5 leading-tight">
                      {p.name}
                    </h1>
                    <p className="text-slate-700 mt-4 max-w-xl">{p.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <Link
                        to={`/product/${p.id}`}
                        className="px-6 py-3 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition text-center font-medium"
                      >
                        Shop This Look
                      </Link>
                      <Link
                        to="/shop"
                        className="px-6 py-3 rounded-2xl border border-beige/80 bg-white/70 hover:bg-beige/40 transition text-center font-medium"
                      >
                        View All Products
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="rounded-[30px] overflow-hidden border border-beige/70 shadow-premium bg-beige/20">
                      <img
                        src={p.images[0]}
                        alt={p.name}
                        className="w-full h-[360px] sm:h-[460px] object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-beige/70 blur-2xl" />
                    <div className="absolute -top-8 -right-8 w-44 h-44 rounded-full bg-maroon/10 blur-2xl" />
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Perks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map((perk) => (
            <div key={perk.title} className="p-5 rounded-3xl border border-beige/80 bg-beige/15 flex items-start gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white border border-gold/30 flex items-center justify-center shrink-0">
                <perk.icon className="text-maroon" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{perk.title}</div>
                <div className="text-xs text-slate-600 mt-1">{perk.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Collection */}
      <section id="collection" className="bg-beige/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-slate-500">Our Collection</div>
            <h2 className="font-heading text-maroon text-3xl sm:text-4xl mt-2">Handpicked Ready-to-Wear Suits</h2>
            <p className="text-slate-700 mt-3">
              Every piece is designed with premium fabric and detailed embroidery — made for everyday
              elegance and special occasions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlisted={wishlistedIds.includes(p.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="rounded-[30px] overflow-hidden border border-beige/70 shadow-premium">
              <img src={products[2].images[1]} alt="Ss Bridals craftsmanship" className="w-full h-[380px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gold/10 blur-2xl" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500">Why Ss Bridals</div>
            <h2 className="font-heading text-maroon text-3xl sm:text-4xl mt-2">Crafted for the Modern Woman</h2>
            <p className="text-slate-700 mt-4 leading-7">
              At Ss Bridals, every suit is chosen and finished with care — from the fabric to the last
              stitch of embroidery. We keep our collection small and curated so each piece gets the
              attention it deserves, giving you a wardrobe that feels premium, not mass-produced.
            </p>
            <Link
              to="/shop"
              className="inline-flex mt-6 px-6 py-3 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition font-medium"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-beige/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-slate-500">Customer Reviews</div>
            <h2 className="font-heading text-maroon text-3xl sm:text-4xl mt-2">Real Stories, Real Style</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {reviews.map((r) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-3xl border border-beige/80 bg-white shadow-sm"
              >
                <div className="text-gold">{'★'.repeat(r.rating)}</div>
                <div className="font-semibold text-slate-900 mt-2">{r.name}</div>
                <p className="text-sm text-slate-700 mt-2 leading-6">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-slate-500">Style Gallery</div>
          <h2 className="font-heading text-maroon text-3xl sm:text-4xl mt-2">A Closer Look</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
          {products
            .flatMap((p) => p.images.map((img, idx) => ({ img, id: `${p.id}-${idx}`, productId: p.id })))
            .map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.productId}`}
                className="rounded-3xl overflow-hidden border border-beige/70 bg-beige/20 group block"
              >
                <img
                  src={item.img}
                  alt="Ss Bridals style"
                  className="w-full h-32 sm:h-36 object-cover transform transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </Link>
            ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[30px] overflow-hidden border border-beige/70 bg-gradient-to-r from-maroon/5 via-beige/30 to-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500">Newsletter</div>
              <h3 className="font-heading text-maroon text-3xl sm:text-4xl mt-2">Stay in Style</h3>
              <p className="text-slate-700 mt-3">Be first to know about new arrivals and offers.</p>
            </div>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-2xl border border-beige/80 bg-white/70 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button className="px-6 py-3 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition font-medium" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
