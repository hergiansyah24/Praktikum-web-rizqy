# Dokumen Teknis Modul 1 — Lingkungan Pengembangan, Git, dan Lalu Lintas HTTP

Nama/NIM : Rizqy Hergiansyah / [NIM]

Repositori : [Link repositori GitHub]

## 1. Lingkungan Pengembangan

### 1.1 Sistem Operasi

Sistem operasi yang digunakan dalam praktikum ini adalah Windows.

### 1.2 Perangkat dan Versi

| Perangkat | Versi |
|---|---|
| Sistem Operasi | Windows 10 |
| Node.js | v24.21.0 |
| npm | 11.19.0 |
| Git | 2.55.0.windows.5 |
| Visual Studio Code | 1.139.1 |
| Browser | Google Chrome |

### 1.3 Verifikasi Lingkungan

Verifikasi lingkungan pengembangan dilakukan menggunakan beberapa
perintah pada terminal.

Perintah yang digunakan:

```bash
node -v
npm -v
git --version
git config --global --list
```

Hasil verifikasi menunjukkan bahwa Node.js, npm, Git, dan konfigurasi
Git dapat dijalankan dengan baik pada lingkungan pengembangan.

### 1.4 Menjalankan Next.js

Project Next.js dijalankan menggunakan perintah:

```bash
npm run dev
```

Project berhasil dijalankan dan dapat diakses melalui browser pada:

```text
http://localhost:3000
```

Pada saat menjalankan project, port 3000 sudah digunakan sehingga
Next.js sempat menawarkan port alternatif. Project tetap dapat
diakses melalui server yang berjalan pada port 3000.

## 2. Alur Kerja Git

### 2.1 Pemeriksaan Repository

Pemeriksaan repository dilakukan menggunakan perintah:

```bash
git status
git log --oneline
```

Perintah `git status` digunakan untuk melihat kondisi repository dan branch yang sedang aktif. Sedangkan `git log --oneline` digunakan untuk melihat riwayat commit.

### 2.2 Membuat Commit

Perubahan pada `README.md` disimpan menggunakan commit:

```bash
git add README.md
git commit -m "docs: tambahkan deskripsi produk pada README"
```

### 2.3 Membuat Branch

Branch baru dibuat dengan nama:

```bash
latihan/konflik
```

Pada branch tersebut dilakukan perubahan pada `README.md`. Setelah itu dilakukan perubahan berbeda pada `README.md` di branch `main`.

### 2.4 Merge Conflict

Branch `latihan/konflik` kemudian digabungkan ke `main` menggunakan:

```bash
git merge latihan/konflik
```

Proses merge menghasilkan conflict pada `README.md`. Conflict kemudian diselesaikan menggunakan Merge Editor pada Visual Studio Code.

### 2.5 Menyelesaikan Conflict

Setelah conflict selesai, file `README.md` ditambahkan ke staging:

```bash
git add README.md
```

Kemudian merge diselesaikan dengan commit:

```bash
git commit -m "merge: selesaikan konflik README"
```

Merge berhasil menghasilkan commit:

```text
6068d55 merge: selesaikan konflik README
```

Riwayat commit kemudian diperiksa menggunakan:

```bash
git log --oneline --graph --all


## 3. Pengamatan Lalu Lintas HTTP

### 3.1 Pengamatan Request Halaman Utama

Pengamatan dilakukan menggunakan fitur Network pada Chrome DevTools.
Saat halaman utama dibuka melalui `http://localhost:3000/`, diperoleh hasil:

| Parameter | Hasil |
|---|---|
| Request URL | `http://localhost:3000/` |
| Request Method | `GET` |
| Status Code | `200 OK` |
| Remote Address | `[::1]:3000` |
| Referrer Policy | `strict-origin-when-cross-origin` |

Status `200 OK` menunjukkan bahwa request ke halaman utama berhasil
diproses oleh server.

### 3.2 Keluaran curl -I dan curl -v

Pengujian dilakukan menggunakan perintah `curl.exe` melalui PowerShell untuk
mengamati respons HTTP dari server lokal dan server eksternal.

#### a. `curl.exe -I http://localhost:3000`

Hasil pengujian menunjukkan:

```text
HTTP/1.1 200 OK
Cache-Control: no-cache, must-revalidate
X-Powered-By: Next.js
Content-Type: text/html; charset=utf-8
### Intinya untuk tabel pengamatan

| Perintah | Hasil | Keterangan |
|---|---|---|
| `curl.exe -I http://localhost:3000` | `200 OK` | Server Next.js berhasil diakses |
| `curl.exe -I http://github.com` | `301 Moved Permanently` | Terjadi redirect ke HTTPS |
| `curl.exe -v https://example.com` | `200 OK` | Request GET berhasil dan detail HTTP ditampilkan |

### 3.3 Analisis

#### a. Perbedaan pemuatan dengan dan tanpa cache

Cache digunakan untuk menyimpan sementara resource yang sebelumnya sudah
diterima dari server. Saat resource masih tersedia di cache dan dapat
digunakan kembali, browser tidak selalu perlu mengambil resource tersebut
secara penuh dari server. Hal ini dapat membuat proses pemuatan halaman
menjadi lebih cepat dan ukuran data yang ditransfer dapat lebih kecil.

Sebaliknya, ketika cache tidak digunakan atau resource harus diambil kembali
dari server, browser perlu melakukan request dan menerima data dari server.
Akibatnya, waktu pemuatan dan jumlah data yang ditransfer dapat berbeda.

Pada pengamatan menggunakan Chrome DevTools, perbedaan cache dapat dilihat
dari informasi pada Network, terutama pada proses pemuatan resource dan
ukuran data yang ditransfer.

#### b. Alasan `curl -I` menggunakan metode HEAD

Perintah `curl -I` digunakan untuk mengambil header HTTP dari suatu resource
tanpa mengambil isi halaman secara keseluruhan. Secara HTTP, opsi tersebut
menggunakan metode `HEAD`.

Metode HEAD berguna untuk melihat informasi seperti status code,
Content-Type, Cache-Control, dan header lainnya tanpa perlu menerima body
dari halaman. Oleh karena itu, `curl -I` cocok digunakan untuk mengamati
informasi respons server secara singkat.

#### c. Alasan `http://github.com` dialihkan

Berdasarkan hasil pengujian `curl.exe -I http://github.com`, server
memberikan respons:

HTTP/1.1 301 Moved Permanently

dan terdapat header:

Location: https://github.com/

Hal tersebut menunjukkan bahwa alamat HTTP tersebut mengarahkan client ke
alamat HTTPS. HTTPS digunakan untuk komunikasi web yang terenkripsi,
sehingga akses dari `http://github.com` diarahkan ke versi `https://github.com/`.

## 4. Kendala dan Penyelesaian

## 4. Kendala dan Penyelesaian

Selama praktikum terdapat beberapa kendala. Pertama, saat menjalankan
`npm run dev` dari folder `week-1`, terjadi error karena file `package.json`
berada di dalam folder `nama-produk`. Kendala tersebut diselesaikan dengan
masuk terlebih dahulu ke folder proyek menggunakan perintah:

```bash
cd nama-produk

Kedua, saat menggunakan perintah curl melalui PowerShell, perintah tersebut
mengarah ke Invoke-WebRequest. Untuk menjalankan program curl yang sebenarnya,
digunakan curl.exe, sehingga pengujian HTTP dapat dilakukan dengan benar.

Ketiga, terjadi konflik pada file README.md ketika branch
latihan/konflik digabungkan ke branch main. Konflik diselesaikan menggunakan
Merge Editor pada Visual Studio Code dengan menentukan isi akhir yang akan
digunakan. Setelah itu file disimpan, ditambahkan kembali ke staging area, dan
dibuat commit merge.

## 5. Catatan Pemanfaatan AI

Dalam praktikum ini digunakan Gemini Ai sebagai bantuan dalam memahami
langkah-langkah praktikum, menjelaskan konsep Git dan HTTP, serta membantu
troubleshooting ketika terdapat kendala.

Bantuan yang digunakan meliputi penjelasan penggunaan Git branch, merge,
penyelesaian konflik, metode HTTP, kode status, serta penggunaan `curl.exe`
pada Windows PowerShell.

Setiap langkah dan hasil pengujian diverifikasi secara langsung dengan
menjalankan perintah Git, Next.js, Chrome DevTools, dan curl. Hasil yang
dicatat pada dokumen berasal dari pengujian yang dilakukan selama praktikum.