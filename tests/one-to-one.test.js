/*
Prisma One To One : https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/one-to-one-relations

ketika ingin melakukan relasi antar table kita perlu memberitahu prisma dengan menggunakan @relation untuk agar join bisa otomatis.

di model yang kita ingin hubungkan kita perlu membuat misal nya representasi dari model relasi nya lihat contoh pada schema Customer dan Wallet, 

di customer kita tambahka wallet Wallet? untuk refrensi, dan di table relasi atau wallet juga sama tambahkan customer Customer
untuk melakukan join dengan table lain kita bisa melakukan include bukan select



*/

import { prismaClient } from "../src/prisma-client.js"

test("one to one", async() => {
    const wallet = await prismaClient.wallet.create({
        data: {
            id: "wallet1",
            customer_id: "yusuf1",
            balance: 1000000
        },
        include: {
            customer: true
        }
    });

    console.log(wallet);
});

/*
kita juga bisa create sekaligus dengan data relasi nya, kita bisa memasukkan nya ke key wallet dan tanpa memasukkan kolom yang berelasi lagi
*/

test("one to one create with relation", async() => {
    const customer = await prismaClient.customer.create({
        data: {
            id: "yusuf4",
            name: "mazaro yusuf4",
            phone: "098765434212",
            email: "test.myg@contoh.com",
            wallet: {
                create: {
                    id: "wallet4",
                    balance: 1000000
                }
            }
        },
        include: {
            wallet: true
        }
    });

    console.log(customer);
});

/*
untuk melakukan find dengan join kita bisa pakai include
*/

test("find one to one", async() => {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "yusuf4"
        },
        include: {
            wallet: true
        }
    });

    console.log(customer);
});

/*
lalu tidak semua filter bisa dipakai di to-one relation, to-one hanya punya is dan is not, https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries#filter-on--to-one-relations
*/
test("filter one to one", async() => {
    const customer = await prismaClient.customer.findMany({
        where: {
            wallet: {
                isNot: null
            }
        },
        include: {
            wallet: true
        }
    });

    console.log(customer);
})

// afterEach(async() => {
//     //deleteMany seperti truncate
//     const deleteCustomer = prismaClient.customer.deleteMany();

//     await prismaClient.$transaction([deleteCustomer]);
// });