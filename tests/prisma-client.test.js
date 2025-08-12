import {prismaClient} from "../src/prisma-client.js";

/*
saat kita membuat object prisma client nya otomatis akan membaca schema dan .env, untuk melakukan koneksi ke database kita bisa menggunakan method .$connect() balikan nya adalah Promise

saat sudah membuat object Prisma client sekali kita tidak perlu buat object nya lagi kita bisa menggunakan berkali2, atau kita bisa membuat module yang berisi object Prisma Client jika ingin dipakai tinggal import module nya saja.

saat membuat prisma client kita bisa mengatur nya bisa dilihat di src/prisma-client.js, dan untuk pengaturan nya https://www.prisma.io/docs/orm/reference/prisma-client-reference#prismaclient, 

jika kita membutuhkan banyak koneksi ke database prisma client sudah mengatur jumal koneksi dalam pool atau tempat menyimpan koneksi, untuk mengatur nya bisa juga, misal nya ini pengaturan koneksi untuk mysql https://www.prisma.io/docs/orm/reference/prisma-client-reference#prismaclient, misal nya kita bisa mengatur jumalh koneksi pada url di .env
*/

test("Prisma Client", async () => {
    await prismaClient.$connect();

    // antar $connect() dan .$disconnect kita bisa melakukan perintah ke database

    await prismaClient.$disconnect();
})