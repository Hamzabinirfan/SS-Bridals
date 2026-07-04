import { useMemo } from 'react'
import { FiHeart } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { formatINR } from '../../utils/format'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, onQuickView, onAddToCart, onToggleWishlist, wishlisted }) {

  const discountText = useMemo(() => `${product.discountPercent}% OFF`, [product.discountPercent])

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-3xl border border-beige/70 bg-white overflow-hidden shadow-sm hover:shadow-premium transition"
    >
      <div className="relative">
        <button
          onClick={() => onToggleWishlist(product)}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-2xl border border-beige/80 bg-white/80 backdrop-blur flex items-center justify-center hover:bg-beige/40 transition"
          aria-label="Wishlist"
        >
          <FiHeart className={`text-maroon ${wishlisted ? 'fill-maroon' : ''}`} />
        </button>

        <Link to={`/product/${product.id}`} className="aspect-[4/5] bg-beige/20 overflow-hidden block">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            loading="lazy"
          />
        </Link>


        <div className="absolute left-3 bottom-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-maroon text-white text-xs font-medium">
            {discountText}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm text-slate-600">{product.category}</div>
            <div className="font-medium text-slate-900 mt-1 group-hover:text-maroon transition line-clamp-2">
              {product.name}
            </div>
          </div>
          <div className="text-right">
            <div className="text-maroon font-semibold">{formatINR(product.price)}</div>
            <div className="text-xs text-slate-500 line-through">{formatINR(product.originalPrice)}</div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <div className="text-gold">{'★'.repeat(Math.floor(product.rating))}</div>
            <div className="text-xs text-slate-600">{product.rating.toFixed(1)}</div>
          </div>
          <span className="text-xs text-slate-500">{product.badge}</span>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 py-2 rounded-2xl border border-beige/90 bg-white hover:bg-beige/30 transition font-medium"
          >
            Quick View
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 py-2 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition font-medium"
          >
            Add
          </button>
        </div>
      </div>
    </motion.div>
  )
}

