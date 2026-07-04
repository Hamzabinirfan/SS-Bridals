import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { formatINR } from '../../utils/format'

export default function QuickViewModal({ product, onClose, onAddToCart, onToggleWishlist, wishlisted }) {
  if (!product) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close quick view"
      />

      <div className="relative h-full flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.98, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 12 }}
          transition={{ duration: 0.18 }}
          className="w-full max-w-4xl rounded-[30px] bg-white border border-beige/70 shadow-premium overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-beige/20">
              <img src={product.images[0]} alt={product.name} className="w-full h-72 md:h-full object-cover" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500">Quick View • {product.category}</div>
                  <h3 className="font-heading text-maroon text-2xl mt-2">{product.name}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-2xl border border-beige/80 hover:bg-beige/30 transition font-semibold"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="text-gold">{'★'.repeat(5)}</div>
                <div className="text-sm text-slate-600">{product.rating.toFixed(1)}</div>
                <span className="ml-auto inline-flex items-center px-3 py-1 rounded-full bg-maroon text-white text-xs font-medium">
                  {product.discountPercent}% OFF
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <div className="text-maroon font-heading text-3xl font-semibold">{formatINR(product.price)}</div>
                    <div className="text-sm text-slate-500 line-through">{formatINR(product.originalPrice)}</div>
                  </div>
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className="px-4 py-2 rounded-2xl border border-beige/80 hover:bg-beige/40 transition font-medium flex items-center gap-2"
                  >
                    <FiHeart className={wishlisted ? 'text-maroon' : 'text-slate-500'} />
                    {wishlisted ? 'Saved' : 'Wishlist'}
                  </button>
                </div>
                <p className="text-slate-700 mt-4 leading-7">{product.description}</p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => onAddToCart(product, 1, { size: product.sizes[0], color: product.colors[0] })}
                  className="py-3 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition font-medium"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="py-3 rounded-2xl border border-beige/80 hover:bg-beige/30 transition font-medium text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

