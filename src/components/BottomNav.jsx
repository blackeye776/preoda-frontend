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
      <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto flex w-full max-w-md justify-between rounded-t-3xl border border-slate-100 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur">
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

      <button
        type="button"
        onClick={() => navigate('/cart')}
        className="fixed bottom-20 right-4 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 text-lg text-white shadow-xl"
        aria-label="Open cart"
      >
        🧺
        {items.length > 0 ? (
          <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-violet-700">
            {items.length}
          </span>
        ) : null}
      </button>
    </>
  )
}
