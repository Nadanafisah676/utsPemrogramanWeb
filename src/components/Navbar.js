"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sekolah } from "@/data/sekolah";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
];

export default function Navbar() {
  const pathname = usePathname();
  const aktif = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <header className="sticky top-0 z-50 border-b-4 border-gold-400 bg-brand-600 shadow-md">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img src={sekolah.logo} alt="Logo sekolah" className="h-11 w-11 rounded-full bg-white object-contain p-0.5" />
          <span className="font-display text-lg font-bold text-white">{sekolah.singkat}</span>
        </Link>
        <ul className="flex gap-1 text-sm font-semibold">
          {menu.map((m) => (
            <li key={m.href}>
              <Link
                href={m.href}
                className={`rounded-lg px-4 py-2 transition ${
                  aktif(m.href) ? "bg-gold-400 text-brand-950" : "text-white hover:bg-white/20"
                }`}
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
