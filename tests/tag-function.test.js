/*
Tag Function adalah fitur javascript yagn jarang digunakan. namun di prisma ini bisa memudahkan membuat perintah SQL, Tag function adalah fitur seperti string template yang bisa dilakukan ketika kita memanggil function.

saat memanggil tag function tidak perlu (), ketika digunakan array akan menangkap string template nya dan dimasukka ke dalam array, dan misal nya name dan lastName parameter akan dimasukkan ke args

cara ini melindungi kita dari sql injection, karena data yang masuk ke args akan dicek dulu oleh prisma char2 yang bisa menyebabkan sql injection
*/

function tagFunction(array, ...args) {
    console.log(array);
    console.log(args);
}

test("tag function", () => {
    const name = "Yusuf";
    const lastName = "Mazaro"

    tagFunction `Hello ${name} ${lastName}, Hello World`;
    tagFunction `Bye ${name} ${lastName}, Hello World`;
});

test("tag function sql", () => {
    const name = "Yusuf";
    const age = 30;

    tagFunction `SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
})