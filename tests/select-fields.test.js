/*
saat misal nya kita melakukan crud, terkadang semua kolom yang ada di table akan di select namun kita juga bisa menyelect beberapa saja dengan menambhakan select: {} saat crud, karena default nya crud selalu SELECT *
*/

import { prismaClient } from "../src/prisma-client.js";

test("select coloumn", async () => {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "yusuf1"
        }, 
        select: {
            id: true,
            name: true
        }
        //artinya kita SELECT customers.id, customers.name FROM customers WHERE id = "yusuf1"
    })

    expect(customer.id).toBe("yusuf1");
    expect(customer.name).toBe("Mazaroo Yusuf1");
});