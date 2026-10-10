import Link from "next/link";

export default function BeritaCard({ item }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg">
      <img src={item.gambar} alt={item.judul} className="aspect-video w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs font-medium text-slate-500">{item.tanggal}</time>
        <h3 className="font-display mt-1 text-lg font-bold leading-snug text-brand-900">{item.judul}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{item.ringkasan}</p>
        <Link
          href={`/berita/${item.id}`}
          className="mt-4 inline-block self-start rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}
