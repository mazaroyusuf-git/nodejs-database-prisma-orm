/*
kita juga bisa melakukan CRUD dengan jumlah data yang banyak dengan menggunakan suffix many
*/

import { prismaClient } from "../src/prisma-client.js"

//createMany
test("create many", async() => {
    const {count} = await prismaClient.customer.createMany({
        //menggunakan array yang berisikan data
        data: [
            {
                id: "yusuf1",
                email: "yusuf1.test@contoh.com",
                name: "Mazaroo Yusuf1",
                phone: "666-6661"
            },
            {
                id: "yusuf2",
                email: "yusuf2.test@contoh.com",
                name: "Mazaroo Yusuf2",
                phone: "666-6662"
            },
            {
                id: "yusuf3",
                email: "yusuf3.test@contoh.com",
                name: "Mazaroo Yusuf3",
                phone: "666-6663"
            }
        ]
    })
});

/*
untuk updateMany beda dengan update biasa yang akan melakukan query dan cuma mengupdate 1 data dengan primary key yang sesuai, updateMany akan mengupdate data sesuai where pada kolom apapun selain id
*/

test("update many", async () => {
    const {count} = await prismaClient.customer.updateMany({
        data: {
            email: "test.test@contoh.com"
        },
        where: {
            name: "Mazaroo Yusuf1"
        }
    });

    expect(count).toBe(1);
});

//untuk read many juga biasam bisa juga ditambahkan where
test("read many", async() => {
    const customers = await prismaClient.customer.findMany({
        
    })

    expect(customers.length).toBe(3);
})


/*
deleteMany sama dengan updateMany akan menyesuaikan dengan where nya lalu mendelete banyak data
*/

test("delete many", async() => {
    const {count} = await prismaClient.customer.deleteMany({
        where: {
            name: {
                contains: "yusuf"
            }
        }
    });

    expect(count).toBe(3);
});


// afterEach(async() => {
//     //deleteMany seperti truncate
//     const deleteCustomer = prismaClient.customer.deleteMany();

//     await prismaClient.$transaction([deleteCustomer]);
// });