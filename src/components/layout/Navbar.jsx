import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FiSearch, FiShoppingBag, FiHeart, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    navigate(`/shop?search=${encodeURIComponent(query.trim())}`)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-beige flex items-center justify-center shadow-premium border border-gold/30">
              <span className="text-maroon font-semibold">S</span>
            </div>
            <div>
              <div className="font-heading text-maroon text-lg leading-tight">Ss Bridals</div>
              <div className="text-xs text-slate-600">Ethnic Wear • Premium</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition ${
                    isActive ? 'text-maroon bg-beige/50' : 'text-slate-700 hover:bg-beige/30'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <form onSubmit={onSubmit} className="hidden md:flex items-center gap-2 flex-1 max-w-sm">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-beige/80 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Search suits..."
              />
            </div>
          </form>

          <div className="flex items-center gap-3">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                `p-2 rounded-xl border transition ${
                  isActive ? 'border-gold/60 bg-beige/40' : 'border-beige/80 hover:bg-beige/30'
                }`
              }
              aria-label="Wishlist"
            >
              <FiHeart className="text-maroon" />
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `p-2 rounded-xl border transition ${
                  isActive ? 'border-gold/60 bg-beige/40' : 'border-beige/80 hover:bg-beige/30'
                }`
              }
              aria-label="Cart"
            >
              <FiShoppingBag className="text-maroon" />
            </NavLink>
            <button
              className="lg:hidden p-2 rounded-xl border border-beige/80 hover:bg-beige/30 transition"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <FiX className="text-maroon" /> : <FiMenu className="text-maroon" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-beige/80 bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Search suits..."
                />
              </div>
            </form>
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-medium transition ${
                      isActive ? 'text-maroon bg-beige/50' : 'text-slate-700 hover:bg-beige/30'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
