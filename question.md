---
layout: page
title: Pertanyaan
permalink: /question/
---

Setiap pertanyaan dibuat di dalam kategori ruangan atau kategori peralatan. Pertanyaan yang dibuat di masing masing kategori ini akan secara otomatis terikat pada kategori tersebut, sehingga ketika form untuk alat ditampilkan untuk diisi, pertanyaan yang ditunjukkan merupakan pertanyaan kategorinya. 

Dengan pembuatan pertanyaan di kategori, maka jika kategori ini mengandung 100 device yang identik, tidak perlu dilakukan pembuatan 100 kuisioner masing masingnya tapi cukup melakukan pengaturan pada kategori saja dan semuanya akan mengikuti perubahan tersebut.

## Pembuatan Pertanyaan
Untuk membuat pertanyaan, masuk terlebih dahulu ke halaman detail dari salah satu kategori (bisa kategori ruangan ataupun kategori peralatan). Setelah itu, tekan tombol dengan titik tiga, kemudian pilih buat pertanyaan. 

Berikut merupakan tabel yang menjelaskan masing masing field isian ketika melakukan konfigurasi pada pertanyaan.

| No | Judul | Deskripsi | 
|----|-------|-----------|
| 1  |    Pertanyaan   | Diisi dengan pertanyaan (*) |
| 2  |   Penjelasan   | Diisi dengan penjelasan untuk membantu memahami pertanyaan | 
| 3  |   Apakah jawaban berupa angka?    | Isi ya jika jawaban berupa jawaban angka | 
| 4  |   Apakah jawaban berupa ya atau tidak?   | Isi tidak jika jawaban berupa ya atau tidak (**)|
| 5 | Apakah pertanyaan wajib diisi? | Jika diisi ya, maka pertanyaan wajib untuk diisi  |
| 6 | Apakah pertanyaan ini aktif? | Jika diisi ya, maka pertanyaan akan ditampilkan di kuisioner, jika tidak, tidak akan tampil |
| 7 | Nilai Maksimum? | Diisi dengan nilai maksimum, bersifat opsional, hanya berlaku untuk jawaban berupa angka |
| 8 | Nilai Minimum? | Diisi dengan nilai minimum, bersifat opsional, hanya berlaku untuk jawaban berupa angka |
| 9 | Posisi di Formulir? | Pengisian ini bertujuan untuk menyusun pertanyaan di formulir |
| 10 | Upload Gambar Referensi? | Pengisian ini untuk memberikan gambar referensi untuk memudahkan proses inspeksi |


(*) Sistem alarm inspekta dibuat sederhana dengan metode berikut:
1. Jika jawaban dari pertanyaan ya atau tidak diisi dengan jawaban Tidak, maka akan secara otomatis memicu alarm
2. Jika jawaban berupa angka dan nilainya diluar dari rentang maksimum minimum yang diberikan, maka akan secara otomatis memicu alarm
3. Jawaban isian tidak akan memicu alarm

(**) Apabila jawaban bukan merupakan angka dan bukan merupakan ya atau tidak, maka secara otomatis akan ditampilkan dalam bentuk isian.

## Melihat Pertanyaan
Melihat pertanyaan dapat dilakukan oleh siapapun yang terdaftar dalam organisasi. Melihat list pertanyaan yang terikat pada suatu kategori dapat dilakukan dengan klik tombol 3 di kategori, kemudian pilih lihat pertanyaan. Dari halaman ini akan ditampilkan setiap pertanyaan serta setiap konfigurasi yang dipasang ke pertanyaan ini. 

## Mengapus Pertanyaan
Untuk menjaga integritas data, tidak diadakan pilihan hapus pertanyaan melainkan dapat dilakukan dengan menonaktifkan pertanyaan.  Hal ini untuk memastikan bahwa semua data tetap lengkap terekam dengan rapi. Lalu apabila pertanyaan diaktifkan kembali untuk diisi kembali, maka semua jawaban yang sudah terekam sebelumnya masih akan tersimpan.

## Pratinjau Formulir
Untuk melihat bentuk kuisioner yang nanti akan ditampilkan saat pengisian kuisioner, anda dapat memilih pratinjau formulir.

[Baca Selanjutnya](/answer)
