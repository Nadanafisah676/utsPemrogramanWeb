// Data diambil dari https://sman1cikarangbarat.sch.id/
// Bagian bertanda TODO tidak ada di situs sekolah, silakan isi sendiri.
const U = "https://sman1cikarangbarat.sch.id/wp-content/uploads";

export const sekolah = {
  nama: "SMA Negeri 1 Cikarang Barat",
  singkat: "SMAN 1 Cikarang Barat",
  tagline: "Terwujudnya Generasi Berkarakter Mulia dan Cerdas Berprestasi",
  logo: "/logo.jpeg",
  heroImage: "/sekolah.jpg",
  alamat: "Perum Telaga Harapan Blok D, Kec. Cikarang Barat, Kab. Bekasi, Jawa Barat 17520",
  npsn: "20237986",
  email: "sman1cikbar@gmail.com",
  luas: "4.488 m²",
  kepalaSekolah: "Deny Ermayana, S.Pd., M.M.",
  // TODO: ganti dengan sambutan asli dari halaman Editorial Kepala Sekolah
  sambutan:
    "Terwujudnya Generasi Berkarakter Mulia dan Cerdas Berprestasi",
  profil:
    "SMA Negeri 1 Cikarang Barat berada di Perumahan Telaga Harapan, Kabupaten Bekasi bagian barat, dengan luas lahan 4.488 m². Lokasinya berdekatan dengan terminal bus kota dan antarkota, sekitar 2.000 m dari sekolah.",
  sejarah: [
    "Secara yuridis, sekolah berdiri berdasarkan SK Bupati Bekasi Nomor 421/Kep.112/Disdik 2005 yang menetapkan pendirian dan pembukaan SMA Negeri 1 Cikarang Barat.",
    "Pada awal tahun ajaran 2003/2004, pengelolaan dan pembinaan sekolah diserahkan kepada SMA Negeri 1 Tambun Selatan. Kepala sekolah dirangkap oleh Drs. H. Babay Hudori, M.M.",
    "Pada masa itu kegiatan belajar menempati gedung SMA Negeri 1 Tambun Selatan dan masuk siang hari.",
  ],
  // TODO: ganti dengan visi dan misi resmi sekolah
  visi: "Insan Agamis, Berprestasi, kreatif, BerkeArifan Lokal, dan Berwawasan Global",
  misi: [
    "Meningkatkan perilaku warga sekolah dalam memberikan keteladan untuk memahami, meyakini, dan mentaati ajaran agamanya.",
    "Mengembangkan potensi warga sekolah dalam meraih prestasi di bidang akademik dengan mengopitmalkan fasilitas sekolah",
    "Meningkatkan pembinaan yang intensif melalui kegiatan ekstrakurikuler dan menumbuhkembangkan minat, dan bakat siswa secara optimal.",
    "Meningkatkan kreatifitas dan interpreneurship warga sekolah dalam menerapkan ilmu pengetahuan yang telah diperolehnya.",
    "Meningkatkan kepedulian, dan kecintaan warga sekolah terhadap budaya bangsa sebagai sumber kearifan dalam bertindak.",
    "Meningkatkan kemampuan berbahasa Asing dan Informatika Komunikasi dan Teknologi (ICT).",
  ],
  fasilitas: ["Masjid Al-Muhajirin", "Lapangan Serbaguna", "Ruang Laboratorium Kimia"],
  ekskul: ["Marching Band", "Panthera", "Badminton", "Futsal", "IRMA", "KIR", "Voli", "Pencak Silat", "Taekwondo", "SSN", "Basket", "SEC", "PMR"],
  prestasi: [
    "Kejuaraan Antar 5 Provinsi: Taekwondo Championship Bekasi Open 2",
    "Perlombaan FLAMMA CUP 2025, Sekolah Dian Harapan Cikarang",
    "Perlombaan LKBB Lokasi 20 Tingkat SMA/SMK Jawa Barat (Open)",
    "Perlombaan Galang Prestasi 14 Petaharaka 8 se-Jawa Barat, DKI Jakarta & Banten",
    "Kejuaraan antar SMA/SMK se-Jabodetabek di SMAN 7 Kota Bekasi",
  ],
};

const SUMBER = "https://sman1cikarangbarat.sch.id/";

export const berita = [
  { id: "kelulusan-spmb-2026-tahap-2", judul: "Pengumuman Kelulusan SPMB 2026 Tahap 2", tanggal: "10 Juli 2026",
    gambar: "/berita1.png",
    ringkasan: "SMAN 1 Cikarang Barat mengumumkan hasil seleksi SPMB 2026 tahap 2 untuk calon peserta didik baru.",
    isi: ["SMAN 1 Cikarang Barat mengumumkan kelulusan SPMB 2026 tahap 2.", "Calon peserta didik yang dinyatakan lolos dapat mengikuti informasi daftar ulang yang diumumkan sekolah.", "Daftar nama dan jadwal lengkap tersedia pada pengumuman resmi di situs sekolah."],
    sumber: SUMBER + "pengumuman/pengumuman-kelulusan-spmb-2026-tahap-2-sman-1-cikarang-barat/" },
  { id: "kelulusan-spmb-2026-tahap-1", judul: "Pengumuman Kelulusan SPMB 2026 Tahap 1", tanggal: "25 Juni 2026",
    gambar: "/berita2.png",
    ringkasan: "Hasil seleksi SPMB 2026 tahap 1 sudah diumumkan, disusul informasi daftar ulang.",
    isi: ["SMAN 1 Cikarang Barat mengumumkan kelulusan SPMB 2026 tahap 1.", "Informasi daftar ulang bagi peserta yang lolos diumumkan melalui situs sekolah.", "Daftar lengkap tersedia pada pengumuman resmi di situs sekolah."],
    sumber: SUMBER + "pengumuman/pengumuman-kelulusan-tahap-1-spmb-2026/" },
  { id: "kelulusan-kelas-xii-2026", judul: "Pengumuman Kelulusan Kelas XII Tahun Ajaran 2026", tanggal: "4 Mei 2026",
    gambar: "/berita3.jpg",
    ringkasan: "Sekolah mengumumkan kelulusan siswa kelas XII untuk tahun ajaran 2026.",
    isi: ["SMAN 1 Cikarang Barat mengumumkan kelulusan siswa kelas XII tahun ajaran 2026.", "Informasi lengkap disampaikan melalui pengumuman resmi sekolah."],
    sumber: SUMBER + "pengumuman/pengumuman-kelulusan-tahun-ajaran-2026/" },
  { id: "peserta-osnk-2025", judul: "Peserta yang Lolos untuk Mengikuti OSNK SMAN 1 Cikarang Barat Tahun 2025", tanggal: "25 Mei 2025",
    gambar: "/berita4.png",
    ringkasan: "Daftar siswa SMAN 1 Cikarang Barat yang lolos seleksi untuk mengikuti OSNK 2025.",
    isi: ["Sekolah mengumumkan daftar siswa yang lolos seleksi untuk mengikuti OSNK tahun 2025.", "Nama-nama peserta dapat dilihat pada artikel resmi di situs sekolah."],
    sumber: SUMBER + "peserta-yang-lolos-untuk-mengikuti-osk-sman-1-cikarang-barat-tahun-2025/" },
  { id: "peserta-fls3n", judul: "Daftar Peserta yang Akan Ikut FLS3N", tanggal: "25 Mei 2025",
    gambar: "/berita5.png",
    ringkasan: "Sekolah merilis daftar siswa yang akan mewakili SMAN 1 Cikarang Barat di ajang FLS3N.",
    isi: ["Sekolah merilis daftar peserta yang akan mengikuti Festival dan Lomba Seni Siswa Nasional (FLS3N).", "Rincian cabang lomba dan nama peserta tersedia pada artikel resmi di situs sekolah."],
    sumber: SUMBER + "daftar-peserta-yang-akan-ikut-fls3n/" },
  { id: "taekwondo-championship", judul: "Kejuaraan Antar 5 Provinsi: Taekwondo Championship Bekasi Open 2", tanggal: "Mei 2025",
    gambar: "/berita6.jpg",
    ringkasan: "Siswa SMAN 1 Cikarang Barat ikut serta dalam kejuaraan taekwondo yang diikuti lima provinsi.",
    isi: ["Siswa SMAN 1 Cikarang Barat mengikuti Taekwondo Championship Bekasi Open 2, kejuaraan antar lima provinsi.", "Hasil dan dokumentasi lengkap tersedia pada halaman prestasi di situs sekolah."],
    sumber: SUMBER + "prestasi/kejuaraan-antar-5-provinsi-taekwondo-championship-bekasi-open-2/" },
];
