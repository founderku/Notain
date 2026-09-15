# Notain

Generator invoice untuk UMKM. Tanpa akun/login. Data (info usaha, draft invoice yang
lagi diisi) tersimpan di browser masing-masing user (localStorage), bukan di server.

## Isi Project

- `app/` - halaman utama (Next.js App Router)
- `components/` - semua komponen tampilan (form input, preview invoice)
- `lib/calculations.ts` - rumus subtotal, diskon, pajak, total. Sudah divalidasi dengan
  perhitungan manual, termasuk kasus diskon yang lebih besar dari subtotal.
- `lib/storage.ts` - logika simpan/muat data dari localStorage browser. Info usaha
  (nama, alamat, telepon) disimpan terpisah dari draft invoice, jadi begitu klik
  "Invoice baru", info usaha gak perlu diisi ulang.
- `next.config.js` - dikonfigurasi untuk "static export" (file HTML/CSS/JS statis,
  bukan aplikasi server).

## Cara Deploy (Rekomendasi: Vercel)

Sama persis caranya kayak deploy Hargain kemarin:

1. Upload folder ini ke repository GitHub baru (isi folder ini langsung ke root
   repository, JANGAN dibungkus dalam satu folder lagi - pelajaran dari kejadian
   Hargain kemarin).
2. Buka [vercel.com](https://vercel.com), "Add New Project", pilih repository ini.
3. Vercel otomatis deteksi Next.js, klik "Deploy".
4. Setelah sukses, di Settings > Domains, tambahkan `notain.founderku.com`.
5. Tambahkan record DNS yang diminta Vercel di pengaturan domain founderku.com kamu.

## Kalau Mau Coba Dulu di Komputer Sendiri

```
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Catatan Teknis

- Data disimpan di localStorage browser. Ganti device/hapus cache = data hilang.
  Ini bukan fitur riwayat invoice - hanya draft yang sedang dikerjakan dan info
  usaha yang tersimpan.
- Nomor invoice otomatis dibuat berformat `INV/YYYYMMDD/urutan`, tapi bisa diedit manual.
- Rumus utama ada di satu file: `lib/calculations.ts`.
