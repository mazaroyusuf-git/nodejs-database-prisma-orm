/*
mirip seperti membuat one to one kita juga bisa membuat one to many namun data relasi nya tidak perlu unique, karena data yang yang terhubung bisa punyak banyak data relasi, sama menggunakan @relation namun menggunakan [] sebagai penanda bahwa itu adalah array list lihat contoh comment pada model customer

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) ENGINE = InnoDB;
*/

import { prismaClient } from "../src/prisma-client"

test("one to many create commnets", async() => {
    const comment = await prismaClient.comment.create({
        data: {
            customer_id: "yusuf2",
            title: "Insert Comment",
            description: "Description Comment"
        },
        include: {
            customer: true
        }
    });

    console.log(comment);
});

/*
kita juga bisa membuat banyak data relasi saat create data yang dihubungkan nya dengan menggunakan createMany pada data relasi nya
*/

test("one to many with create customer many comments relation", async() => {
    const customer = await prismaClient.customer.create({
        data: {
            id: "yusuf5",
            name: "mazaro yusuf",
            email: "test@contoh.com",
            phone: "0987654331212",
            comments: {
                createMany: {
                    data: [
                        {
                            title: "Insert Comment1",
                            description: "Description Comment1"
                        },
                        {
                            title: "Insert Comment2",
                            description: "Description Comment2"
                        },
                        {
                            title: "Insert Comment3",
                            description: "Description Comment3"
                        }
                    ]
                }
            }
        },
        include: {
            comments: true
        }
    })

    console.log(customer);
});

/*
To Many Filters : https://www.prisma.io/docs/orm/prisma-client/queries/relation-queries?utm_source=chatgpt.com#filter-on--to-many-relations

kita juga bisa melakukan find many dengan menginclude data relasi nya, lalu menggunakan filter to-many yaitu some, every, none
*/

test("findMany one to many", async () => {
    const customer = await prismaClient.customer.findMany({
        where: {
            comments: {
                some: {
                    title: {
                        contains: "Comment"
                    }
                }
            }
        },
        include: {
            comments: true
        }
    })
    
    console.log(customer);
})