# Dokumen Teknis Modul 1 — Lingkungan Pengembangan, Git, dan Lalu Lintas HTTP

Nama/NIM : Rizqy Hergiansyah / 105224010

Repositori : git@github.com:hergiansyah24/Praktikum-web-rizqy.git

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

### a. Keluaran git log --oneline --graph

Hasil `git log --oneline --graph --all` menunjukkan adanya commit merge
yang menggabungkan perubahan dari branch `latihan/konflik` ke branch `main`.

Commit hasil merge adalah:

`6068d55 merge: selesaikan konflik README`

### b. Tautan Pull Request yang Telah Digabungkan

Tautan Pull Request:
`[akan diisi setelah Pull Request berhasil di-merge]`

### c. Konflik yang Terjadi, Cara Penyelesaian, dan Alasan Pemilihan Isi Akhir

Konflik terjadi pada file `README.md` karena branch `main` dan branch
`latihan/konflik` memiliki perubahan pada bagian deskripsi produk.

Konflik diselesaikan menggunakan Merge Editor pada Visual Studio Code.
Pada proses penyelesaian, dipilih perubahan dari branch yang digunakan
sebagai sumber merge, kemudian file disimpan dan ditambahkan ke staging
dengan `git add README.md`.

Setelah itu merge diselesaikan dengan commit:

```bash
git commit -m "merge: selesaikan konflik README"

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

Pengujian dilakukan menggunakan perintah `curl.exe` melalui PowerSh ell untuk
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

## Pull Request

- Link PR: https://github.com/hergiansyah24/Praktikum-web-rizqy/pull/1
- Status: Merged