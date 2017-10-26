import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {
  books: Array<Book> = new Array<Book>();
  constructor() { }


  addBook(book: Book) {
    this.books.push(book);
    //console.log(this.books);
  }
}
