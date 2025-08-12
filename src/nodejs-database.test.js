/*
sayang nya nodejs standard library tidak menyediakan untuk database, berkebalikan dengan misalnya java atau php. kita perlu menggunakan dependency lain tergantung databasenya. misal nya berikut dependency sesuai database nya
MySQL : https://www.npmjs.com/package/mysql2
PostgreSQL : https://www.npmjs.com/package/pg 
Oracle : https://www.npmjs.com/package/oracledb
dll

namun karena database package library teralu spesifik ke library yang digunakan, biasa nya di nodejs menggunakan library ORM  untuk manipulasi data database

ORM atau Object Relational Mapping, ORM banyak digunakan pada database relational, konsep ORM adalah menjadikan sebuah object sebagai representasi sebuah table di database, jadi seakan-akan ketika kita memanipulasi object nya maka kita juga sedang memanipulasi table di database juga, dari kode program ORM akan mentranslate kode tersebut menjadi perintah database

contoh ORM Library adalah : 
Sequalize : https://sequelize.org/
TypeORM : https://typeorm.io/ 
Prisma : https://www.prisma.io/
*/