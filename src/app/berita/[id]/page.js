import Link from "next/link";
import { notFound } from "next/navigation";
import { berita } from "@/data/sekolah";

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const item = berita.find((b) => b.id === id);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-3xl font-bold leading-tight text-brand-900 md:text-4xl">{item.judul}</h1>
      <time className="mt-2 block text-sm text-slate-500">{item.tanggal}</time>
      <img src={item.gambar} alt={item.judul} className="mt-6 aspect-video w-full rounded-xl object-cover" />
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        {item.isi.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <p className="mt-6 text-sm text-slate-500">
        Sumber:{" "}
        <a href={item.sumber} target="_blank" rel="noreferrer" className="underline hover:text-brand-800">
          situs resmi sekolah
        </a>
      </p>
      <Link href="/berita" className="mt-10 inline-block rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700">
        Kembali ke Berita
      </Link>
    </article>
  );
}
