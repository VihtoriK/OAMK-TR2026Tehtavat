// 17 Callback

setTimeout(doSomething,2000);

(() => { setTimeout(doSomething,2000); })();

const run = () => { setTimeout(doSomething,2000); };

run();

function doSomething(){
    console.log("Demonstrating the callbacks");
}

console.log("The application is started");



// 18 Assosiatiivinen taulukko

const bookArray = [
    { id_book: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
    { id_book: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
    { id_book: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" },
    { id_book: 4, name: "TBA", author: "Zelanshi", isbn: "0534613932" },
    { id_book: 5, name: "Shaping Space", author: "Speight", isbn: "0534613934" },
    { id_book: 6, name: "Art Since 1940", author: "Speight", isbn: "0131839780" },
    { id_book: 7, name: "Make it in Clay", author: "Stokstad", isbn: "0076417011" },
    { id_book: 8, name: "Art History Vol II & ala carte lab", author: "Stokstad", isbn: "205795617" },
    { id_book: 9, name: "Accounting Concepts", author: "Albrecht", isbn: "1111287856" },
    { id_book: 10, name: "Intermediate Accounting", author: "Stice", isbn: "0538479736" },
    { id_book: 11, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813" },
    { id_book: 12, name: "Management", author: "Williams", isbn: "9780757524028" },
    { id_book: 13, name: "Leadership Wisdom of Jesus", author: "Manz", isbn: "9781609940041" },
    { id_book: 14, name: "Business Law Today", author: "Miller", isbn: "9780324786156" },
    { id_book: 15, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813" }
];

export { bookArray };

// 2.
console.log("2.");
console.log(bookArray.typeof);

// 3.
console.log("3.");
bookArray.forEach(function (book) { console.log(book.id_book, ",", book.name, ",", 
                                                      book.author, ",", book.isbn); });

// 4.
console.log("4.");
console.log( bookArray[0].id_book, bookArray[0].name, bookArray[0].author, bookArray[0].isbn);

// 5.
console.log("5.");
console.log(bookArray[0].name);

// 6.
console.log("6.");
console.log(bookArray.length);

// 7.
console.log("7.");
bookArray.forEach(function (book) {console.log(book.name);});