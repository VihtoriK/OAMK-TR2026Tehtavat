// 19 Olio

class book {
    constructor(book_array) {
        this.book_array = book_array;
    }

    getAllBooks() {
        return this.book_array;
    }

    getOneBook(id) {
        for(var i = 0; i < this.book_array.length; i++) {
            if(this.book_array[i].id_book == id) {
                return this.book_array[i];
            }
        }
    }

    addBook(id_book, name, author, isbn) {
        var book = { id_book : id_book , name : name, author : author, isbn : isbn };
        this.book_array.push(book);
    }
}


import {bookArray} from './callback_example.js';

function test() {

    console.log("book.js test!");
    console.log("");

    const bookArr = new book(bookArray);

    console.log("getAllBooks()");
    var books = bookArr.getAllBooks;
    books.forEach(function (book) { console.log(book.id_book, ",", book.name, ",", 
                                                        book.author, ",", book.isbn); });
    
    console.log("getOneBook()");
    var oneBook = bookArr.getOneBook(15);
    console.log(oneBook);

    console.log("addBook()");
    bookArr.addBook(16, "Kirja", "Joku", "9099090090909");
    var seBook = bookArr.getOneBook(16);
    console.log(seBook);

}