/*
Prisma Migrate adalah fitur pembuatan table di database dengan model di schema, ada dua jenis prisma migrate yaitu :

1. Model/Entity-First-Migration :
kita bisa membuat Model terlebih dahulu lalu Prisma Migrate akan membuat perintah DDL nya, ini biasa digunakan saat membuat aplikasi baru
pertama kita bisa bisa buat model, lalu akan di generate dan di apply migration nya, lalu otomatis di database akan melakukan CREATE/ALTER TABLE, contoh nya https://docs.google.com/presentation/d/1xsRbexyGlRg6-jVaGKgbgcdPqoBYuNK1DraWaCjWyXE/edit?slide=id.g247dfda349e_0_1121#slide=id.g247dfda349e_0_1121

untuk menjalankan Model-First-Migration kita bisa gunakan perintah 
npx prisma migrate dev --create-only --name nama_migration
setelah itu otomatis akan dibuatkan file SQL DDL dari model di folder migrations, kita bisa ubah file DDL tersebut, setelah selesai kita bisa gunakan perintah 
npx prisma migrate dev

jika langsung npx prisma migrate dev prisma akan langsung eksekusi ke database, namun jika kita ingin melihat dulu file DDL yang akan dikirim kita bisa gunakan npx prisma migrate dev --create-only --name nama_migration

semua model yang ada di schema akan dibuatkan DDL nya , bisa dilihat di file migration setelah menggunakan npx prisma migrate dev --create-only --name nama_migration

jadi setelah kita melakukanmigration dengan cara ini saat misal ny aingin menambahkan kolom pada table kita cukup edit model nya lalu jalankan kedua command di atas

agar tipe data nya jelas gunakan @db dan di relation nya tambahkan map untuk nama relation nya, contoh nya: https://docs.google.com/presentation/d/1xsRbexyGlRg6-jVaGKgbgcdPqoBYuNK1DraWaCjWyXE/edit?slide=id.g247dfda349e_0_1159#slide=id.g247dfda349e_0_1159

file migration yang sudah dipakai sebelum nya tidak akan bisa lagi diubah, karena file migration nya tidak akan dijalankan lagi, prisma akan mengecek versi dari file migration secara otomatis menggunakan table _prisma_migrations informasi checksum disimpan disitu, jika terjadi perubahan maka akan error

di rekomendasikan menggunakan ini


2. Database-First-Migration :
yaitu kita bisa membuat SQL DDL nya dulu, lalu menggunakan Prisma Migrate untuk melakukan introspect database untuk membuat model sesuai dengan database. ini biasa digunakan ketika database nya sudah ada

misalkan database sudah ada beserta isinya namun kita mau memakai prisma untuk kelola database nya, kita bisa gunakan command : npx prisma db pull
namun setelah model nya jadi semua nya akan dinamai sesuai nama di table di database tidak lagi menggunakan PascalCase
*/