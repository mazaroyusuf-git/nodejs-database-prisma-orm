/*
Prisma Schema : https://www.prisma.io/docs/orm/reference/prisma-schema-reference
disini akan dijelaskan lebih dalam prisma schema, schema.prisma digunakan untuk meyimpan informasi table didalam database berupa model dan informasi koneksi database. setiap schema.prisma di generate otomatis akan membuat kode yang membantu kita melakukan interaksi ke database.


Prisma Schema Model : https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model
untuk membuat model di schema kita bisa menambahkan tanda untuk yang mana id dan yang mana data nya harus unique misal nya bisa dilihat di doc nya

Prisma Schema Model Data Types : https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-field-scalar-types
kita juga bisa menambahkan tipe data yang di support oleh database nya, bisa di lihat contoh nya di doc, kita bisa menggunakan native database type attribute agar jelas tipe data nya

Prisma Schema Model Attributes : https://www.prisma.io/docs/orm/reference/prisma-schema-reference#model-field-type-modifiers
lalu ada model attributte yang bisa kita tambahkan untuk memberi informasi tambahan ke model, contoh nya @@map(nama_database) untuk memberi tau nama di database nya, contoh nya bisa liat di doc. biasa nya yang @ nya satu disimpan di samping column kalau @@ disimpan dibawah semua column
*/