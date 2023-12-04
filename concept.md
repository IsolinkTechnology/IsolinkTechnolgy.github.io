---
layout: page
title: Pengenalan Konsep
permalink: /concept/
---

## Konsep Besar

Inspekta adalah platform yang memudahkan pembuatan formulir pertanyaan inspeksi. Pertanyaan pertama yang perlu diajukan adalah ruangan atau peralatan apa yang perlu diinspeksi?

**Contoh:** Sebuah gedung memiliki 40 ruangan dalam dan 10 area luar. Ada 2 tipe ruangan dalam, yaitu ruangan dalam dengan AC (air conditioner) dan ruangan dalam tanpa AC. Setiap ruangan dalam dengan AC dan tanpa AC memiliki pertanyaan yang identik. Begitu pula dengan area luar yang memiliki pertanyaan yang identik juga. Di setiap ruangan tersebut, tentu ada banyak peralatan yang sama antar ruangan tertentu. Oleh karena itu, pertama-tama akan dibuat kategori ruangan dalam dengan AC, kategori ruangan dalam tanpa AC, dan ruangan luar.

Apakah ruangan-ruangan tersebut mengikuti pola pertanyaan formulir inspeksi yang sama?

**Contoh:** Semua ruangan yang dikategorikan sebagai ruangan dalam memiliki pertanyaan berikut: Apakah ruangan bersih? Apakah ruangan pada suhu 23-25 derajat Celsius? Selanjutnya, untuk ruangan dalam tanpa AC, pertanyaannya adalah: Apakah ruangan bersih? Apakah jendela rapat tertutup?

Pertanyaan-pertanyaan ini akan melekat pada setiap kategori ruangan sehingga ketika ruangan dalam kategori tersebut diinspeksi, pertanyaan inspeksi yang muncul adalah pertanyaan inspeksi kategori ruangan.

**Mengapa QR setiap pertanyaan harus unik?**
Tujuan utama dari pembuatan QR unik adalah:
- Memastikan tidak ada kesalahan pengisian formulir. QR diprint dan ditempel di setiap ruangan atau peralatan. Dengan melakukan pemindaian setiap kali akan dilakukan pengisian inspeksi, dipastikan pengisian formulir tidak salah. Formulir tidak dapat diakses tanpa menggunakan proses pemindaian.
- Mencegah kecurangan pengisian formulir tanpa melakukan inspeksi yang benar.

Setelah membuat kategori ruangan, membuat ruangan, dan membuat pertanyaan, QR dapat diunduh dan dicetak. Formulir menjadi aktif dan dapat langsung digunakan pada saat itu juga. Proses pembuatan QR hanya dapat dilakukan pada tingkat superuser dan admin.

Sama hal nya untuk peralatan, jika terdapat banyak peralatan dengan jenis yang sama yang memiliki tipe pertanyaan yang sama, maka dapat dibuatkan kategori peralatan agar form yang ditampilkan saat pemindaian peralatan tersebut dilakukan adalah sama. Masing-masing peralatan akan memiliki QR yang unik dan berbeda.

**Bagaimana sistem alarm bekerja**
Pada proses pembuatan pertanyaan, terdapat pilihan untuk membuat pertanyaan yang dijawab dengan ya atau tidak, atau pertanyaan yang dijawab dengan angka. Untuk pertanyaan yang dijawab dengan ya atau tidak, setiap pertanyaan tidak akan memicu alarm. Untuk pertanyaan yang dijawab angka, ada bagian yang perlu diisi untuk memberikan batasan untuk jawaban angka. Jika jawaban melebihi angka ini, maka akan memicu alarm.

**Siapa saja yang dapat mengisi form?**
Pertanyaan dapat diisi oleh siapapun yang terdaftar di dalam organisasi. Pertanyaan dapat diisi kapanpun walau tidak ditugaskan kepada yang bersangkutan.

**Bagaimana sistem pembagian tugas otomatis bekerja?**
Untuk pengguna dengan level bukan superuser dan bukan admin, dapat didaftarkan ke grup pengguna. Admin dan super user dapat membuat pengelompokan tugas yang akan menyambungkan grup pengguna, dengan kategori ruangan dan kategori alat. Setiap orang yang terdaftar di grup ini akan mendapatkan tugas sesuai dengan aturan frekuensi pembagian tugas dari setiap kategori ruangan dan kategori alat. 
Penjelasan lebih lengkap cek [disini](\apa_ya)