/*
Prisma Model : https://www.prisma.io/docs/orm/prisma-schema/data-model/models

di realworld sebenarnya sangat jarang menggunakan raw sql untuk database, biasa nya prisma orm yang sering dipakai.

untuk membuat model sebagai represantasitable di database, pastikan table di database nya sudah ada, lalu kita bisa membuat model di schema.prisma, 
untuk memberi nama model kita bisa lakukan @@map('namatable'), lalu untuk membuat sebuah kolom boleh null bisa tambahkan ?, untuk membuat primary key kita bisa menandakan table dengan @id, lalu jangan lupa npx prisma generate. untuk detail bisa lihat link diatas

Setelah membuat model kita bisa mulai melakukan operasi CRUD dengan prisma client, secara otomatis ketika di generate prisma akan membuatkan field dengan nama model yang sudah di lowercase yang kita buat di schema, jadi kita bisa akses dengan prismaClient.customer misal nya, ini dinamakan prisma model query dan mempunyai method sebagai berikut https://www.prisma.io/docs/orm/reference/prisma-client-reference#model-queries.

untuk membuat data bisa gunakan method .create({data: {}})
*/

import { prismaClient } from "../src/prisma-client.js"

test("insert data customer", async () => {
    //saat membuat datanya pun bisa menggunakan object, contoh :
    const customer = await prismaClient.customer.create({
        data: {
            id: "yusuf1",
            email: "yusuf.test@contoh.com",
            name: "Mazaroo Yusuf",
            phone: "666-666"
        }
    })

    expect(customer.id).toBe("yusuf1");
    expect(customer.email).toBe("yusuf.test@contoh.com");
    expect(customer.name).toBe("Mazaroo Yusuf");
    expect(customer.phone).toBe("666-666");
});

//untuk mengupdate kita bisa gunakan .update({data: {}, where: {}}), dan cuma bisa where kolom unique atau id

test("update data customer", async () => {
    const customer = await prismaClient.customer.update({
        data: {
            name: "Mazaroo Yusuf Gunardiawan"
        },
        where: {
            id: "yusuf1"
        }
    })

    expect(customer.id).toBe("yusuf1");
    expect(customer.email).toBe("yusuf.test@contoh.com");
    expect(customer.name).toBe("Mazaroo Yusuf Gunardiawan");
    expect(customer.phone).toBe("666-666");
});

//lalu untuk read kita bisa pakai findUnique, tapi kita cuma bisa menggunakan kolom unique atau primary key saja

test("read data customer", async () => {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "yusuf1"
        }
    })

    expect(customer.id).toBe("yusuf1");
    expect(customer.email).toBe("yusuf.test@contoh.com");
    expect(customer.name).toBe("Mazaroo Yusuf Gunardiawan");
    expect(customer.phone).toBe("666-666");
});

//untuk delete bisa gunakan method delete, lalu beri primary key nya. saat sudah melakukan delete data akan dikembalikan ke promise

test("delete data customer", async () => {
    const customer = await prismaClient.customer.delete({
        where: {
            id: "yusuf1"
        }
    })

    expect(customer.id).toBe("yusuf1");
    expect(customer.email).toBe("yusuf.test@contoh.com");
    expect(customer.name).toBe("Mazaroo Yusuf Gunardiawan");
    expect(customer.phone).toBe("666-666");
});