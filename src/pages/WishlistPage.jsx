import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'

export default function WishlistPage({ wishlistedIds, onQuickView, onAddToCart, onToggleWishlist }) {
  const list = products.filter((p) => wishlistedIds.includes(p.id))

  return (
    <div className="bg-white">
      <div className="bg-beige/25 border-b border-beige/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-heading text-maroon text-3xl sm:text-4xl">Wishlist</h1>
          <p className="text-slate-700 mt-3">Your saved premium picks.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {list.length === 0 ? (
          <div className="text-center text-slate-600 py-20">Wishlist is empty.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {list.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                wishlisted={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

