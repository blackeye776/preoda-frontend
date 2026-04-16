import { profileData } from '../data/mockData'

export default function ProfilePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold text-white">Profile</h1>

      <article className="rounded-3xl bg-white p-5 shadow-xl shadow-black/10">
        <p className="text-xs text-slate-500">Wallet Balance</p>
        <p className="mt-1 text-3xl font-extrabold text-slate-900">₦{profileData.walletBalance.toLocaleString()}</p>
      </article>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <article className="rounded-2xl bg-white p-4 shadow-lg shadow-black/10">
          <p className="text-xs text-slate-500">Order History</p>
          <p className="text-2xl font-bold text-slate-900">{profileData.orderHistory}</p>
        </article>
        <article className="rounded-2xl bg-white p-4 shadow-lg shadow-black/10">
          <p className="text-xs text-slate-500">Joined Drops</p>
          <p className="text-2xl font-bold text-slate-900">{profileData.joinedDrops}</p>
        </article>
        <article className="rounded-2xl bg-white p-4 shadow-lg shadow-black/10">
          <p className="text-xs text-slate-500">Followed Hosts</p>
          <p className="text-2xl font-bold text-slate-900">{profileData.followedHosts}</p>
        </article>
        <article className="rounded-2xl bg-white p-4 shadow-lg shadow-black/10">
          <p className="text-xs text-slate-500">Resell Activity</p>
          <p className="text-2xl font-bold text-slate-900">{profileData.resellActivity}</p>
        </article>
      </div>
    </section>
  )
}
