/*
Default Function atau Attribute Function : https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attribute-functions 

attribute @default() bisa memberitahu misal nya kolom nya auto increment, dll.

kita bisa memberitahu prisma bahwa misal nya id kita auto increment, jadi kita tidak perlu lagi menambah data id nya. kita bisa gunakan attribute @default() dan pilih jenis auto increment yang tersedia bisa lihat di doc atas

misal nya kita bisa menambahkan id Int @id @default(autoincrement()) 
*/

import { prismaClient } from "../src/prisma-client"

test("auto increment", async() => {
    const category = await prismaClient.category.create({
        data: {
            name: "Mouse"
        }
    });

    console.log(category);
    expect(category).toHaveProperty("id");
})