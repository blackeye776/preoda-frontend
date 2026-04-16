import { useState } from 'react'
import CampaignCard from '../components/CampaignCard'
import { campaignData, trustIndicators } from '../data/mockData'

export default function DropsPage({ selectedLocation, setSelectedLocation }) {
  const [search, setSearch] = useState('')

  const filteredCampaigns = campaignData.filter((campaign) =>
    `${campaign.title} ${campaign.host}`.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <section className="space-y-5">
      <header className="rounded-3xl bg-white p-4 shadow-xl shadow-black/10">
        <div className="mb-4 flex items-center justify-between">
          <select
            value={selectedLocation}
            onChange={(event) => setSelectedLocation(event.target.value)}
            className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700"
            aria-label="Select location"
          >
            <option>Port Harcourt</option>
            <option>Worldwide</option>
          </select>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs text-slate-500">Hello, Adaeze 👋</p>
              <p className="text-sm font-bold text-slate-900">Ready for Friday Drops?</p>
            </div>
            <div className="relative h-10 w-10 rounded-full bg-slate-200">
              <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-orange-500" />
            </div>
          </div>
        </div>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search campaigns, products, creators..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-violet-500 placeholder:text-slate-400 focus:ring"
        />
      </header>

      <article className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-fuchsia-600 to-orange-500 p-5 text-white shadow-xl shadow-black/20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured</p>
            <h2 className="text-2xl font-extrabold">Friday Drops</h2>
            <p className="mt-1 text-sm text-white/85">Join trending campaigns before slots run out.</p>
            <button type="button" className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-violet-700">
              Shop Now
            </button>
          </div>
          <div className="text-7xl">🛍️</div>
        </div>
      </article>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Hot Campaigns</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {filteredCampaigns.map((campaign, index) => (
            <CampaignCard key={campaign.id} campaign={campaign} index={index} />
          ))}
        </div>
      </section>

      <section className="space-y-2 rounded-3xl bg-white p-4 shadow-xl shadow-black/10">
        {trustIndicators.map((indicator) => (
          <p key={indicator} className="text-sm font-semibold text-slate-700">
            ✅ {indicator}
          </p>
        ))}
      </section>

      <p className="rounded-2xl bg-white/85 p-4 text-sm font-medium text-slate-700 shadow-lg shadow-black/10">
        🔥 126 people joined campaigns today in {selectedLocation}
      </p>
    </section>
  )
}
