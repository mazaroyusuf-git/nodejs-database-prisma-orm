/*
table yang ingin dihubungkan dengan metode many to many tidak langsung dari tabel ke tabel namun dihubungkan dengan table penghubungnya yang hanya menyimpan foreign key, contoh bisa dilihat mode Like di schema

atau saat pembuatan table kita mau secara implicit atau tidak dinamai secara ekkplicit kita bisa tidak perlu menyebutkan model penghubungnya, namun ini punya aturan nama table harus diikuti _namarelasi, nama kolom harus A dan B dimana A adalah model pertama dan B adalah mode kedua, diurutkan secara ascending, secara otomatis kita tidak perlu lagi membuat model penghubung namun harus tetap buat table nya

contoh table implicit, https://docs.google.com/presentation/d/1xsRbexyGlRg6-jVaGKgbgcdPqoBYuNK1DraWaCjWyXE/edit?slide=id.g247dfda349e_0_1083#slide=id.g247dfda349e_0_1083

lalu untuk menghubungkan di model bisa seperti ini, https://docs.google.com/presentation/d/1xsRbexyGlRg6-jVaGKgbgcdPqoBYuNK1DraWaCjWyXE/edit?slide=id.g247dfda349e_0_1089#slide=id.g247dfda349e_0_1089

contoh kode dengan table implicit, https://docs.google.com/presentation/d/1xsRbexyGlRg6-jVaGKgbgcdPqoBYuNK1DraWaCjWyXE/edit?slide=id.g247dfda349e_0_1096#slide=id.g247dfda349e_0_1096

connect dipakai untuk menghubungkan record yang sudah ada ke record lain pada relasi, termasuk relasi many-to-many.

*/

import { prismaClient } from "../src/prisma-client"

test("create many to many", async() => {
    const like = await prismaClient.like.create({
        data: {
            customer_id: "yusuf1",
            product_id: "P001"
        },
        include: {
            customer: true,
            product: true
        }
    });

    console.log(like);
});

/*
kita bisa join dengan misal nya table customer dengan product lewat likes didalam include
*/

test("many to many find with include", async() => {
    const customer = await prismaClient.customer.findUnique({
        where: {
            id: "yusuf1"
        },
        include: {
            likes: {
                include: {
                    product: true
                }
            }
        }
    });

    console.log(customer);
});

//atau find many dengan include

test("many to many findMany with include", async() => {
    const customers = await prismaClient.customer.findMany({
        where: {
            likes: {
                some: {
                    product: {
                        name: {
                            contains: "Mouse"
                        }
                    }
                }
            }
        },
        include: {
            likes: {
                include: {
                    product: true
                }
            }
        }
    })

    console.log(customers);
})