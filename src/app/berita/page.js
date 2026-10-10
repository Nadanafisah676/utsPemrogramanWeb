import BeritaCard from "@/components/BeritaCard";
import SectionTitle from "@/components/SectionTitle";
import { berita } from "@/data/sekolah";

export const metadata = { title: "Berita | SMA Negeri 1 Cikarang Barat" };

export default function BeritaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle sub="Kegiatan, prestasi, dan pengumuman sekolah.">Berita Sekolah</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {berita.map((b) => (
          <BeritaCard key={b.id} item={b} />
        ))}
      </div>
    </div>
  );
}
