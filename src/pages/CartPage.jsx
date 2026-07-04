import { useMemo } from 'react'
import { formatINR } from '../utils/format'

export default function CartPage({ cart, setCart }) {
  const subtotal = useMemo(() => cart.reduce((sum, it) => sum + it.product.price * it.qty, 0), [cart])

  function inc(idx) {
    setCart((c) => c.map((it, i) => (i === idx ? { ...it, qty: it.qty + 1 } : it)))
  }
  function dec(idx) {
    setCart((c) => c.map((it, i) => (i === idx ? { ...it, qty: Math.max(1, it.qty - 1) } : it)))
  }
  function remove(idx) {
    setCart((c) => c.filter((_, i) => i !== idx))
  }

  return (
    <div className="bg-white">
      <div className="bg-beige/25 border-b border-beige/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-heading text-maroon text-3xl sm:text-4xl">Your Cart</h1>
          <p className="text-slate-700 mt-3">Review your selected items before checkout.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.length === 0 ? (
              <div className="text-center text-slate-600 py-20">Cart is empty.</div>
            ) : (
              <div className="space-y-5">
                {cart.map((it, idx) => (
                  <div key={`${it.product.id}-${idx}`} className="rounded-3xl border border-beige/70 bg-beige/20 p-5 flex gap-5">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden border border-beige/70 bg-white/60 flex-shrink-0">
                      <img src={it.product.images[0]} alt={it.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">{it.product.name}</div>
                      <div className="text-sm text-slate-600 mt-1">Size: {it.variant?.size} • Color: {it.variant?.color}</div>
                      <div className="text-maroon font-semibold mt-2">{formatINR(it.product.price)}</div>
                      <div className="flex items-center gap-3 mt-4">
                        <button className="w-10 h-10 rounded-2xl border border-beige/80 hover:bg-beige/30 transition font-semibold" onClick={() => dec(idx)}>-</button>
                        <div className="min-w-[40px] text-center font-semibold">{it.qty}</div>
                        <button className="w-10 h-10 rounded-2xl border border-beige/80 hover:bg-beige/30 transition font-semibold" onClick={() => inc(idx)}>+</button>
                        <button className="ml-auto text-sm text-maroon hover:underline" onClick={() => remove(idx)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-3xl border border-beige/70 bg-white p-5 shadow-premium sticky top-24">
              <div className="font-semibold text-slate-900">Order Summary</div>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatINR(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold">{formatINR(0)}</span>
                </div>
              </div>
              <div className="border-t border-beige/70 my-4" />
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-maroon font-heading text-2xl font-semibold">{formatINR(subtotal)}</span>
              </div>

              <div className="mt-6">
                <div className="font-semibold text-slate-900">Coupon</div>
                <div className="mt-3 flex gap-2">
                  <input className="flex-1 px-4 py-2 rounded-xl border border-beige/80 bg-white focus:outline-none" placeholder="Enter code" />
                  <button className="px-4 py-2 rounded-xl bg-beige/40 border border-beige/80 font-medium">Apply</button>
                </div>
              </div>

              <button className="mt-6 w-full py-3 rounded-2xl bg-maroon text-white hover:bg-maroon/90 transition font-medium" disabled={cart.length === 0}>
                Checkout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

