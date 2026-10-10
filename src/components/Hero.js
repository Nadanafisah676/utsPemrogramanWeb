import Link from "next/link";
import { sekolah } from "@/data/sekolah";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-600 text-white">
      <img src={sekolah.heroImage} alt="Gedung sekolah" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25 mix-blend-multiply" />
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <img src={sekolah.logo} alt="Logo" className="mb-6 h-24 w-24 rounded-2xl bg-white object-contain p-1.5" />
        <h1 className="font-display text-4xl font-bold md:text-6xl">{sekolah.nama}</h1>
        <p className="mt-4 max-w-xl text-lg text-white/90">{sekolah.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/about" className="rounded-lg bg-gold-400 px-5 py-3 font-semibold text-brand-950 hover:bg-gold-300">
            Kenali Sekolah Kami
          </Link>
          <Link href="/berita" className="rounded-lg border-2 border-white px-5 py-3 font-semibold hover:bg-white hover:text-brand-700">
            Lihat Berita
          </Link>
        </div>
      </div>
    </section>
  );
}
