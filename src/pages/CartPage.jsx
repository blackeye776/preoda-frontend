import { profileData } from '../data/mockData'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, setQuantity, total } = useCart()
  const walletAfterCheckout = profileData.walletBalance - total

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold text-white">Cart</h1>

      <article className="rounded-3xl bg-white p-4 shadow-xl shadow-black/10">
        <p className="text-xs text-slate-500">Wallet Balance</p>
        <p className="text-2xl font-bold text-slate-900">₦{profileData.walletBalance.toLocaleString()}</p>
      </article>

      <div className="space-y-3">
        {items.length === 0 ? (
          <p className="rounded-3xl bg-white p-4 text-sm text-slate-600 shadow-lg shadow-black/10">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <article key={item.id} className="rounded-3xl bg-white p-4 shadow-lg shadow-black/10">
              <p className="text-sm font-bold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">₦{item.price.toLocaleString()}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(item.id, item.quantity - 1)}
                    className="h-6 w-6 rounded-full bg-slate-100 text-sm"
                    aria-label={`Decrease ${item.name}`}
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(item.id, item.quantity + 1)}
                    className="h-6 w-6 rounded-full bg-slate-100 text-sm"
                    aria-label={`Increase ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <p className="text-sm font-bold text-slate-900">₦{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </article>
          ))
        )}
      </div>

      <article className="space-y-2 rounded-3xl bg-white p-4 shadow-xl shadow-black/10">
        <p className="flex items-center justify-between text-sm text-slate-600">
          <span>Total</span>
          <span className="font-bold text-slate-900">₦{total.toLocaleString()}</span>
        </p>
        <p className="flex items-center justify-between text-xs text-slate-500">
          <span>Wallet after checkout</span>
          <span className={walletAfterCheckout < 0 ? 'font-semibold text-red-500' : 'font-semibold text-emerald-600'}>
            ₦{walletAfterCheckout.toLocaleString()}
          </span>
        </p>
        <button
          type="button"
          className="w-full rounded-full bg-gradient-to-r from-violet-600 to-orange-500 py-2 text-sm font-semibold text-white disabled:opacity-50"
          disabled={items.length === 0 || walletAfterCheckout < 0}
        >
          Checkout
        </button>
      </article>
    </section>
  )
}
