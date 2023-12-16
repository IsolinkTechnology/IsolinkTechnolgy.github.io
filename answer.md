---
layout: page
title: Menjawab Pertanyaan
permalink: /answer/
---

## Menjawab Pertanyaan

Kuisioner yang tampil dari proses pemindaian QR dapat diisi. Dengan sederhana, Inspekta membaca konfigurasi kategori yang mana ruangan atau peralatan tersebut terdaftar, dan menampilkan pertanyaan sesuai dengan apa yang telah didaftarkan pada kategori tersebut.
Berdasarkan pengiriman jawaban ini, Inspekta akan merekam setiap jawaban dan langsung menganalisis jawaban tersebut sehingga kemudian menyatakan bilamana jawaban tersebut aman, atau bermasalah (memicu alarm). Apabila jawaban memicu alarm, Inspekta juga akan memunculkan Tombol Acknowledge yang hanya dapat diisi oleh superuser. Hal ini bertujuan agar data tersimpan lebih rapi beserta dengan status pengakuan alarm yang terjadi dari level superuser.

## Alarm

Pada halaman dashboard, akan ditampilkan alat alat yang memicu alarm. Jika terpicu, pada setiap baris pada komponen tersebut akan ada tombol ACK. Tombol ACK dapat diklik oleh super user.

![Acknowledge_in_dashboard](/images/ack_dashboard.png)

Pada halaman kategori, setiap alat akan didampingi dengan 2 buah titik berwarna. Keadaan paling noromal adalah kedua titik harus berwarna hijau. Apabila titik pertama berwarna merah, berarti objek tersebut memiliki hasil pengecekan terakhir yang memicu alarm. Jika titik kedua berwarna kuning, berarti objek bermasalah tersebut belum diketahui atau belum diakui oleh level superuser. Jika sudah di acknowledge dengan menekan tombol acknowledge di bagian kanannya, maka akan dengan segera berubah menjadi hijau.

![Acknowledge_in_eqt](/images/ack_eqt.png)


[Baca Selanjutnya](./task_div)
