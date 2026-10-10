import SectionTitle from "@/components/SectionTitle";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: "About | SMA Negeri 1 Cikarang Barat" };

function Daftar({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="rounded-lg border border-slate-200 px-4 py-3 text-slate-700">{i}</li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-4xl space-y-14 px-4 py-14">
      <header>
        <h1 className="font-display text-4xl font-bold text-brand-900">Tentang {sekolah.nama}</h1>
        <p className="mt-2 text-lg text-slate-600">{sekolah.tagline}</p>
      </header>

      <section>
        <SectionTitle>Profil Sekolah</SectionTitle>
        <p className="leading-relaxed text-slate-700">{sekolah.profil}</p>
      </section>

      <section>
        <SectionTitle>Sejarah</SectionTitle>
        {sekolah.sejarah.map((s) => (
          <p key={s} className="mb-3 leading-relaxed text-slate-700">{s}</p>
        ))}
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionTitle>Visi</SectionTitle>
          <p className="rounded-xl bg-brand-600 p-5 text-white">{sekolah.visi}</p>
        </div>
        <div>
          <SectionTitle>Misi</SectionTitle>
          <ol className="list-decimal space-y-2 pl-5 text-slate-700">
            {sekolah.misi.map((m) => <li key={m}>{m}</li>)}
          </ol>
        </div>
      </section>

      <section><SectionTitle>Fasilitas</SectionTitle><Daftar items={sekolah.fasilitas} /></section>
      <section><SectionTitle>Ekstrakurikuler</SectionTitle><Daftar items={sekolah.ekskul} /></section>
      <section><SectionTitle>Prestasi</SectionTitle><Daftar items={sekolah.prestasi} /></section>

      <section>
        <SectionTitle>Alamat</SectionTitle>
        <address className="rounded-xl bg-gold-50 p-5 not-italic text-slate-700">
          <p className="font-semibold text-brand-900">{sekolah.nama}</p>
          <p>{sekolah.alamat}</p>
          <p>NPSN {sekolah.npsn} · {sekolah.email}</p>
        </address>
      </section>
    </div>
  );
}
