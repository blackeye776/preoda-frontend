import CountdownTimer from './CountdownTimer'

const cardDecorations = ['from-violet-200 to-orange-100', 'from-indigo-200 to-amber-100']

export default function CampaignCard({ campaign, index }) {
  const progress = Math.round((campaign.filled / campaign.total) * 100)

  return (
    <article className="space-y-3 rounded-3xl bg-white p-4 shadow-xl shadow-black/10">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {campaign.badge}
        </span>
        <CountdownTimer endAt={campaign.endAt} />
      </div>

      <div className={`flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br ${cardDecorations[index % cardDecorations.length]}`}>
        <span className="text-6xl">🛍️</span>
      </div>

      <div>
        <h3 className="text-base font-bold text-slate-900">{campaign.title}</h3>
        <p className="text-lg font-bold text-slate-900">₦{campaign.price.toLocaleString()}</p>
      </div>

      <p className="text-xs text-slate-500">📍 {campaign.location}</p>

      <p className="flex items-center gap-2 text-xs font-medium text-slate-600">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-700">
          {campaign.hostAvatar}
        </span>
        {campaign.host}
      </p>

      <div className="h-2 overflow-hidden rounded-full bg-violet-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-700"
          style={{ width: `${progress}%` }}
          aria-label="campaign progress"
        />
      </div>

      <p className="text-xs font-semibold text-slate-500">
        {campaign.filled}/{campaign.total} filled · Almost there!
      </p>
    </article>
  )
}
