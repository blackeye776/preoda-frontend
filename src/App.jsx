import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import { CartProvider } from './context/CartContext'
import CartPage from './pages/CartPage'
import DropsPage from './pages/DropsPage'
import ProfilePage from './pages/ProfilePage'
import ResellPage from './pages/ResellPage'
import ShopPage from './pages/ShopPage'

function AppShell() {
  const [selectedLocation, setSelectedLocation] = useState('Port Harcourt')

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0d1027] via-[#31206a] to-[#ef7f4d] text-slate-900">
      <main className="pb-28 md:ml-64 md:pb-8">
        <div className="mx-auto max-w-6xl space-y-4 p-4 md:p-8">
        <Routes>
          <Route
            path="/"
            element={
              <DropsPage
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
              />
            }
          />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/resell" element={<ResellPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  )
}
