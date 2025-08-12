/*
Execute SQL
prisma mempunyai method $excuteRaw() yang bisa untuk manipulasi data seperti insert, update, delete. return nya adalah promise<number> yang berisi jumlah data yang terkena efek table dari executeRaw, misal nya kita memanipulasi 5 table sekaligus makan return nya 5. executeRaw menggunakan Tag function
*/

import {prismaClient} from "../src/prisma-client.js";

test("test execute raw", async () => {
    const id = 1;
    const name = "Mazaro Yusuf";

    const jumlahEfek = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUE (${id}, ${name})`;

    expect(jumlahEfek).toBe(1);
})