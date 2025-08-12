/*
prisma juga punya method untuk melakukan query select menggunakan method $queryRaw, return value nya adalah promise<array> yang berisikan data hasil query nya, query raw juga menggunakan tag function
*/

import {prismaClient} from "../src/prisma-client.js";

test("query sql", async () => {
    const id = "1";

    const samples = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;
    
    for (const sample of samples) {
        console.log(`Result sample id : ${sample.id} and name ${sample.name}`);
    }
})