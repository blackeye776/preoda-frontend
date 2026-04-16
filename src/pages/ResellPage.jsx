import { useState } from 'react'
import { resellListings } from '../data/mockData'

export default function ResellPage() {
  const [listings, setListings] = useState(resellListings)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [condition, setCondition] = useState('Fairly Used')

  const handleCreateListing = (event) => {
    event.preventDefault()
    if (!title.trim() || !price) {
      return
    }

    setListings((current) => [
      {
        id: `res-${current.length + 1}`,
        title,
        price: Number(price),
        condition,
        seller: 'You',
        image: '🧾',
      },
      ...current,
    ])

    setTitle('')
    setPrice('')
    setCondition('Fairly Used')
  }

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold text-white">Resell Marketplace</h1>

      <form onSubmit={handleCreateListing} className="space-y-3 rounded-3xl bg-white p-4 shadow-xl shadow-black/10">
        <h2 className="text-sm font-bold text-slate-900">Create Listing</h2>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Item title"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Price"
          type="number"
          min="1"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <select
          value={condition}
          onChange={(event) => setCondition(event.target.value)}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option>New</option>
          <option>Fairly Used</option>
          <option>Used</option>
        </select>
        <button type="submit" className="w-full rounded-full bg-gradient-to-r from-violet-600 to-orange-500 py-2 text-sm font-semibold text-white">
          Post Listing
        </button>
      </form>

      <div className="space-y-3">
        {listings.map((listing) => (
          <article key={listing.id} className="rounded-3xl bg-white p-4 shadow-lg shadow-black/10">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl">{listing.image}</div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{listing.title}</h3>
                <p className="text-xs text-slate-500">Seller: {listing.seller}</p>
              </div>
            </div>
            <p className="text-sm font-bold text-slate-900">₦{listing.price.toLocaleString()}</p>
            <p className="mt-1 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              {listing.condition}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
