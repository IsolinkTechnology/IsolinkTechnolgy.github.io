---
layout: page
title: Pembagian Tugas
permalink: /task_div/
---

## Pembagian tugas
Untuk mengimplementasikan fitur pembagian tugas dari inspekta, perlu dilakukan pembuatan pembagian tugas.  Yang dilakukan dari suatu pembagian tugas adalah menghubungkan kelompok pengguna, ke kategori ruangan serta kategori peralatan. Dengan begitu, Inspekta akan secara otomatis membagi peraltan dan ruangan yang termasuk dalam kategori ke setiap pengguna dalam kelompok itu. Setiap pengguna yang terbatas pada lokasi tertentu hanya akan mendapatkan tugas yang mana dirinya terikat. Pembagian dilakukan secara random dalam kelompok pengguna tersebut.

Tahap pertama yang perlu dilakukan adalah untuk melakukan pengelompokan pengguna. Pada Navbar, pilih pengelompokan user

![Pengelompokan_user](/images/usr_grp.png)

Lalu buat kelompok user. Tabel di bawah menunjukan pengguna dengan level user, bukan superuser dan bukan admin. Akun akun ini bisa didaftarkan ke masing masing kelompok dengan cara klik ke dropdown box, lalu pilih kelompok yang diinginkan, lalu simpan.

![Pemilihan_kelompok](/images/choose_grp.png)

Setelah semua dilakukan, maka sistem akan otomatis melakukan pembagian tugas sesuai dengan jadwal yang sudah di tentukan.

Melihat tugas yang sudah dibagi dapat dilakukan dengan klik ke menu di navbar, kemudian lihat tugas aktif untuk admin dan superuser, atau lihat tugas saya untuk non admin dan non superuser.

![Lihat Tugas]](lihat_tugas.png)

[Kembali ke Daftar Isi](./index)
