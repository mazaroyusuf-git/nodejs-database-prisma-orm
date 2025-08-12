import { prismaClient } from "../src/prisma-client.js";

/*
ketika misa nya melakukan find many kita bisa melakukang pagination kita bisa menggunakan skip jumlah data yang di skip diawal, dan take jumlah maksimal data yang diambil
*/

test("pagination", async() => {
    const page1 = await prismaClient.customer.findMany({
        skip: 0,
        take: 1
    });

    expect(page1.length).toBe(1);

    const page2 = await prismaClient.customer.findMany({
        skip: 1,
        take: 2
    });

    expect(page2.length).toBe(2);
});

/*
ketika findMany juga kita bisa melakukan sorting juga dengan ascending dan descending
*/

test("sorting", async() => {
    const customers = await prismaClient.customer.findMany({
        skip: 0,
        take: 3,
        orderBy: [
            {
                name: "desc"
            },
            {
                email: "asc"
            }
        ]
    })

    for(const customer of customers) {
        console.log(customer.name);
    }
})