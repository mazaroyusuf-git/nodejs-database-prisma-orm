/*
Prisma Filter and Condition : https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#filter-conditions-and-operators 

saat melakukan where kita sering menggunakan equals atau sama dengan kita juga bisa menggunakan kondisi lain seperti not, in, notIn, dll.
*/

import { name } from "mustache";
import { prismaClient } from "../src/prisma-client.js";

test("where not", async() => {
    const result = await prismaClient.customer.findMany({
        where: {
            id: {
                not: "yusuf1"
            }
        }
    });

    expect(result.length).toBe(2);
});

/*
atau misal nya kondisi nya lebih dari satu
*/

test("where not orderby", async() => {
    const product = await prismaClient.product.findMany({
        where: {
            AND: [
                {
                    name: {
                        not: {
                            contains: "Mouse"
                        }
                    }
                },
                {
                    name: {
                        not: {
                            contains: "Keyboard"
                        }
                    }
                }
            ]
        },
        orderBy: [
            {
                name: "asc"
            }
        ]
    });
    //artinya SELECT * FROM products WHERE name NOT LIKE '%Mouse%' AND name NOT LIKE '%Keyboard%'

    expect(product).toHaveLength(6);
})