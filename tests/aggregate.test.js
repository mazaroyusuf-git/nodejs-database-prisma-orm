/*
Prisma juga mendukung aggregate method, contoh nya seperti count, avg, dll.
*/

//contoh count

import { prismaClient } from "../src/prisma-client.js";

test("count", async() => {
    const total = await prismaClient.customer.count({
        where: {
            name: {
                contains: "yusuf"
            }
        }
    });

    expect(total).toBe(3);
});

/*
Prisma Aggregate : https://www.prisma.io/docs/orm/reference/prisma-client-reference#aggregate

kita juga bisa melakukan beberapa aggregate di prisma yaitu _count, _avg, _sum, _min, _max, misalnya saat sedang ingin melakukan query, aggregate function lain selain yang disebutkan harus menggunakan raw sql
*/

test("query aggregate", async() => {
    const result = await prismaClient.product.aggregate({
        _min: {
            price: true
        },
        _max: {
            price: true
        },
        _avg: {
            price: true
        }
    });

    expect(result._min.price).toBe(150000);
    expect(result._max.price).toBe(2500000);
    expect(result._avg.price).toBe(860000);
});

/*
saat melakukan aggregate kadang kita juga ingin melakukan group by, dan kita tak perlu lagi menggunakan function aggregate
*/

test("query aggregate group by", async() => {
    const result = await prismaClient.product.groupBy({
        by: ['category'],
        _min: {
            price: true
        },
        _max: {
            price: true
        },
        _avg: {
            price: true
        }
    });

    console.log(result);

    
    for(const item of result) {
        console.log(`Category ${item.category}, min ${item._min.price}, max ${item._max.price}, average ${item._avg.price}`);
    }
});