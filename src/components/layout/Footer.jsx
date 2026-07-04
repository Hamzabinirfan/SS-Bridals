import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-beige/40 border-t border-beige/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-heading text-maroon text-xl mb-2">Ss Bridals</div>
            <p className="text-sm text-slate-700 leading-6">
              Premium Indian ethnic wear curated for modern women.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <a
                href="https://wa.me/919811403097"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-maroon transition block"
              >
                💬 WhatsApp: +91 98114 03097
              </a>
              <div className="leading-5">
                📍 69G7+G3Q, Hospital Rd, near Veterinary Hospital, Shahjada Market, Naya Bazar,
                Babhnauli, Siwan, Bihar 841226
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold text-slate-800 mb-3">Shop</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <Link to="/" className="hover:text-maroon transition">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-maroon transition">All Products</Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-maroon transition">Wishlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-slate-800 mb-3">Help</div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <Link to="/faq" className="hover:text-maroon transition">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-maroon transition">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-maroon transition">Privacy</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-slate-800 mb-3">Newsletter</div>
            <p className="text-sm text-slate-700 mb-3">Get premium drops and festive styling tips.</p>
            <div className="flex gap-2">
              <input
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-xl border border-beige/80 bg-white/70 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button className="px-4 py-2 rounded-xl bg-maroon text-white hover:bg-maroon/90 transition font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-beige/70 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600">© {new Date().getFullYear()} Ss Bridals. All rights reserved.</div>
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <Link to="/terms" className="hover:text-maroon transition">Terms</Link>
            <span className="opacity-60">•</span>
            <Link to="/privacy" className="hover:text-maroon transition">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

