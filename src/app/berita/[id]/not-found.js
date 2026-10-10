import Link from "next/link";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-brand-900">Berita tidak ditemukan</h1>
      <Link href="/berita" className="mt-6 inline-block font-semibold text-brand-800 underline">Kembali ke daftar berita</Link>
    </div>
  );
}
