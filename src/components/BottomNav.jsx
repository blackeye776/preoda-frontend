import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navItems = [
  { to: '/', label: 'Drops', icon: '💧' },
  { to: '/shop', label: 'Shop', icon: '🛒' },
  { to: '/resell', label: 'Resell', icon: '♻️' },
  { to: '/profile', label: 'Profile', icon: '👤' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { items } = useCart()

  return (
    <>
      {/* ── Mobile: bottom bar ── */}
      <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-between rounded-t-3xl border border-slate-100 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-xs font-semibold ${isActive ? 'text-violet-600' : 'text-slate-500'}`
            }
          >
            <span>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile: cart FAB */}
      <button
        type="button"
        onClick={() => navigate('/cart')}
        className="fixed bottom-20 right-4 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-lg text-white shadow-xl md:hidden"
        aria-label="Open cart"
      >
        🧺
        {items.length > 0 ? (
          <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-violet-700">
            {items.length}
          </span>
        ) : null}
      </button>

      {/* ── Desktop: left sidebar ── */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col bg-white/10 p-6 shadow-2xl backdrop-blur-md md:flex">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Menu</p>
          <h1 className="text-2xl font-extrabold text-white">Preoda</h1>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => navigate('/cart')}
          className="relative mt-auto flex w-full items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
          aria-label="Open cart"
        >
          <span className="text-xl">🧺</span>
          Cart
          {items.length > 0 ? (
            <span className="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-violet-700">
              {items.length}
            </span>
          ) : null}
        </button>
      </aside>
    </>
  )
}
