/*
Prisma : https://www.prisma.io/

Prisma merupakan library yang terkenal untuk melakukan ORM, Prisma punya banyak fitur seperti migration, schema, dan type safe. selain javascript prisma juga bisa digunakan untuk typescript

Prisma memiliki komponen yang bisa digunakan yaitu :
Prisma Schema, untuk memetakan schema data di database dengan di aplikasi
Prisma Client, sebagai client untuk ORM
Prisma Migrate, sebagai database migration untuk mengelola versi schema di database
Prisma CLI, aplikasi berbasis terminal untuk mengelola project prisma
Prisma Studio, aplikasi berbasis UI untuk mengelola data di database kita secara mudah
Introspection, untuk membuat Prisma Schema secara otomatis dari table di database yang sudah ada, cocok untuk migrasi dari aplikasi yang sudah jadi ke Prisma


setelah menginstall prisma kita bisa atur dulu menggunakan perintah nxp prisma yang akan membuka command line yang berisi perintah2 untuk prisma

untuk membuat project prisma pertama kali bisa gunakan npx prisma init, yang secara otomatis akan membuat file .env yang berisi file config untuk environment variables dan prisma/schema.prisma yang berisi schema pemetaan dengan database

untuk mengkoneksikan ke database kita perlu atur env dan schema.prisma, kita perlu menggunakan url sesuai database yang digunakan, pengaturan schema https://www.prisma.io/docs/orm/overview/databases dan ini untuk url di env nya https://www.prisma.io/docs/orm/overview/databases/mysql#connection-url

setelah kita melakukan perubahan ke schema kita perlu melakukan npx prisma generate agar kode perubahan di schema dibuat dalam bentuk kode javascript, biasa nya prisma menyuruh kita minimal membuat 1 model di dalam schema untuk membuat model nya liat di schema, setelah buat jangan lupa generate lagi

setelah kita melakukan generate biasa nya prisma akan membuat hasil generate nya, file nya bernama generated

*/