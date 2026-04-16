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
    <div className="mx-auto min-h-screen w-full max-w-md bg-gradient-to-b from-[#0d1027] via-[#31206a] to-[#ef7f4d] pb-28 text-slate-900">
      <main className="space-y-4 p-4">
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
