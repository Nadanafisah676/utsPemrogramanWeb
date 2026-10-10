import Link from "next/link";
import { sekolah } from "@/data/sekolah";

export default function Footer() {
  return (
    <footer className="mt-20 border-t-4 border-gold-400 bg-brand-800 text-brand-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold text-gold-300">{sekolah.nama}</h3>
          <p className="mt-2 text-sm text-brand-100">{sekolah.tagline}</p>
        </div>
        <div className="text-sm leading-relaxed">
          <p>{sekolah.alamat}</p>
          <p>NPSN {sekolah.npsn}</p>
          <p>{sekolah.email}</p>
        </div>
        <ul className="space-y-1 text-sm">
          <li><Link href="/" className="hover:text-gold-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gold-300">About</Link></li>
          <li><Link href="/berita" className="hover:text-gold-300">Berita</Link></li>
        </ul>
      </div>
      <p className="border-t border-brand-600 bg-brand-900 py-4 text-center text-xs text-brand-200">
        © 2026 {sekolah.nama}. Hak cipta dilindungi.
      </p>
    </footer>
  );
}
