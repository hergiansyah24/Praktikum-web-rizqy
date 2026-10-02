import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nama Produk",
  description: "Deskripsi singkat produk dalam satu kalimat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}