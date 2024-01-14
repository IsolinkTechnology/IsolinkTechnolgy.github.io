---
layout: page
title: Accounts Configuration
permalink: /accounts/
---
## Membuat Akun
Pembuatan akun hanya dapat dilakukan oleh pengguna tingkat Admin. Admin dapat mengklik ke bagian kanan dari navbar, klik ke admin.

![admin_page](/images/admin.png)

Halaman konfigurasi akan terbuka, berikut merupakan penjelasan dari setiap isian pada saat melakukan konfigurasi akun.

| No | Judul                       | Deskripsi |
|----|-----------------------------|-----------|
| 1  | Nama Lengkap                |    Isi dengan nama lengkap user       |
| 2  | Peran                       |    Isi dengan peran user di company anda       |
| 3  | Pengguna Aktif              |     Isi ya jika akun aktif, Isi tidak jika akun ingin di nonaktifkan      |
| 4  | Izinkan Otorisasi Superuser |    Isi ya untuk otorisasi superuser(*)       |
| 5  | Izinkan Otorisasi Admin     |    Isi ya untuk otorisasi admin(**)       |
| 6  | Pilih Lokasi                |    Isi tidak terbatas untuk superuser dan admin, isi dengan lokasi untuk memaksa akun hanya dapat melihat ke salah satu lokasi(***)       |
| 7  | Username                    |    Nama yang akan muncul di report dan tabel tabel report       |
| 8  | Email                       |    Email yang akan digunakan untuk login       |
| 9  | Kata Sandi                  |    Password awal untuk akun       |

(*) Akun superuser memiliki kewenangan untuk membuat, mengatur serta menghapus kategori untuk ruangan, peralatan, serta semua ruangan dan peralatan di dalamnya,  namun tidak memiliki autorisasi untuk membuat lokasi dan akun baru

(**) Akun admin memiliki semua kewenangan superuser serta melakukan pembuatan, pengaturan, dan menghapus akun dan lokasi

(***) Apabila suatu user dipasang terbatas pada salah satu lokasi, maka secara otomatis juga ketika pembagian tugas, user ini hanya akan menerima tugas di tempat user tersebut terikat. Akun ini juga hanya dapat melihat ruangan ruangan serta status ruangan pada tempat akun tersebut terikat.

## Membaca Akun
Proses pembacaan akun dengan level superuser dan admin hanya dapat dilakukan oleh admin. 
Proses pembacaan akun dengan level dibawah superuser dapat dilakukan oleh superuser pada halaman pengelompokan user. Halaman ini dapat diakses dengan mengklik bagian kanan dari navbar, klik ke
pengelompokan user.

![pengelompokan_user](/images/usr_grp.png)

## Mengedit Akun
Proses pengeditan hanya dapat dilakukan oleh admin. Pengeditan dilakukan dengan menekan tombol ubah dari page admin sebelumnya.

## Menghapus Akun
Proses penghapusan akun hanya dapat dilakukan oleh admin. Proses penghapusan tidak akan menghilangkan nama tersebut dari report yang mana pelaporan sebelumnya diisi oleh akun tersebut.

[Baca Selanjutnya](/category)
