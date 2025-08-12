/*
Prisma Transaction :  https://www.prisma.io/docs/orm/prisma-client/queries/transactions#the-transaction-api

di prisma juga bisa melakukan transaction kita bisa menggunakan method $transaction, terdapat 2 mekanisme transaksi di prisma yaitu, Sequential Transaction dimana kita kirim semua operasi prisma client sebagai array, lalu Interactive Transaction, dimana kita bisa mneggunakan callback function yang berisi kode transaksi nya
*/

import { prismaClient } from "../src/prisma-client.js";

//sequential transaction, const [mazaro, yusuf] artinya kita membuat 2 operasi create

test("transaction sequential", async() => {
    const [mazaro, yusuf] = await prismaClient.$transaction([
        prismaClient.customer.create({
            data: {
                id: "mazaro",
                email: "mazaro.test@contoh.com",
                name: "Mazaro Yusuf Gunardiawan",
                phone: "31323232323"

            }
        }),
        prismaClient.customer.create({
            data: {
                id: "yusuf",
                email: "yusuf.test@contoh.com",
                name: "Mazaro Yusuf Gunardiawan 2",
                phone: "36666666666666"

            }
        })
    ]);

    expect(mazaro.name).toBe("Mazaro Yusuf Gunardiawan");
    expect(yusuf.name).toBe("Mazaro Yusuf Gunardiawan 2");
});

//contoh transaction interactive
test("transaction interactive", async() => {
    const [mazaro, yusuf] = await prismaClient.$transaction(async(prisma) => {
        const mazaro = await prisma.customer.create({
            data: {
                id: "mazaro",
                email: "mazaro.test@contoh.com",
                name: "Mazaro Yusuf Gunardiawan",
                phone: "31323232323"

            }
        })
        const yusuf = await prisma.customer.create({
            data: {
                id: "yusuf",
                email: "yusuf.test@contoh.com",
                name: "Mazaro Yusuf Gunardiawan 2",
                phone: "36666666666666"

            }
        });

        return [mazaro, yusuf]
    });

    expect(mazaro.name).toBe("Mazaro Yusuf Gunardiawan");
    expect(yusuf.name).toBe("Mazaro Yusuf Gunardiawan 2");
});

afterEach(async() => {
    //deleteMany seperti truncate
    const deleteCustomer = prismaClient.customer.deleteMany();

    await prismaClient.$transaction([deleteCustomer]);
})