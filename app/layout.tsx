import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Notain - Bikin Invoice & Kwitansi',
  description:
    'Bikin invoice dan kwitansi profesional untuk UMKM. Gratis, tanpa perlu daftar akun.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
