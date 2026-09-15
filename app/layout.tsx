import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Notain - Bikin Invoice & Kwitansi',
  description:
    'Bikin invoice dan kwitansi profesional untuk UMKM. Gratis, tanpa perlu daftar akun.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
