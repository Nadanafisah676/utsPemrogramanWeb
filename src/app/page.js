import Link from "next/link";
import Hero from "@/components/Hero";
import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { sekolah, berita } from "@/data/sekolah";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <SectionTitle>Sambutan Kepala Sekolah</SectionTitle>
          <p className="leading-relaxed text-slate-700">{sekolah.sambutan}</p>
          <p className="mt-4 font-semibold text-brand-900">{sekolah.kepalaSekolah}</p>
        </div>
        <div className="rounded-2xl bg-gold-50 p-6">
          <h3 className="font-display text-xl font-bold text-brand-900">Tentang Singkat</h3>
          <p className="mt-2 text-slate-700">{sekolah.profil}</p>
          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div><dt className="text-slate-500">NPSN</dt><dd className="text-xl font-bold text-brand-900">{sekolah.npsn}</dd></div>
            <div><dt className="text-slate-500">Luas lahan</dt><dd className="text-xl font-bold text-brand-900">{sekolah.luas}</dd></div>
          </dl>
          <Link href="/about" className="mt-5 inline-block font-semibold text-brand-800 underline hover:text-brand-950">
            Selengkapnya tentang sekolah
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle sub="Kabar terbaru dari lingkungan sekolah.">Berita Terbaru</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {berita.slice(0, 3).map((b) => (
            <BeritaCard key={b.id} item={b} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/berita" className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">
            Semua Berita
          </Link>
        </div>
      </section>
    </>
  );
}
