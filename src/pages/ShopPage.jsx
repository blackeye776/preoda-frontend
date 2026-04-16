import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { shopProducts } from '../data/mockData'

export default function ShopPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const { addToCart } = useCart()

  const categories = ['All', ...new Set(shopProducts.map((product) => product.category))]

  const products = shopProducts.filter((product) => {
    const categoryMatch = category === 'All' || product.category === category
    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold text-white">Shop</h1>

      <div className="space-y-3 rounded-3xl bg-white p-4 shadow-xl shadow-black/10">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search shop products"
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm"
        >
          {categories.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="space-y-2 rounded-3xl bg-white p-3 shadow-lg shadow-black/10">
            <div className="flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-orange-100 text-5xl">
              📦
            </div>
            <p className="text-sm font-semibold text-slate-900">{product.name}</p>
            <p className="text-sm font-bold text-slate-900">₦{product.price.toLocaleString()}</p>
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="w-full rounded-full bg-violet-600 px-3 py-2 text-xs font-semibold text-white"
            >
              Add to cart
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
