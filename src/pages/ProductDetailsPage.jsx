import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'
import { formatINR } from '../utils/format'

export default function ProductDetailsPage({ onQuickView, onAddToCart, onToggleWishlist, wishlistedIds }) {
  const { id } = useParams()
  const product = useMemo(() => products.find((p) => p.id === id) || products[0], [id])
  const related = useMemo(() => products.filter((p) => p.id !== product.id), [product])

  const [size, setSize] = useState(product.sizes[0])
  const [color, setColor] = useState(product.colors[0])
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setSize(product.sizes[0])
    setColor(product.colors[0])
    setQty(1)
    setActiveImage(0)
  }, [product])

  return (
    <div className="bg-white">
      <div className="bg-beige/25 border-b border-beige/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-xs text-slate-500">Home / Shop / {product.category}</div>
          <h1 className="font-heading text-maroon text-3xl sm:text-4xl mt-2">{product.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="rounded-[30px] overflow-hidden border border-beige/70 bg-beige/20 shadow-premium">
              <img src={product.images[activeImage]} alt={product.name} className="w-full h-[420px] object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`rounded-2xl overflow-hidden border bg-white/60 transition ${
                    activeImage === idx ? 'border-maroon ring-2 ring-maroon/30' : 'border-beige/70 hover:border-gold/60'
                  }`}
                >
                  <img src={img} alt={`${product.name}-${idx}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-gold">{'★'.repeat(5)}</div>
                <div className="text-sm text-slate-600 mt-1">Rating: {product.rating.toFixed(1)}</div>
              </div>
              <button
                onClick={() => onToggleWishlist(product)}
                className="px-4 py-2 rounded-2xl border border-beige/80 hover:bg-beige/40 transition font-medium"
              >
                {wishlistedIds.includes(product.id) ? 'Wishlisted' : 'Add to Wishlist'}
              </button>
            </div>

            <div className="rounded-3xl border border-beige/70 bg-beige/20 p-5">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-maroon font-heading text-3xl font-semibold">{formatINR(product.price)}</div>
                  <div className="text-sm text-slate-500 line-through">{formatINR(product.originalPrice)}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-maroon text-white text-xs font-medium">{product.discountPercent}% OFF</div>
              </div>
              <p className="text-slate-700 mt-4 leading-7">{product.description}</p>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900 mb-2">Available Sizes</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 rounded-2xl border transition text-sm ${
                      size === s ? 'border-maroon bg-beige/40 text-maroon' : 'border-beige/80 bg-white/70 hover:bg-beige/30'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-slate-900 mb-2">Available Colors</div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 rounded-2xl border transition text-sm ${
                      color === c ? 'border-maroon bg-beige/40 text-maroon' : 'border-beige/80 bg-white/70 hover:bg-beige/30'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-900">Quantity</div>
                <div className="text-xs text-slate-500 mt-1">Selected: {size} • {color}</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-2xl border border-beige/80 hover:bg-beige/30 transition font-semibold"
                >
                  -
                </button>
                <div className="min-w-[40px] text-center font-semibold text-slate-900">{qty}</div>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 rounded-2xl border border-beige/80 hover:bg-beige/30 transition font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => onAddToCart(product, qty, { size, color })}
                className="py-3 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition font-medium"
              >
                Add to Cart
              </button>
              <button
                onClick={() => onAddToCart(product, qty, { size, color })}
                className="py-3 rounded-2xl border border-beige/80 hover:bg-beige/30 transition font-medium"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-beige/70">
            <div className="text-xs uppercase tracking-widest text-slate-500">You May Also Like</div>
            <h2 className="font-heading text-maroon text-2xl sm:text-3xl mt-2">More From the Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {related.map((p) => (
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
        )}
      </div>
    </div>
  )
}

