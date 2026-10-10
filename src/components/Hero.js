import Link from "next/link";
import { sekolah } from "@/data/sekolah";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-800 text-white">
      {/* Foto sekolah sebagai latar */}
      <img
        src={sekolah.heroImage}
        alt={`Foto ${sekolah.nama}`}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Lapisan biru agar teks terbaca */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,39,72,0.92) 0%, rgba(11,79,133,0.78) 50%, rgba(6,120,200,0.35) 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-24 md:py-36">
        <img
          src={sekolah.logo}
          alt="Logo"
          className="mb-6 h-24 w-24 rounded-2xl bg-white object-contain p-1.5"
        />
        <h1 className="font-display max-w-2xl text-4xl font-bold md:text-6xl">{sekolah.nama}</h1>
        <p className="mt-4 max-w-xl text-lg text-white/90">{sekolah.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-lg bg-gold-400 px-5 py-3 font-semibold text-brand-950 hover:bg-gold-300"
          >
            Kenali Sekolah Kami
          </Link>
          <Link
            href="/berita"
            className="rounded-lg border-2 border-white px-5 py-3 font-semibold hover:bg-white hover:text-brand-700"
          >
            Lihat Berita
          </Link>
        </div>
      </div>
    </section>
  );
}