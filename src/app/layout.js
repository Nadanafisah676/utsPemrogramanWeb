import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Fraunces({ subsets: ["latin"], variable: "--f-display" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--f-body" });

export const metadata = {
  title: "SMA Negeri 1 Cikarang Barat",
  description: "Website profil SMA Negeri 1 Cikarang Barat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
