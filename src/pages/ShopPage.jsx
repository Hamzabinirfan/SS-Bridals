import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated']

export default function ShopPage({ onQuickView, onAddToCart, onToggleWishlist, wishlistedIds }) {
  const [searchParams] = useSearchParams()
  const search = (searchParams.get('search') || '').toLowerCase()

  const [sort, setSort] = useState(sortOptions[0])

  const filtered = useMemo(() => {
    let list = products
    if (search) {
      list = list.filter((p) =>
        [p.name, p.category].some((t) => t.toLowerCase().includes(search))
      )
    }

    if (sort === 'Price: Low to High') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'Top Rated') list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [search, sort])

  return (
    <div className="bg-white">
      <div className="bg-beige/25 border-b border-beige/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500">Shop</div>
              <h1 className="font-heading text-maroon text-3xl sm:text-4xl mt-2">Our Products</h1>
              <p className="text-slate-700 mt-3">{filtered.length} items • Premium ready-to-wear suits.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-600">Sort</div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2 rounded-xl border border-beige/80 bg-white/70 focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                {sortOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center text-slate-600 py-20">No products match your search.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
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
        )}
      </div>
    </div>
  )
}
